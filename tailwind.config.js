// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],

  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: '1124px',
          xl: '1124px',
          '2xl': '1124px',
        },
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      colors: {
        'electric-violet': {
          '50': '#fbf5ff',
          '100': '#f6e8ff',
          '200': '#eed5ff',
          '300': '#e0b4fe',
          '400': '#ce84fc',
          '500': '#bb55f7',
          '600': '#a833ea',
          '700': '#9423d1',
          '800': '#7a21a8',
          '900': '#641c87',
          '950': '#460764',
        }
      }
    },
  },

  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
  },

  plugins: [],
};