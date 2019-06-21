<template>
    <div class="customize-map">
        <div class="map-title">自定义地图模板</div>
        <div class="list-box">
            <div class="list-sub-box"></div>
            <div class="list-sub-box"></div>
            <div class="list-sub-box"></div>
            <div class="list-sub-box"></div>
            <div class="list-sub-box"></div>
            <div class="list-sub-box"></div>
            <div class="list-sub-box"></div>
            <div class="list-sub-box"></div>
            <div class="list-sub-box"></div>
            <div class="list-sub-box"></div>
            <div class="list-sub-box"></div>
            <div class="list-sub-box"></div>
        </div>
    </div>
</template>

<script>   
    export default {
        name: "customize-map",
        methods: {}
    };
</script>

<style lang='less' scoped>
    .map-title{
        height: 16px;
        line-height: 16px;
        font-size: 14px;
        color: #fff;
        letter-spacing: 1px;
        margin-bottom: 20px;
        overflow: hidden;
    }
    .list-box{
        width: 100%;
        overflow: hidden;
        display: flex;
    }
    .list-sub-box{
        height: 140px;
        width: 200px;
        background: #27283a;
        margin-right: 20px;
    }
</style>