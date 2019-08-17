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
    </div>
</template>

<script>
    export default {
        name: "test",
        methods:{
            backClick(){
                history.back();
            }
        }
    }
</script>

<style scoped lang="scss">
    .test {
        width: 100%;
        height: 100%;
        background: papayawhip;
        position: absolute;
        z-index: 100;

        .test-header {
            width: 100%;
            height: 44px;
            background: #fff;
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
    }
</style>