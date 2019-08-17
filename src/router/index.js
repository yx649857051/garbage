import Vue from 'vue';
import Router from 'vue-router';
import NotFind from '../pages/NotFind'

Vue.use(Router);

const routes = [

    {
        path: '/start',
        component: () => import('../pages/start')
    },
    {
        path: '/',
        redirect: '/start'
    },

    {
        path: '/home',
        component: () => import('../pages/home'),

        children: [
            //搜索
            {
                path: 'search',
                component: () => import('../pages/search'),
            },
            //搜索结果页
            {
                path: 'result',
                component: () => import('../pages/searchResult'),
            },
            //垃圾分页详情页
            {
                path: 'classify',
                component: () => import('../pages/classify'),
            },
            //分类专题详情页
            {
                path: 'special',
                component: () => import('../pages/special'),
            },
            //测试页面
            {
                path: 'test',
                component: () => import('../pages/test'),
            },
        ]
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
