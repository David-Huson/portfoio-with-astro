//fix modlue is undefined error
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        dark: '#101218',
        light: '#FAFAFB',
        gray: {
          light: '#637081',
          md: '#393B3C',
          dark: '#282A2F',
        },
        yellow: {
          dark: '#637081',
          light: '#FFBF00',
        },
        blue: {
          light: '2AB3FA',
          dark: '#0D3B66',
        },
        pink: '#D8135B',
        orange: '#FB5012',
        sage: '#5C6F68',
        lavender: '#CBC5EA',
        green: '#3BC14A',
        magenta: '#ff3366',
        purple: '#6665DD',
      },
    },
  },
  plugins: ['@tailwind/typography'],
};
