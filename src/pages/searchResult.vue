<template>
    <div>
        <div class="search-result">
            <div class="search-header">
                <div class="search-box">
                    <img class="return-img" src="../assets/Hot Search_Return_icon@3x.png" alt=""
                         @click="returnClick">
                    <div class="search-main">
                        <input class="search-inp" type="text" ref="input" :value="inputValue" placeholder="搜索垃圾所属分类"
                        >
                        <img class="search-img" src="../assets/Hot Search_icon@3x.png" alt=""
                             @click="searchClick">
                    </div>
                </div>
            </div>

            <div class="box">
                <ul class="box-list">
                    <li class="box-item" v-for="item in searchResultList"
                        @click="itemClick(item.id)">
                        <div class="left">
                            <img class="box-img1" src="../assets/home_icon1@3x.png" alt="">
                            <span class="box-span1">{{item.rname}}</span>

                        </div>
                        <div class="right">
                            <span class="box-span2">{{item.tvname}}</span>
                            <img class="box-img2" src="../assets/home_icon9@3x.png" alt="">
                        </div>

                    </li>

                </ul>
            </div>
        </div>

        <van-dialog
                v-model="show"
                :closeOnClickOverlay="closeOnClickOverlay"
                :showConfirmButton="showConfirmButton"
                :showCancelButton="showCancelButton">
            <div class="dialog-content">
                <img class="img" :src='detailData.rpic'/>
                <p class="name-text">{{detailData.rname}}</p>
                <p class="desc-text">{{detailData.rdesc}}</p>
            </div>
        </van-dialog>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "searchResult",
        data() {
            return {
                show: false,
                closeOnClickOverlay: true,
                showConfirmButton: false,
                showCancelButton: false,
                inputValue: ""
            }
        },
        computed: {
            ...mapState({
                searchResultList: state => state.searchResultData.list,
                searchText: state => state.searchResultData.rname,
                detailData: state => state.detailData,
            }),
        },
        methods: {
            returnClick() {
                history.back();
            },
            searchClick() {
                this.$store.dispatch('searchRequest', this.$refs.input.value);
            },
            itemClick(id) {

                this.$store.dispatch('searchByRubbish', id);
            }
        },

        watch: {
            detailData() {
                this.show = true;
            },
            searchText(){
                this.inputValue = this.searchText;
            },

        },
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


    .search-result {
        width: 100%;
        height: 100%;
        background: #fff;
        position: absolute;
        z-index: 100;

        .search-header {
            width: 100%;
            height: 95px;
            background: #2BB96D;
            overflow: hidden;

            .search-box {
                width: 100%;
                height: 60%;
                margin-top: 28px;
                display: flex;

                .return-img {
                    width: 11px;
                    height: 20px;
                    margin: 20px 20px;
                }

                .search-main {
                    width: 82%;
                    height: 37px;
                    background: #fff;
                    margin: 10px 0;
                    margin-left: 0;
                    display: flex;
                    border-radius: 5px;

                    .search-inp {
                        width: 90%;
                        margin: 3px 10px;
                        border: none;
                        outline: none;
                    }

                    .search-img {
                        width: 16px;
                        height: 18px;
                        margin: 10px 15px;
                    }
                }
            }
        }

        .box {
            width: 100%;
            margin: 0 auto;
            // background: cadetblue;
            .box-list {
                width: 100%;

                .box-item {
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    font-size: 14px;
                    overflow: hidden;
                    border-bottom: 1px solid #ccc;

                    .left {
                        float: left;

                        .box-img1 {
                            width: 30px;
                            padding: 10px;
                            padding-left: 15px;
                        }
                    }

                    .right {
                        float: right;

                        .box-span2 {
                            background: #6E6E6E;
                            color: #fff;
                            font-size: 12px;
                            padding: 3px 8px;
                            border-radius: 6px;
                        }

                        .box-img2 {
                            width: 9px;
                            padding: 18px;
                        }
                    }

                }
            }
        }
    }
</style>