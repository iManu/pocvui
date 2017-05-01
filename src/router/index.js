import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Coucou from '@/components/Coucou';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/coucou',
            name: 'Coucou',
            component: Coucou,
        },
    ],
});
