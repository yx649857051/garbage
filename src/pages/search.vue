<template>
    <div class="subpage">
        <div class="search-header">
            <div class="search-box">
                <img class="return-img" src="../assets/Hot Search_Return_icon@3x.png" alt="">
                <div class="search-main">
                    <input class="search-inp" type="text" placeholder="搜索垃圾所属分类">
                    <img class="search-img" src="../assets/Hot Search_icon@3x.png" alt="">
                </div>
            </div>
        </div>
        <div class="hot-box">
            <p class="hot-title">热门搜索</p>
            <ul class="hot-list">
                <li class="hot-item" v-for="(i,index) in 20" :key="index">{{i}}哈哈哈</li>
            </ul>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style lang="scss" scoped>
    .subpage{
        width: 100%;
        height: 100%;
        background: palevioletred;
        position: absolute;
        z-index: 100;
        .search-header{
            width: 100%;
            height: 95px;
            background: #2BB96D;
            overflow: hidden;
            .search-box{
                width: 100%;
                height: 60%;
                margin: 0 auto;
                margin-top: 28px;
                display: flex;
                .return-img{
                    width: 11px;
                    height: 20px;
                    margin: 20px 20px;
                }
                .search-main{
                    width: 294px;
                    height: 37px;
                    background: #fff;
                    margin: 10px 0;
                    display: flex;
                    border-radius: 5px;
                    .search-inp{
                        width: 90%;
                        margin: 3px 10px;
                        border: none;
                        outline: none;
                    }
                    .search-img{
                        width: 16px;
                        height: 18px;
                        margin: 10px 15px;
                    }
                }
            }
        }
        .hot-box{
            width: 85%;
            height: 400px;
            margin: 0 auto;
            background: #fff;
            overflow: hidden;
            .hot-title{
                margin-top: 10px;
                font-weight: 550;
            }
            .hot-list{
                margin-top: 10px;
                display: flex;
                .hot-item{
                    box-sizing: border-box;
                    text-align: center;
                    border: 1px solid #EFEFEF;
                    margin: 10px;
                    border-radius: 10px;
                }
            }
        }
    }
</style>