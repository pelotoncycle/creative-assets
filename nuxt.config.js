module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Peloton Creative Assets',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Peloton Creative Assets' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
	loading: { color: 'rgb(255, 51, 71)' },
	css: [
		{ src: '~assets/css/main.scss', lang: 'scss' }
	],
	modules: [
		'@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/image-gallery',
    '~/plugins/scroll'
  ],
	axios: {
    baseURL: 'https://api.onepeloton.com/api/'
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
