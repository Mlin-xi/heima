import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
import Main from '../views/home/main.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'login',
  component: Login
}, // , {
//   path: '/',
//   redirect: 'Home', // 始终默认
// }
{
  path: '/home',
  name: 'home',
  component: Home,
  children: [{
    path: '',
    component: Main
  }]
}
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
