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
        async requestHomeData(context, params) {
            let data = await get(api.HOME_URL, {'cityId': params});
            context.commit('setHomeData', data.data);
        },

        async requestCityList(context) {
            let data = await get(api.HOME_CITY_LIST);
            context.commit('setCityData', data.data);
        },

        //快捷搜索列表
        async quickSearchListRequest(context) {
            let data = await post(api.HOME_FAST_SEARCH);
            console.log(data);
        },

        //关键字搜索 传用户输入的关键字
        async searchRequest(context, params) {
            let data = await get(api.HOME_SEARCH, {'rname': params});
            console.log(data);
        },

        //分类查询 传id
        async searchByType(context, params) {
            let data = await get(api.HOME_SEARCH_BY_TYPE, {'typeId': params});
            console.log(data);
        },

        //专题查询 传id
        async searchBySort(context, params) {
            let data = await get(api.HOME_SEARCH_BY_SORT, {'sortId': params});
            console.log(data);
        },

        //获取测试题
        async getTest(context, params) {
            let data = await get(api.HOME_GET_TEST, {'sortId': params});
            console.log(data);
        },

        //点击模糊查询列表的某一项
        async getSearchByRubbish(context, params) {
            let data = await get(api.HOME_SEARCH_BY_RUBBISHID, {'id': params});
            console.log(data);
        },

        //获取测试结果
        async getTestResult(context, params) {
            let data = await post(api.HOME_TEST_PANDUAN, {
                   'eList':params
                }
            );
            console.log(data);
        },
    }
})