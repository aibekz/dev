import type { Config } from 'tailwindcss'

const config: Config = {
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
        'aoc-link': '#009900',
        'aoc-link-hover': '#99ff99',
        'aoc-header': '#00cc00',
        'aoc-white': '#ffffff',
        'aoc-star': '#ffff66',
        'aoc-code-bg': '#10101a',
        'aoc-code-border': '#333340',
        'aoc-input-bg': '#10101a',
        'aoc-input-border': '#666666',
        'aoc-hover-bg': '#19193b',
        'aoc-supporter': '#ffff66',
        'aoc-sponsor': '#79a2d8',
      },
      fontFamily: {
        'source-code': ['"Source Code Pro"', 'monospace'],
      },
      fontSize: {
        'aoc-base': '14pt',
      },
      minWidth: {
        'aoc-min': '60em',
      },
      width: {
        'aoc-article': '45em',
        'aoc-wrap': '45em',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

export default config
