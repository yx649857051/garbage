<template>
    <van-dialog
            v-model="show"
            title="标题"
            show-cancel-button
    >
        <img src="https://img.yzcdn.cn/vant/apple-3.jpg">
    </van-dialog>
</template>

<script>
    export default {
        name: "van-dialog",
        data() {
            return {
                show: true
            };
        }
    }
</script>

<style scoped>

</style>