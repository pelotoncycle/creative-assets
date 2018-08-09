import Vue from 'vue'
import StoryblokClient from 'storyblok-js-client'
import StoryblokVue from 'storyblok-vue'

const Client = {
  install () {
    if (!Vue.prototype.$storyapi) {
      Vue.prototype.$storyapi = new StoryblokClient({
        accessToken: 'dskRVokDjUUEXiRBwkPETwtt',
        cache: {
          clear: 'auto',
          type: 'memory'
        },
        timeout: 5000
      })
    }
  }
}

Vue.use(Client)
Vue.use(StoryblokVue)

export default (ctx) => {
  const { app, store } = ctx

  app.$storyapi = Vue.prototype.$storyapi
  ctx.$storyapi = Vue.prototype.$storyapi

  if (store) {
    store.$storyapi = Vue.prototype.$storyapi
  }
}
