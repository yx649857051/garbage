import Vue from 'vue';
import Vuex from 'vuex';
import api from '../request/api';
import {get, post} from '../request'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        homeData: [],
        cityData: [],
        searchResultData: [],
        hotSearchData: [],
        classifyResultData: [],
        detailData: [],
        specialData: [],
        testData: [],
        answerData:[]
    },
    mutations: {
        setHomeData(state, params) {
            state.homeData = params;
        },
        setCityData(state, params) {
            state.cityData = params;
        },
        setSearchResultData(state, params) {
            state.searchResultData = params;
        },
        setHotResultData(state, params) {
            state.hotSearchData = params;
        },
        setClassifyResultData(state, params) {
            state.classifyResultData = params;
        },

        setDetailData(state, params) {
            state.detailData = params;
        },
        setSpecialData(state, params) {
            state.specialData = params;

        },
        setTestData(state, params) {
            state.testData = params;
        },
        setAnswerData(state, params) {
            state.answerData = params;
        }
    },
    actions: {
        async requestHomeData(context, params) {
            context.commit('setHomeData', []);
            let data = await get(api.HOME_URL, {'cityId': params});
            console.log('homeData', data)
            context.commit('setHomeData', data.data);
        },

        async requestCityList(context) {
            let data = await get(api.HOME_CITY_LIST);
            console.log('city', data)
            context.commit('setCityData', data.data);
        },

        //快捷搜索列表
        async quickSearchListRequest(context) {
            let data = await post(api.HOME_FAST_SEARCH);
            console.log('hotResultData', data);
            context.commit('setHotResultData', data.data);
        },

        //关键字搜索 传用户输入的关键字
        async searchRequest(context, params) {
            context.commit('setSearchResultData', []);
            let data = await get(api.HOME_SEARCH, {'rname': params});
            console.log('searchRequest', data);
            context.commit('setSearchResultData', data.data);
        },

        //分类查询 传id
        async searchByType(context, params) {
            let data = await get(api.HOME_SEARCH_BY_TYPE, {'typeId': params});
            console.log("searchByType", data);
            context.commit('setClassifyResultData', data.data);
        },

        //专题查询 传id
        async searchBySort(context, params) {
            let data = await get(api.HOME_SEARCH_BY_SORT, {'sortId': params});
            console.log(data);
            context.commit('setSpecialData', data.data);
        },

        //获取测试题
        async getTest(context, params) {
            let data = await get(api.HOME_GET_TEST, {'sortId': params});
            console.log('测试题', data);
            context.commit('setTestData', data.data);
        },

        //点击模糊查询列表的某一项
        async searchByRubbish(context, params) {
            let data = await get(api.HOME_SEARCH_BY_RUBBISHID, {'id': params});
            console.log(data);
            context.commit('setDetailData', data.data);
        },

        //获取测试结果
        async testResult(context, params) {
            let data = await post(api.HOME_TEST_PANDUAN, {
                    'eList': params
                }
            );
            console.log(data);
        },

        saveAnswer(context,params){
            context.commit('setAnswerData', params);
        }
    }
})