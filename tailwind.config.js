const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/pages/index.{html, astro, js, jsx, tsx}', './src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#090B0D',
        light: {
          txt: '#FAFAFB',
          bg: '#E7E7E7',
        },
        gray: {
          light: '#637081',
          md: '#393B3C',
          dark: '#282A2F',
        },
        yellow: {
          dull: '#FFAE03',
          bright: '#FFBF00',
        },
        blue: {
          light: '2AB3FA',
          dark: '#0D3B66',
          900: '#101218',
        },
        pink: '#D8135B',
        orange: '#FB5012',
        sage: '#5C6F68',
        lavender: '#CBC5EA',
        green: '#3BC14A',
        magenta: '#ff3366',
        purple: '#6665DD',
      },
      fontFamily: {
        heading: ['Montserrat', 'Roboto'],
        subheading: ['Cormorant'],
        body: ['Roboto'],
      },
      fontSize: {
        sm: ['0.618rem', '1'],
        base: ['1rem', '1'],
        md: ['1.618rem', '1'],
        lg: ['2.618rem', '1'],
        xl: ['4.236rem', '1'],
        '2xl': ['6.854rem', '1'],
        '3xl': ['11.089rem', '1'],
        '4xl': ['17.942rem', '1'],
        '5xl': ['29.03rem', '1'],
      },
      typography: ({ theme }) => {
        return {
          DEFAULT: {
            css: {
              '--tw-prose-body': theme('colors.dark'),
              '--tw-prose-headings': theme('colors.dark'),
              '--tw-prose-links': theme('colors.dark'),
              '--tw-prose-code': theme('colors.dark'),
              '--tw-prose-pre-bg': theme('colors.dark'),
              '--tw-prose-invert-body': theme('colors.light.txt'),
              '--tw-prose-invert-headings': theme('colors.light.txt'),
              '--tw-prose-invert-links': theme('colors.light.txt'),
              '--tw-prose-invert-code': theme('colors.light.txt'),
              h1: {
                fontFamily: [theme('fontFamily.heading')],
                fontSize: theme('fontSize.3xl'),
                marginBlockEnd: 0,
                marginBlockStart: 0,
              },
              h2: {
                fontFamily: [theme('fontFamily.heading')],
                fontSize: theme('fontSize.2xl'),
                marginBlockEnd: 0,
                marginBlockStart: 0,
              },
              h3: {
                fontFamily: [theme('fontFamily.heading')],
                fontSize: theme('fontSize.xl'),
                marginBlockEnd: 0,
                marginBlockStart: 0,
              },
              h4: {
                fontFamily: [theme('fontFamily.subheading')],
                fontSize: theme('fontSize.lg'),
                marginBlockEnd: 0,
                marginBlockStart: 0,
              },
              h5: {
                fontFamily: [theme('fontFamily.subheading')],
                fontSize: theme('fontSize.md'),
                marginBlockEnd: 0,
                marginBlockStart: 0,
              },
              h6: {
                fontFamily: [theme('fontFamily.subheading')],
                fontSize: theme('fontSize.base'),
                marginBlockEnd: 0,
                marginBlockStart: 0,
              },
              p: {
                fontFamily: [theme('fontFamily.body')],
                fontSize: theme('fontSize.base'),
                marginBlockEnd: 0,
                marginBlockStart: 0,
              },
              a: {
                fontFamily: [theme('fontFamily.body')],
                fontSize: theme('fontSize.base'),
                textDecoration: 'none',
              },
              button: {
                fontFamily: [theme('fontFamily.body')],
                fontSize: theme('fontSize.base'),
                textDecoration: 'none',
              },
            },
          },
        };
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'type',
    }),
  ],
};
