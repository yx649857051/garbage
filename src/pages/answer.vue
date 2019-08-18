<template>
    <div class="answer">
        <div class="answer-header border-bottom">
            <div class="back-img">
                <img src="../assets/home_Harmful Waste_icon01@3x.png" alt=""
                     @click="backClick"/>
            </div>
            <div class="header-title">
                <span>自测考试</span>
            </div>
        </div>

        <app-scroll class="scroll">
            <p v-show="answerData.length>0" class="score-text">{{score}}分</p>
            <ul class="answer-ul">
                <li
                    :class="[{ active: index%2 }, 'answer-ul-li']"
                    v-for="(item,index) in answerData">
                    <span class="answer-ul-li-title">{{item.title}}</span>
                    <span class="answer-ul-li-right-answer">{{item.rightAnswer}}</span>
                    <span v-if="item.rightAnswer === item.answer" class="answer-ul-li-answer">✔️</span>
                    <span v-else class="answer-ul-li-answer">{{item.answer}}</span>
                </li>
            </ul>

            <div class="div-btn">
                <button :class="[{active: selectIndex === 1}, 'btn']"
                        @click="btnClick(1)">再考一次
                </button>
                <button :class="[{active: selectIndex === 2}, 'btn']"
                        @click="btnClick(2)">考考别人
                </button>
            </div>

        </app-scroll>

    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "answer",
        data() {
            return {
                selectIndex: 1,
            }
        },
        computed: {
            ...mapState({
                answerData: state => state.answerData,
            }),
            score(){
                let count = 0;
                this.answerData.forEach((item,index)=>{
                       if(item.answer === item.rightAnswer) count++
                });
                return (100/this.answerData.length)*count;
            },
        },
        methods: {
            backClick() {
                history.back();
            },
            btnClick(id) {
                this.selectIndex = id;
                switch (id) {
                    case 1:
                        // this.$toast('再考一次')
                        history.back();
                        break;
                    case 2:
                        this.$toast('考考别人')
                        break;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .answer {
        width: 100%;
        height: 100%;
        background: #fff;
        position: absolute;
        z-index: 100;

        .answer-header {
            width: 100%;
            height: 44px;
            background: #fff;

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

        .scroll {
            width: 100%;
            position: absolute;
            top: 44px;
            left: 0;
            bottom: 0;
            background: #fff;

            .score-text {
                font-size: 24px;
                text-align: center;
                padding-top: 30px;
                color: #333;
            }

            .answer-ul {
                padding: 30px 0;

                .answer-ul-li {

                    display: flex;
                    justify-content: space-around;
                    height: 30px;
                    line-height: 30px;
                    padding: 0 20px;
                    &.active{
                        background:#F0F0F0;
                    }


                    .answer-ul-li-title {
                        color: #333;
                        font-size: 14px;
                        flex: 1;

                    }

                    .answer-ul-li-right-answer {
                        color: #333;
                        font-size: 14px;
                        flex: 1;
                        text-align: center;
                    }

                    .answer-ul-li-answer {
                        color: #E45645;
                        font-size: 14px;
                        flex: 1;
                        text-align: right;

                    }
                }
            }

            .div-btn {
                padding: 0 30px;
                display: flex;
                justify-content: space-around;

                .btn {
                    color: #333333;
                    font-size: 15px;
                    background: #F0F0F0;
                    padding: 3px 10px;
                    border: solid 1px #F0F0F0;
                    border-radius: 15px;
                    &.active{
                        background: #2BB96D;
                        color: #fff;
                        border: solid 1px #2BB96D;
                    }
                }

                /*.active {*/
                    /*background: #2BB96D;*/
                    /*color: #fff;*/
                    /*border: solid 1px #2BB96D;*/
                /*}*/
            }
        }

    }
</style>