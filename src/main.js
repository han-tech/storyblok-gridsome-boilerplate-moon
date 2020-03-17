// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import DefaultLayout from '~/layouts/Default.vue'
import Components from './components'
import { setupMetaTags } from './utils/meta-tags'

import './assets/css/reset.css'
import './assets/sass/global.scss'
import auth from './utils/auth'

export default function (Vue, { router, head, isClient }) {
  NProgress.configure()

  Vue.use(auth)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // registering the components
  Object.keys(Components).forEach(key => {
    Vue.component(key, Components[key])
  })

  // very basic "setup" of a global guard
  router.beforeEach((to, from, next) => {
    if(to.path != '/dashboard') { // check if "to"-route is not "dashboard" and allow access
      next()
    } else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access
      if (from.name !== null) {
        if (from.query._storyblok) {
          return next(false)
        }
        NProgress.start()
      }
      next()
    } else { // trigger auth0's login.
      router.app.$auth.login()
    }
  })

/*   router.beforeEach((_, from, next) => {
    if (from.name !== null) {
      if (from.query._storyblok) {
        return next(false)
      }
      NProgress.start()
    }
    next()
  }) */
      
  router.afterEach(() => {
    NProgress.done()
  })

  // setup head
  setupMetaTags({ head })
}
