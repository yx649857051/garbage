import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
// import {Toast,Dialog} from 'vant';

// Vue.use(Toast);
// Vue.use(Dialog);

// import Vue from 'vue';
import AppScroll from './components/app-scroll';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.component(AppScroll.name, AppScroll);

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')
