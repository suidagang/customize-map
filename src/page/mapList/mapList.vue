<template>
    <div class="map-list">
        <CustomizeMapTemplate ref="customizeMapTemplate"></CustomizeMapTemplate>
    </div>
</template>
<script>
     import CustomizeMapTemplate from "@/components/mapList/customizeMapTemplate.vue";
    export default {
        components:{
            CustomizeMapTemplate
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
        min-height: 100%;
        background: @bgColor;
        padding: 100px;
        box-sizing: border-box;
    }
</style>

