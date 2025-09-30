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
        'dc-bg': '#0f0f23',
        'dc-text': '#cccccc',
        'dc-link': '#009900',
        'dc-link-hover': '#99ff99',
        'dc-header': '#00cc00',
        'dc-white': '#ffffff',
        'dc-star': '#ffff66',
        'dc-code-bg': '#10101a',
        'dc-code-border': '#333340',
        'dc-input-bg': '#10101a',
        'dc-input-border': '#666666',
        'dc-hover-bg': '#19193b',
        'dc-supporter': '#ffff66',
        'dc-sponsor': '#79a2d8',
      },
      fontFamily: {
        'source-code': ['"Source Code Pro"', 'monospace'],
      },
      fontSize: {
        'dc-base': '14pt',
      },
      minWidth: {
        'dc-min': '60em',
      },
      width: {
        'dc-article': '45em',
        'dc-wrap': '45em',
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
