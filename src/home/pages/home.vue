<template>
    <div>
        <div class="home">
            <div class="home-bg">
                <p class="title">环保生活 从垃圾分类开始</p>

                <span class="choose-city"
                      @click="chooseCity">{{cityData && cityData.length>0 && cityData[0].cityName}}标准</span>
            </div>

            <div class="input-div">
                <div class="input-search">
                    <input class="input" type="text" v-model="val">
                    <img class="img-search" src="../assets/home_icon0@3x.png"
                         @click="searchClick">
                </div>
            </div>

            <ul class="quick-search-ul">
                <li class="quick-search-li" v-for="item in homeData.vagList" :key="item.id">
                    <span class="quick-search-text">{{item.vname}}</span>
                </li>
            </ul>

            <ul>
                <p>分类专题</p>
                <li v-for="item in homeData.sortList" :key="item.id">
                    {{item.sname}}
                    <img :src="item.spic">
                </li>
            </ul>

        </div>

        <router-view></router-view>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import {Dialog, Toast} from 'vant';

    export default {
        name: "home",
        components: {},

        data() {
            return {
                val: ''
            }
        },
        computed: {
            ...mapState({
                homeData: state => state.homeData,
                cityData: state => state.cityData,
            }),
        },
        methods: {
            initData() {
                this.$store.dispatch('requestCityList');
            },
            chooseCity() {
                Toast('城市');

            },
            searchClick() {
                // console.log("搜索");
                Toast(this.val);

                this.$store.dispatch('quickSearchRequest', this.val);
            }

        },
        watch: {
            cityData() {
                this.$store.dispatch('requestHomeData', 5);
            }
        },
        created() {
            this.initData();
        }
    }
</script>

<style lang="scss">
    .home {
        .home-bg {
            background: url("../assets/pic-chahua@3x.png") no-repeat;
            width: 100%;
            height: 172px;

            .title {
                font-size: 18px;
                font-weight: bold;
                color: #fff;
                padding: 50px 0 15px 15px;
            }

            .choose-city {
                background: #fff;
                font-size: 14px;
                color: #7dd1a8;
                padding: 3px 10px;
                border-radius: 15px;
                margin-left: 15px;
            }
        }

        .input-div {
            margin-top: -20px;
            margin-left: 20px;
            margin-right: 20px;
            background: #fff;

            .input-search {
                width: 100%;

                .input {
                    width: 90%;
                    height: 40px;
                }

                .img-search {
                    width: 16px;
                }
            }
        }

        .quick-search-ul {
            margin-top: 20px;
            display: flex;

            .quick-search-li {
                width: 25%;

                .quick-search-text {
                    color: #999;
                    border: solid 1px #999;
                    padding: 3px 10px;
                    border-radius: 15px;
                    text-align: center;
                }
            }
        }
    }

</style>