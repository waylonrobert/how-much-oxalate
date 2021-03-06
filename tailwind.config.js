/* eslint-disable global-require */
/* eslint-disable prettier/prettier */
module.exports = {
  /* very important otherwise PurgeCSS won't work */
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        // 'teal-primary': '#578096',
        'teal-primary':'#51788C',
        'navy-secondary': '#0E3043',
        'navy-aux': '#133F57',
        'offwhite-aux': '#F8F9F9',
        'teal-secondary': '#5AA7AB',
        // 'red-accent': 'rgba(235, 13, 13, 0.22)',
        'gray-accent': '#8A8C8C',
        'red-accent': '#E50D0D',
        'red-accent-rgba': 'rgba(255, 192, 203, 1)',
        'redRock-accent': '#C03F3F',
        'redRock-accent-rgba': 'rgba(192, 63, 63, 0.85)',
        'orange-accent': '#a96100',
        'orange-accent-rgba': 'rgba(238,154,27, 1)',
        'yellow-accent': '#a88c00',
        'yellow-accent-rgba': 'rgba(233,198,16, 1)',
        'green-accent': '#1AA118',
        'green-accent-rgba': 'rgba(26,161,24, 1)',
        'blue-accent': '#668EA4',
        'blue-accent-rgba': 'rgba(102,142,164, 1)',
        'blue-soft-accent': '#4A7087',
        'blue-soft-accent-rgba': 'rgba(74, 112, 135, 1)',
        'teal-soft-accent': '#E3EEF3',
        // 'blue-desaturated': '#7299ae',
        'blue-desaturated': '#32596d',
      },
      fontFamily: {
        ibmplexmono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
