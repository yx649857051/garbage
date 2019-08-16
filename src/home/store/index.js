import Vue from 'vue';
import Vuex from 'vuex';
import api from '../request/api';
import {get, post} from '../request'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        homeData: [],
        cityData: [],
    },
    mutations: {
        setHomeData(state, params) {
            state.homeData = params;
        },
        setCityData(state, params) {
            state.cityData = params;
        }
    },
    actions: {
        async requestHomeData(context,params) {
            let data = await get(api.HOME_URL,{'cityId':params});
            context.commit('setHomeData', data.data);
        },

        async requestCityList(context) {
            let data = await get(api.HOME_CITY_LIST);
            context.commit('setCityData', data.data);
        },
        async quickSearchRequest(context,params){
            let data = await post(api.HOME_FAST_SEARCH,{'rname':params});
            console.log(data);
        }
    }
})