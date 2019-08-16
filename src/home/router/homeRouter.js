export default {

    path:'/home',
    component:()=>import('../pages/home'),


    children:[
        //搜索
        {
            path:'search',
            component:()=>import('../pages/search'),
        },

    ]
}