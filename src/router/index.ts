import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Episodes from '../views/Episodes.vue'
import Locations from '../views/Locations.vue'
import Plumbus from '../views/Plumbus.vue'

const routes: Array<any> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/plumbus',
    name: 'Plumbus',
    component: Plumbus,
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: Episodes,
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations,
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
