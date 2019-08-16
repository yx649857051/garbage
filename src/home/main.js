import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
// import {Toast,Dialog} from 'vant';

// Vue.use(Toast);
// Vue.use(Dialog);

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')
