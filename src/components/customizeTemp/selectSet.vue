<template>
    <div>
        <div class="select-set">
            <div class="lable-style">{{objs.lable}}</div>
            <select v-model="objs.value"  placeholder="请选择" class="select-box" @change="changeSelect($event.target.value)" @blur="blurSelect($event.target.value)" @focus="focusSelect($event.target.value)">
                <option  v-for="item in objs.options" :key="item" :value="item" class="option-style">{{item}}</option >
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        name: "select-set",
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

<style lang="less" scoped>
    @import '../../less/variable.less';
    .select-set {
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
    .select-box{
        height: 24px;
        width: 142px;
        line-height: 24px;
        background: @blackColor;
        border: 0;
        outline: none;
        color: #fff;
        padding: 0 3px;
        cursor: pointer;
    }
    .option-style{
        background: @fontGrey;
        color: #fff;
        cursor: pointer;
    }
</style>