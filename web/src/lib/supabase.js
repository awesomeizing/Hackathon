import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Subscribe to live Supabase Realtime events for a specific tenant
 * Gracefully falls back if Supabase is not configured.
 */
export function subscribeToTenantRealtime(tenantId, onEvent) {
  if (!supabase) return () => {};

  const channel = supabase
    .channel(`tenant-${tenantId}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'telemetry_metadata',
        filter: `tenant_id=eq.${tenantId}`,
      },
      (payload) => onEvent({ type: 'telemetry', data: payload.new })
    )
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'incidents',
        filter: `tenant_id=eq.${tenantId}`,
      },
      (payload) => onEvent({ type: 'incident', data: payload.new })
    )
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'collectors',
        filter: `tenant_id=eq.${tenantId}`,
      },
      (payload) => onEvent({ type: 'collector', data: payload.new })
    )
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'health_transitions',
        filter: `tenant_id=eq.${tenantId}`,
      },
      (payload) => onEvent({ type: 'transition', data: payload.new })
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}
