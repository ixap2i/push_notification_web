import TopTemplate from '../components/templates/TopTemplate.vue'
import Notfound from "../components/templates/Notfound.vue"
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TopTemplate
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    // will match everything and put it under `$route.params.pathMatch`
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: Notfound },
    // will match anything starting with `/user-` and put it under `$route.params.afterUser`
    // { path: '/user-:afterUser(.*)', component: UserGeneric },
  ]
})

export default router
