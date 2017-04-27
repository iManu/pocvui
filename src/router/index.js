import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Coucou from '@/components/Coucou';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/coucou',
      name: 'Coucou',
      component: Coucou,
    },
  ],
});
