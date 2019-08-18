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
                name:'result',
                path: 'result/:id',
                component: () => import('../pages/searchResult'),
            },
            //垃圾分页详情页
            {
                name:'classify',
                path: 'classify/:id',
                component: () => import('../pages/classify'),
            },
            //分类专题详情页
            {
                name:'special',
                path: 'special:/id',
                component: () => import('../pages/special'),
            },
            //测试页面
            {
                path: 'test',
                component: () => import('../pages/test'),
            },
            //结果页面
            {
                path: 'answer',
                component: () => import('../pages/answer'),
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
