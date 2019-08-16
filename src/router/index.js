import Vue from 'vue';
import Router from 'vue-router';
import NotFind from '../pages/NotFind'

Vue.use(Router);

const routes = [
    // homeRouter,

    {
        path: '/home',
        component: () => import('../pages/home'),

        children: [
            //搜索
            {
                path: 'search',
                component: () => import('../pages/search'),
            }
        ]
    },
    {
        path:'/start',
        component:()=>import('../pages/start')
    },
    {
        path:'/',
        redirect: '/start'
    },
    {
        path: '/404',
        name: '404',
        component: NotFind
    },
];


export default new Router(
    {
        mode: 'history',
        routes
    }
)
