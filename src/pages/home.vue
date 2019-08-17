<template>
    <div class="aa">
        <router-view></router-view>

        <van-dialog
                v-model="show"
                title="标题"
                show-cancel-button
        >
            <p @click="pClick">hhhjkalkjslfkfs</p>
        </van-dialog>

        <div class="page" id="home">
            <div class="home-bg">
                <p class="title">环保生活 从垃圾分类开始</p>

                <span class="choose-city"
                      @click="chooseCity">{{cityData && cityData.length>0 && cityData[0].cityName}}标准</span>
            </div>

            <div class="home-main">
                <div class="search-box">
                    <div class="input-div">
                        <div class="search">
                            <input class="input" type="text" v-model="val" placeholder="输入垃圾名查找分类">
                        </div>
                        <div class="inp-img">
                            <img class="img-search" src="../assets/home_icon0@3x.png"
                                 @click="searchClick"/>
                        </div>
                    </div>
                </div>

                <app-scroll class="content">
                <div class="refuse-classification">
                    <ul class="quick-search-ul">
                        <li class="quick-search-li" v-for="item in homeData.vagList" :key="item.id">
                            <span class="quick-search-text">{{item.vname}}</span>
                        </li>
                    </ul>


                    <div class="classify-div">
                        <p class="classify-title">垃圾分类</p>
                        <ul class="classify-ul">

                            <li class="classify-li" v-for="item in homeData.typeList" :key="item.id">

                                <img class="classify-img" :src="item.tpic"/>
                                <span>{{item.tname}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="classify-box">
                    <div class="classify-div">
                        <p class="classify-title">分类专题</p>
                        <ul class="classify-ul">

                            <li class="classify-li" v-for="item in homeData.sortList" :key="item.id">

                                <img class="classify-img" :src="item.spic"/>
                                <span>{{item.sname}}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="training-camp">
                    <div class="training-main">
                        <span>训练营</span>
                        <span>去训练 ></span>
                    </div>
                </div>
                </app-scroll>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "home",
        components: {},

        data() {
            return {
                val: '',
                show: false
            }
        },
        computed: {
            ...mapState({
                homeData: state => state.homeData,
                cityData: state => state.cityData,
            }),
        },
        methods: {
            pClick() {
                this.show = false;
            },
            initData() {
                this.$store.dispatch('requestCityList');
            },
            chooseCity() {
                this.$toast('城市');
                this.show = true;
            },
            searchClick() {
                // console.log("搜索");
                this.$toast(this.val);

                // this.$store.dispatch('searchRequest', this.val);
                // this.$store.dispatch('searchByType', 1);
                // this.$store.dispatch('searchBySort', 1);
                // this.$store.dispatch('getSearchByRubbish',1);
                let obj = {
                    "id": 6,
                    "rname": '手机充电器',
                    "tname": '可回收物',
                    "myOption": '干垃圾',
                    "result": null

                }
                let str = JSON.stringify(obj);
                console.log('yx', str);
                this.$store.dispatch('getTestResult', str);
                // this.$store.dispatch('quickSearchListRequest');
                // this.$store.dispatch('test');
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

    #home {
        width: 100%;
        height: 100%;
        overflow: hidden;
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

        .home-main {
            width: 100%;

            .search-box {
                width: 92%;
                margin: 0 auto;

                .input-div {
                    width: 100%;
                    height: 40px;
                    display: flex;
                    border-radius: 8px;
                    border: 1px solid #E7E7E7;
                    background: #fff;
                    margin-top: -20px;

                    .search {
                        width: 90%;

                        .input {
                            width: 100%;
                            line-height: 40px;
                            border: none;
                            outline: none;
                            margin-left: 10px;
                        }
                    }

                    .inp-img {
                        img {
                            width: 18px;
                            margin-top: 10px;
                        }
                    }
                }
            }

            .refuse-classification {
                background: #fff;
                overflow: hidden;
                margin-bottom: 10px;

                .quick-search-ul {
                    width: 92%;
                    margin: 0 auto;
                    display: flex;
                    margin-top: 30px;

                    li {
                        flex: 1;
                        text-align: center;
                        border: 1px solid #C5C5C5;
                        border-radius: 10px;
                        font-size: 14px;
                        line-height: 20px;
                        margin-right: 10px;
                    }
                }

            }

            .classify-box {
                width: 100%;
                background: #fff;
            }

            .training-camp {
                width: 100%;
                background: #fff;
                margin-top: 10px;
                height: 50px;

                .training-main {
                    width: 92%;
                    margin: 0 auto;

                    span {
                        line-height: 50px;

                        &:nth-of-type(1) {
                            border-left: 2px solid #28BF71;
                            padding-left: 10px;
                            font-weight: 600;
                        }

                        &:nth-of-type(2) {
                            float: right;
                            color: #6A6A6A;
                        }
                    }
                }
            }

        }

        .classify-div {
            width: 92%;
            margin: 0 auto;
            padding-bottom: 30px;
            padding-top: 30px;

            .classify-title {
                font-family: PingFangSC;
                font-weight: 600;
                border-left: 2px solid #28BF71;
                padding-left: 10px;
                margin-bottom: 20px;
            }

            .classify-ul {
                display: flex;

                .classify-li {
                    flex: 1;
                    text-align: center;
                    margin-right: 15px;

                    span {
                        font-family: PingFangSC;
                        color: #6A6A6A;
                    }

                    &:last-of-type {
                        margin: 0;
                    }

                    .classify-img {
                        width: 100%;
                        margin-bottom: 15px;
                    }
                }
            }
        }


    }

    .content{
           width: 100%;
           position: absolute;
           top:200px;
           left:0;
           bottom:0;
       }


</style>