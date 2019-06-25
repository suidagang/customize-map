<template>
    <div>
        <div class="color-set">
            <div class="lable-style">{{objs.lable}}</div>
            <div class="color-box">
                <el-color-picker class="color-style" v-model="objs.value"></el-color-picker>
                <span class="color-show">{{objs.value}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "color-set",
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
    .color-set {
        display: flex;
        overflow: hidden;
        padding: 5px 0 ;
        margin-top:20px;
    }
    .lable-style{
        color: #7a849d;
        font-size: 12px;
        width: 92px;
        text-align: right;
        padding-right: 12px;
    }
    .color-box{
        width: 142px;
        height: 24px;
        line-height: 24px;
        background: #171a29;
    }
    .color-style{
        height: 24px;
        width: 24px;
    }
    .color-show{
        vertical-align: top;
        color: #fff;
        font-size: 12px;
        display: inline-block;
        margin-left: 12px;
    }
</style>