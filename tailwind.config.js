/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
      colors: {
        base:    'var(--bg-base)',
        card:    'var(--bg-card)',
        border:  'var(--bg-border)',
        gold: {
          DEFAULT: 'var(--gold-primary)',
          light:   'var(--gold-light)',
          soft:    'var(--gold-soft)',
        },
        brown: {
          dark: 'var(--brown-dark)',
          mid:  'var(--brown-mid)',
        },
        primary: 'var(--text-primary)',
        muted:   'var(--text-muted)',
      },
    },
  },
  plugins: [],
}
