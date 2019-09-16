// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueDisqus from 'vue-disqus'
import '~/assets/bootstrap.css'
import '~/assets/style.css'
import '~/assets/font-awesome.css'
import '~/assets/menu.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueDisqus)
}
