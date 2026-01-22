/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-0': '#0C0D0F',
        'bg-1': '#121417',
        'surface': '#171A1F',
        'surface-2': '#1E2229',
        'text-primary': '#F2F2F2',
        'text-muted': 'rgba(242, 242, 242, 0.72)',
        'line': 'rgba(255, 255, 255, 0.08)',
        'accent': '#E9D090',
        'accent-2': '#F3E1B5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
