import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Heroes from '../views/Heroes.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/heroes',
      name: 'Heroes',
      component: Heroes
    }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
