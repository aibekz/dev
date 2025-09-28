/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'aoc-bg': '#0f0f23',
        'aoc-text': '#cccccc',
        'aoc-green': '#009900',
        'aoc-yellow': '#ffff66',
        'aoc-red': '#ff6666',
        'aoc-blue': '#6666ff',
        'aoc-gold': '#ffaa00',
      },
      fontFamily: {
        mono: ['Source Code Pro', 'var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
