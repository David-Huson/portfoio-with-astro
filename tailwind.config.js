const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#090B0D',
        light: {
          txt: '#FAFAFB',
          bg: 'E7E7E7',
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
        heading: ['Montserrat', ...defaultTheme.fontFamily.sans],
        subheading: ['Cormorant', ...defaultTheme.fontFamily.serif],
        body: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm: ['0.667rem', '1'],
        base: ['1rem', '1'],
        md: ['1.5rem', '1'],
        lg: ['2.25rem', '1'],
        xl: ['3.375rem', '1'],
        '2xl': ['5.063rem', '1'],
        '3xl': ['7.594rem', '1'],
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
              '--tw-prose-invert-links': theme('colors.white'),
              '--tw-prose-invert-code': theme('colors.white'),
              '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
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
