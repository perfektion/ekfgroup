export default {
  head: {
    title:
      'EKF — Производитель надёжной и доступной электротехнической продукции',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  css: [
    '~/assets/scss/_fonts.scss',
    '~/assets/scss/_variables.scss',
    '~/assets/scss/main.scss',
  ],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['@nuxtjs/style-resources'],

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  build: {},
}
