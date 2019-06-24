<template>
    <div class="nav-top">
        <div class="go-back"></div>
        <div class="map-name">我的地图样式1</div>
        <div class="icon-style">
            <i class="el-icon-edit"></i>
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
            }
        },
        created() {},
        mounted() {},
        methods: {
        }
    }
</script>

<style scoped>
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
    .icon-style{
        float: left;
        color: #676976;
        font-size: 18px;
        margin-left: 12px;
    }
</style>

