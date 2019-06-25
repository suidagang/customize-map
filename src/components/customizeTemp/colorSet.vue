<template>
    <div>
        <div class="box">
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
        name: "login",
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
        computed:{
            test(){
                console.log(objs.options,'options');
                return ''
            }
        },
        methods: {
            changeSelect(val){
                this.$emit("change",val)
            },
            blurSelect(val){
                this.$emit("blur",val)
            },
            focusSelect(val){
                this.$emit("focus",val)
            }
        }
    }
</script>

<style scoped>
    .box {
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