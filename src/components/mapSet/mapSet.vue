<template>
    <div class="map-set" v-show="isShowSetting">
        <i class="el-icon-close close-icon" @click="close"></i>
    </div>
</template>
<script>
   
    export default {
        name: 'map-set',
        components: {
        },
        data() {
            return {
                isShowSetting: false
            }
        },
        created() {},
        mounted() {},
        methods: {
            open() {
                this.isShowSetting = true;
            },
            close(){
                this.isShowSetting = false;
            }
        }
    }
</script>

<style scoped>
    .map-set {
        position: fixed;
		top: 0;
		left: 360px;
        width: 180px;
        min-height: 100%;
        background: #909399;
        overflow-y: auto;
    }
    .close-icon {
        position: absolute;
        top: 8px;
        right: 8px;
        color: #fff;
        font-size: 24px;
    }
</style>

