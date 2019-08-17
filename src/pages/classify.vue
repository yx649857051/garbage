<template>
    <div>
        <van-dialog
                v-model="show"
                :closeOnClickOverlay="closeOnClickOverlay"
                :showConfirmButton="showConfirmButton"
                :showCancelButton="showCancelButton">
            <div class="dialog-content">
                <img class="img" :src='rubbish.rpic'/>
                <p class="name-text">{{rubbish.rname}}</p>
                <p class="desc-text">{{rubbish.rdesc}}</p>
            </div>
        </van-dialog>
        <div class="classify">
            <div class="classify-header">
                <div class="back-img">
                    <img src="../assets/home_Harmful Waste_icon01@3x.png" alt=""
                         @click="returnClick"/>
                </div>
                <div class="header-title">
                    <span>{{type.tname}}</span>
                </div>
            </div>
            <app-scroll class="content">
                <div class="classify-box" ref="classifyBox">
                    <div class="box-title">
                        <img :src="type.tpic"/>
                        <span>{{type.tname}}</span>
                    </div>
                    <p class="box-p">{{type.tdesc}}</p>
                    <p class="box-p">{{type.trequire}}</p>
                </div>

                <div class="classify-list">
                    <li class="classify-item border-bottom"
                        v-for='(item,index) in rubbishs' :key='item.id'
                        @click="itemClick(item)">
                        {{item.rname}}
                    </li>
                </div>
            </app-scroll>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "classify",
        data() {
            return {
                type: {},
                rubbishs: [],
                rubbish: {},
                show: false,
                closeOnClickOverlay: true,
                showConfirmButton: false,
                showCancelButton: false,
            }
        },
        computed: {
            ...mapState({
                classifyResultData: state => state.classifyResultData,
            }),
        },
        methods: {
            returnClick() {
                history.back();
            },
            itemClick(item) {
                this.rubbish = item;
                this.show = true;


            },
        },
        watch: {
            classifyResultData() {
                this.type = this.classifyResultData.type;
                this.rubbishs = this.classifyResultData.rubbishs;

                switch (this.type.id) {
                    case 1:
                        this.$refs.classifyBox.style.background = '#FDEDEE';
                        break;
                    case 2:
                        this.$refs.classifyBox.style.background = '#eaeaea';
                        break;
                    case 3:
                        this.$refs.classifyBox.style.background = '#ebf2fa';
                        break;
                    case 4:
                        this.$refs.classifyBox.style.background = '#f0eceb';
                        break;
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    .van-dialog {
        width: 280px;
        border-radius: 10px;

        .dialog-content {
            width: 100%;

            .img {
                display: block;
                width: 74px;
                height: 74px;
                margin: 20px auto;
            }

            .name-text {
                text-align: center;
            }

            .desc-text {
                padding: 20px;
                color: #6f6f6f;
                text-align: center;
            }

        }

    }

    .classify {
        width: 100%;
        height: 100%;
        background: #fff;
        position: absolute;
        z-index: 100;

        .classify-header {
            width: 100%;
            height: 44px;
            background: #fff;
            overflow: hidden;
            margin-top: 20px;
            overflow: hidden;

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

        .classify-box {
            width: 100%;
            padding-bottom: 10px;
            background: #fff;
            overflow: hidden;

            .box-title {
                height: 50px;
                padding: 20px;
                padding-bottom: 10px;

                img {
                    width: 44px;
                    padding: 3px;
                    padding-right: 10px;
                }

                span {
                    line-height: 50px;
                    font-weight: bolder;
                }
            }

            .box-p {
                font-size: 14px;
                padding: 0 20px;
                line-height: 26px;
            }
        }

        .classify-list {
            margin-top: 10px;

            .classify-item {
                height: 50px;
                line-height: 50px;
                padding-left: 20px;
            }
        }
    }

    .content {
        top: 64px;
    }
</style>