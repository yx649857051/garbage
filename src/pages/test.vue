<template>
    <div class="test">
        <div class="test-header border-bottom">
            <div class="back-img">
                <img src="../assets/home_Harmful Waste_icon01@3x.png" alt=""
                     @click="backClick"/>
            </div>
            <div class="header-title">
                <span>自测考试</span>
            </div>
        </div>

        <div class="slide-fullpage">
            <div class="banner-wrapper">
                <div class="slide-banner-scroll" ref="slide">
                    <ul v-if="testData && testData.length>0" class="slide-banner-wrapper">
                        <li v-for="item in testData" class="slide-item">
                            <p class="page-num">{{showPage}}</p>
                            <p class="title">{{item.rname}}</p>

                            <ul class="answer-ul">
                                <li class="answer-li" @click="chooseClick(1)">
                                    <img class="answer-li-img" src="../assets/camp_icon1@3x.png"/>
                                    <p class="answer-li-text"> 可回收物</p>
                                </li>

                                <li class="answer-li" @click="chooseClick(2)">
                                    <img class="answer-li-img" src="../assets/camp_icon2@3x.png"/>
                                    <p class="answer-li-text">有害垃圾</p>
                                </li>

                                <li class="answer-li" @click="chooseClick(3)">
                                    <img class="answer-li-img" src="../assets/camp_icon3@3x.png"/>
                                    <p class="answer-li-text">干垃圾</p>
                                </li>

                                <li class="answer-li" @click="chooseClick(4)">
                                    <img class="answer-li-img" src="../assets/camp_icon4@3x.png"/>
                                    <p class="answer-li-text">湿垃圾</p>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul v-else class="slide-banner-wrapper">
                        <li class="slide-item"></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import BScroll from '@better-scroll/core'
    import Slide from '@better-scroll/slide'
    import {mapState} from 'vuex';

    BScroll.use(Slide);

    export default {
        name: "test",
        components: {
            // [AppSwiper.name]: AppSwiper,
            // [AppSwiperItem.name]: AppSwiperItem
        },
        beforeDestroy() {
            this.slide.destroy()
        },
        computed: {
            ...mapState({
                testData: state => state.testData,
            }),
            showPage() {
                return `${this.currentPageIndex + 1}/${this.testData.length}`
            }
        },
        data() {
            return {
                slide: null,
                currentPageIndex: 0,
                answerList: [],
            }
        },
        watch: {
            testData() {
                this.$nextTick(() => {
                    if (this.slide) {
                        this.slide.destroy()
                    }
                    this.initBS();
                });
            }
        },
        mounted() {
            this.$store.dispatch('getTest');
            this.initBS();
        },
        methods: {
            backClick() {
                history.back();
            },
            chooseClick(id) {

                let str = '';
                switch (id) {
                    case 1:
                        str = '可回收物';
                        break;
                    case 2:
                        str = '有害垃圾';
                        break;
                    case 3:
                        str = '干垃圾';
                        break;
                    case 4:
                        str = '湿垃圾';
                        break;
                }
                this.answerList.push({
                    index: this.currentPageIndex,
                    answer: str,
                    title:this.testData[this.currentPageIndex].rname,
                    rightAnswer:this.testData[this.currentPageIndex].tname,
                });

                if (this.testData.length - 1 === this.currentPageIndex) {
                    this.$store.dispatch('saveAnswer',this.answerList);
                    this.$router.push('/home/answer');
                    console.log(this.answerList);
                } else {
                    this.nextPage()
                }
                // console.log('111', '题目数量', this.testData.length);


            },
            initBS() {
                this.slide = new BScroll(this.$refs.slide, {
                    scrollX: true,
                    scrollY: false,
                    click: true,
                    tap: true,
                    slide: {
                        loop: false,
                        threshold: 100
                    },
                    useTransition: true,
                    momentum: false,
                    bounce: false,
                    stopPropagation: true,
                });
                this.slide.on('slideWillChange', (page) => {
                    this.currentPageIndex = page.pageX
                })
            },
            nextPage() {
                this.$nextTick(() => {
                    this.slide.next()
                });
            },
            prePage() {
                this.$nextTick(() => {
                    this.slide.prev()
                });
            },
        }

    }
</script>

<style scoped lang="scss">
    .test {
        width: 100%;
        height: 100%;
        background: #fff;
        position: absolute;
        z-index: 100;

        .test-header {
            position: absolute;
            width: 100%;
            height: 44px;
            background: #fff;
            overflow: hidden;
            z-index: 101;

            .back-img {
                float: left;

                img {
                    width: 8px;
                    padding: 15px;
                }
            }

            .header-title {
                width: 50%;
                margin: 0 auto;
                text-align: center;
                line-height: 44px;
            }
        }


        .slide-fullpage {
            height: 100%;

            .banner-wrapper {
                position: relative;
                height: 100%;
            }

            .slide-banner-scroll {
                height: 100%;
                overflow: hidden;
            }

            .slide-banner-wrapper {
                height: 100%;
                white-space: nowrap;
                font-size: 0;

                .slide-item {
                    display: inline-block;
                    height: 100%;
                    width: 100%;
                    font-size: 26px;
                    margin-top: 44px;
                    backface-visibility: hidden;

                    .page-num {
                        font-size: 16px;
                        padding-left: 20px;
                        padding-top: 30px;
                    }

                    .title {
                        font-size: 24px;
                        text-align: center;
                        padding-top: 30px;
                        color: #333;
                    }

                    .answer-ul {
                        display: flex;
                        padding: 30px 50px 0 50px;
                        flex-wrap: wrap;
                        justify-content: space-around;

                        .answer-li {
                            border: solid 1px #999;
                            border-radius: 10px;
                            margin-bottom: 16px;
                            color: #999;


                            .answer-li-img {
                                width: 46px;
                                height: 46px;
                                margin: 0 38px;
                                padding-top: 30px;
                                display: block;
                            }

                            .answer-li-text {
                                padding-top: 14px;
                                padding-bottom: 22px;
                                text-align: center;
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
        }

    }
</style>