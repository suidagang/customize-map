<template>
    <div>
         <div id="amap-page-container">
             <el-amap :vid="mapId"  :center="center" :amap-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
            </el-amap>
         </div>
         
    </div>
</template>

<script>
    import VueAMap  from 'vue-amap';
    import { AMapManager } from 'vue-amap'
    let amapManager = new VueAMap.AMapManager();
    export default {
        components: {},
        data() {
            return {
                mapId: 'testMap',
                zoom:12,
                center:[104.065713,30.657637],
                amapManager,
                infoWindow:null,
                events: {
                    init(o) {
                    }
                }
            }
        },
        computed: {},
        mounted() {
            let that = this;
            //获取屏幕可见区域高度
            var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;;
            //设置地图容器和高度
            var deyeeMap = document.getElementById('amap-page-container');
            deyeeMap.style.height = (clientHeight-40) + 'px';
        },
        methods: {
             
        }
    };
</script>

<style scoped>
#amap-page-container{
    margin-top: 40px;
    overflow: hidden;
}
</style>
