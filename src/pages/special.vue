<template>
    <div class="special">
        <div class="special-header border-bottom">
            <div class="back-img">
                <img src="../assets/home_Harmful Waste_icon01@3x.png" alt=""
                @click="backClick"/>
            </div>
            <div class="header-title">
                <span>{{titleText}}</span>
            </div>
        </div>
        <app-scroll class="content">
            <div class="box"> 
            <ul class="box-list">
                <li class="box-item" v-for="item in specialList" :key='item.id'>
                    <div class="left">
                        <img class="box-img1" :src="item.rpic" alt="">
                        <span class="box-span1">{{item.rname}}</span>
                    </div>
                    <div class="right">
                        <span class="box-span2">{{item.tname}}</span>
                    </div>
                    
                </li>
            </ul>
        </div>
        </app-scroll>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "special",
        computed:{
            ...mapState({
                // specialData: state => state.specialData,
                specialList:state =>state.specialData.list,
                titleText:state =>state.specialData.sname,
            })
        },
        methods:{
            backClick(){
                history.back();
            }
        }
    }
    
</script>

<style lang='scss' scoped>
    .special {
        width: 100%;
        height: 100%;
        background: #fff;
        position: absolute;
        z-index: 100;
        .special-header{
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
        .content{
        top: 64px;
        .box{
            width: 100%;
            margin: 0 auto;
            // background: cadetblue;
            .box-list{
                width: 100%;
                .box-item{
                    width: 100%;
                    height: 70px;
                    line-height: 70px;
                    font-size: 14px;
                    overflow: hidden;
                    border-bottom: 1px solid #ccc;
                    .left{
                        float: left;
                        .box-img1{
                            width: 50px;
                            padding: 10px;
                            padding-left:15px; 
                        }
                        .box-span1{
                            font-weight: bolder;
                        }
                    }
                    .right{
                        float:right;
                        .box-span2{
                            // background: #6E6E6E;
                            // color: #fff;
                            font-size: 12px;
                            padding: 3px 20px;
                            border-radius: 6px;
                        }
                    }
                    
                }
            }
        }
    }
    }
</style>