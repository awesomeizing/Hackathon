'use strict';
/**
 * VeilOps v2.4.0 · Supabase Client & Realtime Sync Bridge
 * 
 * Provides Tier 2 Cloud Persistence & Realtime Broadcasting via @supabase/supabase-js
 * with graceful fallback to native local SQLite WAL store if Supabase credentials
 * are not provided.
 * 
 * STRICT PRIVACY INVARIANT:
 * Zero raw logs, zero private IPs, and zero raw secrets are ever sent to Supabase.
 * Only canonical allow-listed metadata sealed with SHA-256 Signal Passports.
 */

const { createClient } = require('@supabase/supabase-js');

// Load environment variables if available
const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';

let supabase = null;
let isConfigured = false;

if (SUPABASE_URL && SUPABASE_KEY) {
  try {
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    isConfigured = true;
    console.log(`[supabase] Connected to Supabase at ${new URL(SUPABASE_URL).hostname}`);
  } catch (err) {
    console.warn(`[supabase] Failed to initialize Supabase client: ${err.message}. Using local SQLite fallback.`);
  }
} else {
  console.log('[supabase] SUPABASE_URL / KEY not set in environment. Running in zero-trust Local Fallback WAL mode.');
}

class SupabaseBridge {
  constructor() {
    this.isConfigured = isConfigured;
    this.client = supabase;
    this.stats = {
      telemetry_synced: 0,
      incidents_synced: 0,
      heartbeats_synced: 0,
      errors: 0,
    };
  }

  getStatus() {
    return {
      configured: this.isConfigured,
      url: this.isConfigured ? (SUPABASE_URL.replace(/:\/\/.*@/, '://') || null) : null,
      mode: this.isConfigured ? 'supabase_cloud_active' : 'local_sqlite_wal_fallback',
      stats: { ...this.stats },
    };
  }

  /**
   * Sync scrubbed allow-listed telemetry payload to Supabase telemetry_metadata
   * Strictly enforces allow-list and zero-raw-log privacy invariant.
   */
  async syncTelemetry(tenantId, payload, digest, receivedMs) {
    if (!this.isConfigured || !this.client) return { status: 'fallback_local' };

    try {
      const records = payload.records || [];
      const metricsMap = {};
      let secSummary = null;
      let primarySourceId = 'src-unassigned';

      for (const r of records) {
        if (r.source_id) primarySourceId = r.source_id;
        if (r.kind === 'metric') {
          metricsMap[r.name] = r.last ?? r.avg;
        } else if (r.kind === 'security_summary') {
          secSummary = r;
        }
      }

      const row = {
        payload_id: payload.payload_id,
        tenant_id: tenantId,
        collector_id: payload.collector_id || null,
        region: payload.region || 'ap-south',
        pseudonymous_source_id: primarySourceId,
        event_timestamp_utc: payload.created_at || new Date(receivedMs).toISOString(),
        received_utc: new Date(receivedMs).toISOString(),
        source_timezone: payload.source_tz || 'UTC',
        cpu_pct: metricsMap['cpu_pct'] ?? null,
        memory_pct: metricsMap['mem_pct'] ?? metricsMap['memory_pct'] ?? null,
        disk_pct: metricsMap['disk_pct'] ?? null,
        bandwidth_mbps: metricsMap['bandwidth_mbps'] ?? null,
        latency_ms: metricsMap['latency_ms'] ?? null,
        packet_loss_pct: metricsMap['packet_loss_pct'] ?? null,
        service_availability: metricsMap['service_up'] !== undefined ? (metricsMap['service_up'] * 100) : 100.0,
        failed_login_count_1m: secSummary?.failed_count ?? 0,
        security_risk_score: secSummary?.risk_score ?? 0.0,
        secrets_redacted_count: secSummary?.secrets_scrubbed_count ?? 0,
        health_state: 'Good',
        health_reason: null,
        alert_context: null,
        signal_passport_sha256: digest,
      };

      // Idempotent upsert by payload_id
      const { data, error } = await this.client
        .from('telemetry_metadata')
        .upsert(row, { onConflict: 'payload_id', ignoreDuplicates: true });

      if (error) {
        this.stats.errors++;
        console.warn(`[supabase] Error syncing telemetry: ${error.message}`);
        return { status: 'error', error: error.message };
      }

      this.stats.telemetry_synced++;

      // Also record egress receipt proof in Supabase
      await this.client.from('egress_receipts').insert({
        tenant_id: tenantId,
        collector_id: payload.collector_id || null,
        payload_id: payload.payload_id,
        signal_passport_sha256: digest,
        allow_listed_fields_count: records.length,
        dropped_fields_count: secSummary?.dropped_fields_count || 0,
        redacted_secrets_count: secSummary?.secrets_scrubbed_count || 0,
        buffered_during_outage: Boolean(payload.buffered_during_outage),
        transmitted_at_utc: new Date().toISOString(),
      });

      return { status: 'synced', payload_id: payload.payload_id };
    } catch (err) {
      this.stats.errors++;
      return { status: 'error', error: err.message };
    }
  }

