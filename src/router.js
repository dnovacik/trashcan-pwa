import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'splash',
      component: () => import('./views/Splash.vue')
    },
    {
      path: '/trashit',
      name: 'trashit',
      component: () => import ('./views/Trashit.vue')
    },
    {
      path: '/info',
      name: 'info',
      // component: () => import('./views/Info.vue')
    },
    {
      path: '/setit',
      name: 'setit',
      component: () => import('./views/Setit.vue')
    },
  ],
});
