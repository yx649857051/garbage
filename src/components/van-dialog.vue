<template>
    <van-dialog
            class="van-dialog"
            v-model="show"
            closeOnClickOverlay="true"
    >

        <div class="dialog-div">
            <div class="dialog-content">
                <p>1111111</p>
                <!--<img class="img" :src='detailData.rpic'/>-->
                <!--<p class="name-text">{{detailData.rname}}</p>-->
                <!--<p class="desc-text">{{detailData.rdesc}}</p>-->
            </div>
        </div>
    </van-dialog>
</template>

<script>
    export default {
        name: "van-dialog",
        // props: ['show', 'detailData'],
        data() {
            return {
                show: true
            };
        },
        mounted(){
            this.a();
        },
        methods: {
            a() {
            }
        }
    }
</script>

<style scoped>

</style>