<template>
    <div>
        <div class="box">
            <div class="lable-style">{{objs.lable}}</div>
            <select v-model="objs.value"  placeholder="请选择" class="select-box" @change="changeSelect($event.target.value)" @blur="blurSelect($event.target.value)" @focus="focusSelect($event.target.value)">
                <option  v-for="item in objs.options" :key="item" :value="item" >{{item}}</option >
            </select>
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
    .select-box{
        height: 24px;
        width: 142px;
        line-height: 24px;
    }
</style>