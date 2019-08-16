<template>
    <div class="start">

        <h2 class="title">善待垃圾，呵护家园</h2>

        <div class="big-icon-div">
            <img class='big-icon' src="../assets/logo.png">
        </div>


        <div class="bottom-div">

            <img class="small-icon"/>


            <div class="bottom-text">
                <p class="bottom-title">垃圾分类助手</p>
                <p class="bottom-subtitle">权威精准的垃圾分类神器</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        components: {},
        mounted() {
            setTimeout(()=>{
               location.href='/home';
            },3000);
        }
    }
</script>

<style scoped lang="scss">
    .start {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .title {
            color: #333333;
            padding-top: 80px;
            text-align: center;
        }

        .big-icon-div {
            flex: 1;

            .big-icon {
                width: 250px;
                height: 250px;
                border: solid 1px #999;
                border-radius: 250px;
                background: #999;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);

            }
        }

            .bottom-div {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 40px;

                .small-icon {

                    width: 36px;
                    height: 36px;
                    border: solid 1px #999;
                    border-radius: 10px;
                    background: #999;
                }


                .bottom-text {
                    padding-left: 10px;

                    .bottom-title {
                        align-self: flex-start;
                    }

                    .bottom-subtitle {
                    }
                }
            }
        }



</style>
