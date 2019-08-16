<template>
    <div class="subpage">
        <h1>搜索</h1>
        <ul>
            <li v-for="i in 100">{{i}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>
    .subpage{
        width: 100%;
        background: palevioletred;
        position: absolute;
        z-index: 100;
    }
</style>