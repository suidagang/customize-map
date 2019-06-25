<template>
    <div class="map-list">
        <div class="map-list-temp">
            <CustomizeMapTemplate ref="customizeMapTemplate"></CustomizeMapTemplate>
            <MyMapTemplate ref="myMapTemplate"></MyMapTemplate>
        </div>
        <div class="map-list-escription">配置说明</div>
    </div>
</template>
<script>
     import CustomizeMapTemplate from "@/components/mapList/customizeMapTemplate.vue";
     import MyMapTemplate from "@/components/mapList/myMapTemplate.vue";
    export default {
        components:{
            CustomizeMapTemplate,
            MyMapTemplate
        },
        name: 'map-list',
        data() {
            return {
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style lang="less" scoped>
    @import '../../less/variable.less';

    .map-list {
        position: relative;
        min-height: 100%;
        background: @bgColor;
        padding: 100px;
        box-sizing: border-box;
    }
    .map-list-escription{
        position: absolute;
        right: 0;
        top: 0;
        width: 280px;
        height: 100%;
        background: #26273b;
        color: #fff;
        font-size: 12px;
        padding: 20px;
        box-sizing: border-box;
    }
    .map-list-temp{
        margin-right: 280px;
        overflow: hidden;
    }
</style>

