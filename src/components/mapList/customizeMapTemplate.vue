<template>
    <div class="customize-map">
        <div class="map-title">自定义地图模板</div>
        <div class="list-box">
            <div class="list-sub-box" v-for="(item,index) in listData" :key="index" @mouseover="showChoiceTem (item) " @mouseout="outStyle(item)" :class="{ active: item.show }">
                <div class="img-box">
                    <img src="@/asset/img/tem1.jpg" class="sys-img">
                    <div class="use-tem" v-show="item.show" @click="goMapSet">使用该模板</div>
                </div>
                <div class="template-name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>   
    export default {
        name: "customize-map",
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
            showChoiceTem(item){
                item.show = true;
            },
            outStyle(item){
                item.show = false;
            },
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
        overflow: hidden;
    }
    .list-sub-box{
        float: left;
        box-sizing: border-box;
        height: 140px;
        width: 200px;
        background: #27283a;
        margin-right: 20px;
        padding: 10px 10px 0;
        margin-bottom: 20px;
    }
    .img-box{
        position: relative;
        width: 178px;
        height: 104px;
    }
    .template-name{
        height: 26px;
        line-height: 26px;
        color: #fff;
    }
    .sys-img{
        width: 178px;
        height: 104px;
    }
    .use-tem{
        position: absolute;
        top: 40px;
        left: 39px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        width: 100px;
        border-radius: 12px;
        color: #fff;
        font-size: 12px;
        background: #4c61ee;
    }
    .active{
        border: 1px solid #4c61ee;
        box-shadow: 0px 0px 10px #4c61ee;
    }
</style>