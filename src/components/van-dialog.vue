<template>
    <van-dialog
            v-model="show"
            title="标题"
            show-cancel-button
    >
        <p @click="pClick">hhhjkalkjslfkfs</p>
    </van-dialog>

</template>

<script>
    export default {
        name: "van-dialog",
        data() {
            return {
                show: true
            };
        },
        methods:{
            pClick(){

            }
        }
    }
</script>

<style scoped>

</style>