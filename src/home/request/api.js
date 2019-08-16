const HOME_CITY_LIST = '/api/rubbishController/getCityList';//获取城市列表
const HOME_URL = '/api/rubbishController/getIndexAll';//获取首页数据
const HOME_FAST_SEARCH = '/api/rubbishController/getQueryParam';//获取快捷搜索列表
const HOME_SEARCH = '/api/rubbishController/quickSearch';//关键字搜索
const HOME_SEARCH_BY_TYPE = '/api/rubbishController/searchByTypeId';//垃圾分类搜索
const HOME_SEARCH_BY_SORT = '/api/rubbishController/searchBySortId';//专题搜索
const HOME_GET_TEST = '/api/rubbishController/getTest';//获取测试题
const HOME_SEARCH_BY_RUBBISHID = '/api/rubbishController/searchByRubbishId';//查询列表的某一项
const HOME_TEST_PANDUAN = 'api/rubbishController/panDuan';

// const TEST = '/api/userController/getRegisterCode';

export default {
    HOME_URL,
    HOME_CITY_LIST,
    HOME_FAST_SEARCH,
    HOME_SEARCH,
    HOME_SEARCH_BY_TYPE,
    HOME_SEARCH_BY_SORT,
    HOME_GET_TEST,
    HOME_SEARCH_BY_RUBBISHID,
    HOME_TEST_PANDUAN
}