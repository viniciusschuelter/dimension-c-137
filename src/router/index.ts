import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Episodes from '../views/Episodes.vue';
import Locations from '../views/Locations.vue';
import Plumbus from "../views/Plumbus.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
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
];

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;
