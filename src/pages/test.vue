<template>
    <div class="test">
        <div class="special-header border-bottom">
            <div class="back-img">
                <img src="../assets/home_Harmful Waste_icon01@3x.png" alt=""
                     @click="backClick"/>
            </div>
            <div class="header-title">
                <span>标题(等待后台字段)</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "test"
    }
</script>

<style scoped>
    .test {
        width: 100%;
        height: 100%;
        background: papayawhip;
        position: absolute;
        z-index: 100;

        .special-header {
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
    }
</style>