import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Domain from '@/components/pages/Domain';
import Servers from '@/components/pages/Servers';
import Hosting from '@/components/pages/Hosting';
import ODS from '@/components/pages/ODS';
import C14 from '@/components/pages/C14';
import RPN from '@/components/pages/RPN';
import Storage from '@/components/pages/Storage';
import API from '@/components/pages/API';
import Support from '@/components/pages/Support';

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
            component: Domain,
        },
        {
            path: '/server',
            name: 'Servers',
            component: Servers,
        },
        {
            path: '/hosting',
            name: 'Hosting',
            component: Hosting,
        },
        {
            path: '/ods',
            name: 'ODS',
            component: ODS,
        },
        {
            path: '/c14',
            name: 'C14',
            component: C14,
        },
        {
            path: '/rpn',
            name: 'RPN',
            component: RPN,
        },
        {
            path: '/storage',
            name: 'Storage',
            component: Storage,
        },
        {
            path: '/api',
            name: 'API',
            component: API,
        },
        {
            path: '/support',
            name: 'Support',
            component: Support,
        },
    ],
});
