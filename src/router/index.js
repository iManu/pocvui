import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import PageN1 from '@/components/pages/PageN1';

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/domain',
            name: 'Domain',
            component: PageN1,
        },
        {
            path: '/server',
            name: 'Servers',
            component: PageN1,
        },
        {
            path: '/hosting',
            name: 'Hosting',
            component: PageN1,
        },
        {
            path: '/ods',
            name: 'ODS',
            component: PageN1,
        },
        {
            path: '/c14',
            name: 'C14',
            component: PageN1,
        },
        {
            path: '/rpn',
            name: 'RPN',
            component: PageN1,
        },
        {
            path: '/storage',
            name: 'Storage',
            component: PageN1,
        },
        {
            path: '/api',
            name: 'API',
            component: PageN1,
        },
        {
            path: '/support',
            name: 'Support',
            component: PageN1,
        },
    ],
});
