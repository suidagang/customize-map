<template>
    <div class="map-set" v-show="isShowSetting">
        <div class="detail-name">
            <span>点视图</span>
            <i class="el-icon-close close-icon" @click="close"></i>
        </div>
        
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

<style lang="less" scoped>
    .map-set {
        position: fixed;
		top: 40px;
		left: 400px;
        width: 260px;
        min-height: 100%;
        background: #202133;
        overflow-y: auto;
        border-left: 1px solid #2b2e3f;
    }
    .close-icon {
        position: absolute;
        top: 8px;
        right: 8px;
        color: #fff;
        font-size: 18px;
    }
    .detail-name{
        position: relative;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        padding: 10px;
        span{
            color:#fff;
        }
    }
</style>

