<template>
    <div class="scrool-wrap" ref='scroll'>
        <div class="scroll-content">
            <slot/>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'app-scroll',
    mounted(){
        //构建滚动视图
        let scroll = new BScroll(this.$refs.scroll,{
            click:true,
            tap:true
        });
    }
}
</script>

<style lang='scss'>
    .scrool-wrap{
        overflow: hidden;
    }
</style>
