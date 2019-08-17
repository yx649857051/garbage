<template>
    <div class="classify">
        <div class="classify-header">
            <div class="back-img">
                <img src="../assets/home_Harmful Waste_icon01@3x.png" alt=""/>
            </div>
            <div class="header-title">
                <span>{{classifyResultData.type.tname}}</span>
            </div>
        </div>
        <app-scroll class="content">
            <div class="classify-box">
                <div class="box-title">
                    <img :src="classifyResultData.type.tpic" />
                    <span>{{classifyResultData.type.tname}}</span>
                </div>
                <p class="box-p">{{classifyResultData.type.tdesc}}</p>
                <p class="box-p">{{classifyResultData.type.trequire}}</p>
            </div>

            <div class="classify-list">
                <li class="classify-item border-bottom" v-for='item in classifyResultData.rubbishs' :key='item.id'>
                    {{item.rname}}
                </li>
            </div>
        </app-scroll>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "classify",
        computed: {
            ...mapState({
                classifyResultData: state => state.classifyResultData,
            }),
        },
    }
</script>

<style lang='scss' scoped>
    .classify {
        width: 100%;
        height: 100%;
        background: #fff;
        position: absolute;
        z-index: 100;
        .classify-header{
            width: 100%;
            height: 44px;
            background: #fff;
            overflow: hidden;
            margin-top: 20px;
            overflow: hidden;
            .back-img{
                float: left;
                img{
                    width: 8px;
                    padding: 15px;
                }
            }
            .header-title{
                width: 50%;
                margin: 0 auto;
                text-align: center;
                line-height: 44px;
            }
        }
        .classify-box{
            width: 100%;
            padding-bottom: 10px;
            background: #FDEDEE;
            overflow: hidden;
            .box-title{
                height: 50px;
                padding:20px;
                padding-bottom: 10px;
                img{
                    width: 44px;
                    padding: 3px;
                    padding-right: 10px;
                }
                span{
                    line-height: 50px;
                    font-weight: bolder;
                }
            }
            .box-p{
                font-size: 14px;
                padding: 0 20px;
                line-height: 26px;
            }
        }
        .classify-list{
                margin-top: 10px;
                .classify-item{
                    height: 50px;
                    line-height: 50px;
                    padding-left: 20px;
                }
            }
    }
    .content{
        top: 64px;
    }
</style>