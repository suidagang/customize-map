<template>
    <div class="map-set" v-show="isShowSetting">
        <i class="el-icon-close close-icon" @click="closeSetting"></i>
        <div class="groups" v-for="(item,index) in groupList" :key="index" @click="goSet">
            <i class="el-icon-plus add-icon" @click.stop.prevent="groupChoiceTemplate"></i>
        </div>
    </div>
</template>
<script>
   
    export default {
        name: 'groups',
        components: {
        },
        data() {
            return {
                groupList:[{}],
                isShowSetting: false
            }
        },
        created() {},
        mounted() {},
        methods: {
            open() {
                this.isShowSetting = true;
            },
            closeSetting() {
                this.isShowSetting = false;
                this.$emit("closeSet")
            },
            groupChoiceTemplate() {
                this.$emit("showGroupChioceTem")
            },
            addGroup(){
                this.groupList.push({})
            },
            goSet(){
                this.$emit("showSet")
            }
        }
    }
</script>

<style scoped>
    .map-set {
        width: 180px;
        min-height: 100%;
        background: #32bced;
        overflow-y: auto;
    }
    .close-icon {
        position: absolute;
        top: 8px;
        right: 8px;
        color: #fff;
        font-size: 24px;
    }
    .groups {
        position: relative;
        height: 60px;
        width: 150px;
        background: peru;
        border-radius: 5px;
        margin: 50px auto 10px;
    }
    .add-icon {
        position: absolute;
        top: 5px;
        right: 5px;
        color: #fff;
        font-size: 18px;
    }
</style>

