<template>
    <div class="classify">垃圾分类详情页</div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "classify",
        computed: {
            ...mapState({
                classifyResultData: state => state.classifyResultData,
            }),
        },
    }
</script>

<style scoped>
    .classify {
        width: 100%;
        height: 100%;
        background: papayawhip;
        position: absolute;
        z-index: 100;
    }
</style>