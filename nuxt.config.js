module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Peloton Creative Assets',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'robots', content: 'noindex' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
	loading: { color: 'rgb(255, 51, 71)' },
	css: [
		{ src: '~assets/css/main.scss', lang: 'scss' }
	],
	modules: [
		'@nuxtjs/axios'
	],
	axios: {
    baseURL: 'https://qgcdz8g9v0.execute-api.us-east-1.amazonaws.com/beta/api/'
	},
	router: {
    linkActiveClass: 'is-active'
  },
  build: {
		postcss: {
      plugins: {
        'postcss-cssnext': {
          features: {
            customProperties: false
          }
        }
      }
		},
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
