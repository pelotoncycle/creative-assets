module.exports = {
  mode: "spa",
  head: {
    title: "Peloton Creative Assets",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Peloton Creative Assets"
      },
      { name: "robots", content: "noindex, nofollow" }
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
  },
  loading: false,
  loadingIndicator: {
    name: "~/static/views/loading.html"
  },
  css: [{ src: "~assets/css/main.scss", lang: "scss" }],
  modules: ["@nuxtjs/axios"],
  plugins: ["~/plugins/image-gallery", "~/plugins/scroll"],
  env: {
    airtableEndpointUrl: "https://api.airtable.com",
    airtableApiKey: process.env.AIRTABLE_API_KEY,
    airtableBase: "appHR9l7PDijOKqIA"
  },
  axios: {
    baseURL: "https://api.onepeloton.com/api/"
  },
  router: {
    linkActiveClass: "is-active"
  },
  build: {
    postcss: {
      plugins: {
        "postcss-cssnext": {
          features: {
            customProperties: false
          }
        }
      }
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
