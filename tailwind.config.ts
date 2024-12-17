import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0a1763',
        'regular-blue': '#004a87',
        'yellow': '#feed00'
      },
      spacing: {
        '12.5': '50px',
        '25': '100px',
      },
      gridTemplateColumns: {
        'sm': 'minmax(0, 360px)',
        'md': 'repeat(2, minmax(0, 360px))',
        'lg': 'repeat(2, minmax(0, 400px))'
      }
    },
  },
  plugins: [],
}
export default config
