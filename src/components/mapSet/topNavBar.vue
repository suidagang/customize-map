<template>
    <div class="nav-top">
        <div class="go-back"></div>
        <div class="map-name" v-show="!isEdit">{{name}}</div>
        <input class="map-name-text" type="text" v-show="isEdit" v-model="name"/>>
        <div class="icon-style">
            <i class="el-icon-edit" v-show="!isEdit" @click="showEdit"></i>
            <i class="el-icon-check" v-show="isEdit" @click="saveName"></i>
        </div>
    </div>
</template>
<script>
   
    export default {
        name: 'nav-bar-top',
        components: {
        },
        data() {
            return {
                isEdit:false,
                name:"我的地图样式1"
            }
        },
        created() {},
        mounted() {},
        methods: {
            showEdit(){
                this.isEdit = true;
            },
            saveName(){
                this.isEdit = false;
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../less/variable.less';
    .nav-top{
		position: fixed;
		top: 0;
		left: 0;
		height: 40px;
		line-height: 40px;
		width: 100%;
		background: #1c1e2d;
		border-bottom: 1px solid #fff;
        box-sizing: border-box;
        z-index: 99;
	}
	.go-back{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 11;
		background: #2e74d4;
		height: 40px;
        width: 40px;
    }
    .map-name{
        float: left;
        color: #fff;
        margin-left: 57px;
    }
    .map-name-text{
        float: left;
        color: #000;
        background: #fff;
        height: 24px;
        line-height: 24px;
        width: 142px;
        margin-left: 57px;
        border: 0;
        outline: none;
        margin-top: 8px;
        font-size: 16px;
    }
    .icon-style{
        float: left;
        color: #676976;
        font-size: 18px;
        margin-left: 12px;
    }
</style>