  /**
   * Sync collector heartbeat & health state to Supabase collectors table
   */
  async syncCollectorHeartbeat(tenantId, hb, nowMs) {
    if (!this.isConfigured || !this.client) return { status: 'fallback_local' };

    try {
      const row = {
        id: hb.collector_id,
        tenant_id: tenantId,
        collector_code: hb.collector_id,
        region: hb.region || 'ap-south',
        version: hb.version || 'v2.4.0',
        status: 'online',
        health_state: hb.cpu_pct > 90 ? 'Poor' : (hb.cpu_pct > 75 ? 'Fair' : 'Excellent'),
        health_reason: hb.cpu_pct > 90 ? 'Collector CPU saturated' : 'Heartbeat nominal',
        last_heartbeat_utc: new Date(nowMs).toISOString(),
        collector_cpu_pct: hb.cpu_pct || 0.0,
        collector_mem_pct: hb.rss_mb ? (hb.rss_mb / 10.24) : 0.0,
        config_synced: true,
        updated_at: new Date(nowMs).toISOString(),
      };

      const { error } = await this.client
        .from('collectors')
        .upsert(row, { onConflict: 'id' });

      if (!error) this.stats.heartbeats_synced++;
      return { status: error ? 'error' : 'synced' };
    } catch (err) {
      return { status: 'error', error: err.message };
    }
  }

  /**
   * Sync incident to Supabase incidents table
   */
  async syncIncident(tenantId, region, inc) {
    if (!this.isConfigured || !this.client) return { status: 'fallback_local' };

    try {
      const row = {
        tenant_id: tenantId,
        region: region,
        primary_source_id: (inc.sources && inc.sources[0]) || 'unknown',
        title: inc.signals ? `Correlated anomaly on ${inc.signals.join(' + ')}` : 'System Anomaly',
        severity: inc.signals && inc.signals.length >= 2 ? 'Poor' : 'Fair',
        status: inc.remediation?.state === 'executed_simulated' ? 'mitigated' : (inc.remediation?.state === 'rolled_back' ? 'rolled_back' : 'open'),
        merged_alert_count: inc.alert_count || 1,
        confidence_pct: inc.recommendation?.confidence_pct || 92.5,
        why_flagged: inc.recommendation?.why || 'Multiple deviations correlated within temporal window',
        contributing_signals_json: inc.signals || [],
        recommended_action: inc.recommendation?.action || 'Investigate source',
        updated_at_utc: new Date().toISOString(),
      };

      const { data, error } = await this.client.from('incidents').insert(row).select();
      if (!error) this.stats.incidents_synced++;
      return { status: error ? 'error' : 'synced', data };
    } catch (err) {
      return { status: 'error', error: err.message };
    }
  }

  /**
   * Record human safe-remediation audit log in Supabase
   */
  async recordRemediationAudit(tenantId, incidentId, actionType, actor, status, token) {
    if (!this.isConfigured || !this.client) return { status: 'fallback_local' };

    try {
      const { error } = await this.client.from('remediation_audit_logs').insert({
        tenant_id: tenantId,
        incident_id: incidentId,
        action_type: actionType,
        policy_status: 'cleared_sp_policy_1',
        approved_via: 'tumbler_lock',
        execution_status: status,
        rollback_token: token,
        actor_label: actor,
        recorded_at_utc: new Date().toISOString(),
      });
      return { status: error ? 'error' : 'synced' };
    } catch (err) {
      return { status: 'error', error: err.message };
    }
  }

  /**
   * Record health state transition in Supabase
   */
  async recordHealthTransition(tenantId, entityType, entityId, fromState, toState, reason) {
    if (!this.isConfigured || !this.client) return { status: 'fallback_local' };

    try {
      const { error } = await this.client.from('health_transitions').insert({
        tenant_id: tenantId,
        entity_type: entityType,
        entity_id: entityId,
        from_state: fromState,
        to_state: toState,
        reason: reason,
        transitioned_at_utc: new Date().toISOString(),
      });
      return { status: error ? 'error' : 'synced' };
    } catch (err) {
      return { status: 'error', error: err.message };
    }
  }
}

module.exports = new SupabaseBridge();
