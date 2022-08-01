const defaultTheme = require('tailwindcss/defaultTheme');
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
          dull: '#637081',
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
        subheading: ['Lora', ...defaultTheme.fontFamily.serif],
        body: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm: '0.667rem',
        base: '1rem',
        md: '1.5rem',
        lg: '2.25rem',
        xl: '3.375rem',
        '2xl': '5.063rem',
        '3xl': '7.594rem',
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
              },
              h2: {
                fontFamily: [theme('fontFamily.heading')],
                fontSize: theme('fontSize.2xl'),
              },
              h3: {
                fontFamily: [theme('fontFamily.heading')],
                fontSize: theme('fontSize.xl'),
              },
              h4: {
                fontFamily: [theme('fontFamily.subheading')],
                fontWeight: 400,
                fontSize: theme('fontSize.lg'),
              },
              h5: {
                fontFamily: [theme('fontFamily.subheading')],
                fontSize: theme('fontSize.md'),
              },
              p: {
                fontFamily: [theme('fontFamily.body')],
              },
              a: {
                fontFamily: [theme('fontFamily.body')],
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
