import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/epic',
    name: 'epic',
    component: () => import('../views/EpicView.vue')
  },
  {
    path: '/epic-detail/:id',
    name: 'epic-detail',
    component: () => import('../views/EpicDetailView.vue')
  },
  {
    path: '/techport',
    name: 'techport',
    component: () => import('../views/TechportView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
