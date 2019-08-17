<template>
    <div class="search-result">
        <div class="search-header">
            <div class="search-box">
                <img class="return-img" src="../assets/Hot Search_Return_icon@3x.png" alt="">
                <div class="search-main">
                    <input class="search-inp" type="text" placeholder="搜索垃圾所属分类">
                    <img class="search-img" src="../assets/Hot Search_icon@3x.png" alt="">
                </div>
            </div>
        </div>

        <div class="box"> 
            <ul class="box-list">
                <li class="box-item">
                    <div class="left">
                        <img class="box-img1" src="../assets/home_icon1@3x.png" alt="">
                        <span class="box-span1">手机壳</span>
                    </div>
                    <div class="right">
                        <span class="box-span2">干垃圾</span>
                        <img class="box-img2" src="../assets/home_icon9@3x.png" alt="">
                    </div>
                    
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchResult"
    }
</script>

<style lang='scss' scoped>
    .search-result{
        width: 100%;
        height: 100%;
        background: #fff;
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
                margin-top: 28px;
                display: flex;
                .return-img{
                    width: 11px;
                    height: 20px;
                    margin: 20px 20px;
                }
                .search-main{
                    width: 82%;
                    height: 37px;
                    background: #fff;
                    margin: 10px 0;
                    margin-left: 0;
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
        .box{
            width: 100%;
            margin: 0 auto;
            // background: cadetblue;
            .box-list{
                width: 100%;
                .box-item{
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    font-size: 14px;
                    overflow: hidden;
                    border-bottom: 1px solid #ccc;
                    .left{
                        float: left;
                        .box-img1{
                            width: 30px;
                            padding: 10px;
                            padding-left:15px; 
                        }
                    }
                    .right{
                        float:right;
                        .box-span2{
                            background: #6E6E6E;
                            color: #fff;
                            font-size: 12px;
                            padding: 3px 8px;
                            border-radius: 6px;
                        }
                        .box-img2{
                            width: 9px;
                            padding: 18px;
                        }
                    }
                    
                }
            }
        }
    }
</style>