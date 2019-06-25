<!-- input组件 -->
<template>
    <div>
        <div class="box">
            <div  class="lable-style">{{objs.lable}}</div>
            <input :value="value" :placeholder="objs.placeholder" class="input-style" :disabled="objs.disabled" :name="objs.name" @input="$emit('input',$event.target.value)" @focus="focusEmit($event.target.value)" @blur="blurEmit($event.target.value)"></input>
        </div>
    </div>
</template>

<script>
    import {
        isBoolean
    } from 'util';
    export default {
        name: "login",
        data() {
            return {
            }
        },
        props: {
            //用于展示lable
            objs: {
                type: Object,
                required: true
            },
            value: [String, Number]
        },
        methods: {
            focusEmit(value) {
                this.$emit("focus", value)
            },
            blurEmit(value){
                this.$emit("blur", value)
            }
        }
    }
</script>

<style scoped>
    .box {
        display: flex;
        overflow: hidden;
        padding: 5px 0;
        margin-top:20px;
    }
     .lable-style{
        color: #7a849d;
        font-size: 12px;
        width: 92px;
        text-align: right;
        padding-right: 12px;
    }
    .input-style{
        width: 142px;
        border: 0;
        outline: none;
        display: inline-block;
        height: 24px;
        line-height: 24px;
        background: #171a29;
        color: #fff;
        font-size: 12px;
        padding: 0 8px;
        box-sizing: border-box;
    }
</style>