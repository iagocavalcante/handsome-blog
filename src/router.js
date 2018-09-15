import Vue from 'vue'
import Router from 'vue-router'
import PostService from './domains/Post/Service/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home'
      },
      component: () => import(/* webpackChunkName: "about" */ './domains/Me/Components/Me.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      meta: {
        title: 'Blog' // Title must be a string.
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './domains/Post/Components/Posts.vue'),
      props: route => ({
        service: PostService.build({})
      })
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      meta: {
        title: 'Portfólio' // Title must be a string.
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './domains/Portfolio/Components/Portfolio.vue')
    }
  ]
})
