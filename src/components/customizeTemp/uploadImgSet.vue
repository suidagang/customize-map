<template>
    <div>
        <div class="upload-img-set"> 
            <div class="lable-style">{{objs.lable}}</div>
            <div class="show-style">{{objs.value}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "upload-img-set",
        data() {
            return {
            }
        },
        props: {
            objs: {
                type: Object,
                required: true
            }
        },
        methods: {
    
        }
    }
</script>

<style lang="less" scoped>
    @import '../../less/variable.less';
    .upload-img-set{
        color: @fontGrey;
        font-size: 12px;
        margin-top: 20px;
        overflow: hidden;
    }
     .lable-style{
        color: #7a849d;
        font-size: 12px;
        width: 92px;
        text-align: right;
        padding-right: 12px;
        float: left;
    }
    .show-style{
        height: 32px;
        line-height: 32px;
        width: 70px;
        text-align: center;
        color: #fff;
        background: @blackColor;
        float: right;
        margin-right: 20px;
    }
</style>