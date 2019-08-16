import Vue from 'vue';
import Router from 'vue-router';
import homeRouter from './homeRouter';

Vue.use(Router);

const routes = [

    homeRouter,

    // {
    //     path: '/',
    //     component: () => import('../pages/home'),
    //
    //     children: [
    //         {
    //             path: 'search',
    //             component: () => import('../pages/search')
    //         }
    //     ]
    // },
    {
        path: 'search',
        component: () => import('../pages/search')
    },

    {
        path: '/404',
        component: () => import('../pages/NotFind')
    },

    {
        // path:'**',
        // redirect: '/404'
    }

]
export default new Router(
    {
        mode: 'history',
        // routes
    }
)