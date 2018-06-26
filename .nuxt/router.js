import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _99f4ff60 = () => import('../pages/workouts/index.vue' /* webpackChunkName: "pages/workouts/index" */).then(m => m.default || m)
const _716eef72 = () => import('../pages/instructors/index.vue' /* webpackChunkName: "pages/instructors/index" */).then(m => m.default || m)
const _ee33f216 = () => import('../pages/onboarding/index.vue' /* webpackChunkName: "pages/onboarding/index" */).then(m => m.default || m)
const _17044c4b = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/workouts",
			component: _99f4ff60,
			name: "workouts"
		},
		{
			path: "/instructors",
			component: _716eef72,
			name: "instructors"
		},
		{
			path: "/onboarding",
			component: _ee33f216,
			name: "onboarding"
		},
		{
			path: "/",
			component: _17044c4b,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
