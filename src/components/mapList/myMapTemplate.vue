<template>
    <div class="my-map">
        <div class="map-title">我的自定义地图</div>
        <div class="list-box">
            <div v-for="(item,index) in listData" :key="index" class="list-item">
                <div class="img-box" @click="goMapSet"></div>
                <div class="right-box">
                    <div class="top-box">
                        <div class="my-map-name">我的地图样式1</div>
                        <i class="el-icon-edit icon-edit"></i>
                        <div class="edit-time">最后编辑于2019-6-25 17:52:45</div>
                    </div>
                    <div class="bottom-box">
                        <div class="bottom-list">
                            <i class="el-icon-edit icon-edit"></i>
                            <span>编辑</span>
                        </div>
                        <div class="bottom-list">
                            <i class="el-icon-edit icon-edit"></i>
                            <span>发布</span>
                        </div>
                        <div class="bottom-list">
                            <i class="el-icon-edit icon-edit"></i>
                            <span>使用与分享</span>
                        </div>
                        <div class="bottom-list">
                            <i class="el-icon-edit icon-edit"></i>
                            <span>下架</span>
                        </div>
                        <div class="bottom-list">
                            <i class="el-icon-edit icon-edit"></i>
                            <span>删除</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>   
    export default {
        name: "my-map",
        data () {
            return {
                listData:[{
                    name:"标准",
                    img:"",
                    show:false,
                },{
                    name:"标准",
                    img:"",
                    show:false,
                },
                {
                    name:"标准",
                    img:"",
                    show:false,
                },{
                    name:"标准",
                    img:"",
                    show:false,
                },{
                    name:"标准",
                    img:"",
                    show:false,
                },
                {
                    name:"标准",
                    img:"",
                    show:false,
                }]
            }
        },
        methods: {
            goMapSet(){
                window.location = "./mapSet.html"
            }
        }
    };
</script>

<style lang='less' scoped>
    .map-title{
        height: 16px;
        line-height: 16px;
        font-size: 14px;
        color: #fff;
        letter-spacing: 1px;
        margin-bottom: 20px;
        overflow: hidden;
    }
    .list-box{
        width: 100%;
        background: #27283a;
        overflow: hidden;
    }
    .list-item{
        height: 170px;
        width: 100%;
        border: 1px solid #303247;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
    }
    .img-box{
        height: 130px;
        width: 130px;
        background: orange;
    }
    .right-box{
        position: relative;
        margin-left: 30px;
        overflow: hidden;
        height: 130px;
        flex: 1;
    }
    .top-box{
        height: 20px;
        line-height: 20px;
        width: 100%;
        margin-top: 10px;
        color: #fff;
        font-size: 14px;
    }
    .my-map-name{
        display: inline-block;
    }
    .icon-edit{
        color: #6e707c;
        font-size: 16px;
    }
    .edit-time{
        float: right;
        color: #6e707c;
    }
    .bottom-box{
        height: 20px;
        line-height: 20px;
        width: 100%;
        margin-top: 70px;
        overflow: hidden;
    }
    .bottom-list{
        float: left;
        font-size: 12px;
        color: #6e707c;
        margin-right: 30px;
    }
</style>