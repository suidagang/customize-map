<template>
    <div>
        <div class="title-set"> 
            <i class="el-icon-shopping-cart-full icon-style"></i>
            <span>{{objs.name}}</span>
           
        </div>
    </div>
</template>

<script>
    export default {
        name: "title-set",
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
    .title-set{
        height: 24px;
        line-height: 24px;
        width: 100%;
        color: @fontGrey;
        font-size: 12px;
        vertical-align: middle;
        padding-top: 18px;
        overflow: hidden;
        border-top: 1px solid @borderColor;
        margin-top:20px;
        span{
            display: inline-block;
            vertical-align: middle;
        }
    }
    .icon-style{
        display: inline-block;
        vertical-align: middle;
        font-size: 18px;
        color: #4a60ea;
        margin-left: 16px;
        margin-right: 3px;
    }
</style>