/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#08080a',
        surface: {
          DEFAULT: '#0f0f12',
          elevated: '#17171c',
          card: '#121216',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        accent: {
          cyan: '#38bdf8',
          emerald: '#34d399',
          amber: '#fbbf24',
          crimson: '#f87171',
          purple: '#a78bfa',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
