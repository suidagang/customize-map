<!-- input组件 -->
<template>
    <div class="level-set">
        <el-slider v-model="objs.value" 
            range 
            show-stops 
            :max="objs.max"
        >
        </el-slider>
        <div class="level-show">
            {{levelShow}}
        </div>
    </div>
</template>

<script>
    import {
        isBoolean
    } from 'util';
    export default {
        name: "level-set",
        data() {
            return {
            }
        },
        props: {
            //用于展示lable
            objs: {
                type: Object,
                required: true
            }
        },
        computed:{
            levelShow () {
                let minLevel = this.objs.value[0];
                let len = this.objs.value.length;
                let maxLevel = this.objs.value[len-1];
                if(minLevel == maxLevel){
                    return minLevel+"级"
                }else{
                    return minLevel +"级 ~ "+maxLevel+"级";
                }
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    .level-set {
        overflow: hidden;
        margin: 20px 18px 0px 18px;
        padding: 0 12px;
    }
    .level-show{
        color: #fff;
        font-size: 12px;
        text-align: center;
        margin-top: 8px;
        overflow: hidden;
    }
</style>