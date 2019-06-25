<template>
    <div class="map-set" v-show="isShowSetting">
        <div class="detail-name">
            <span>点视图</span>
            <i class="el-icon-close close-icon" @click="close"></i>
        </div>
        <div v-for="(item,index) in list" :key="index">
            <InputSet v-if=" item.type == 'input'" :objs='item' v-model="item.value" @input="inputTest" @focus="inputFocus" @blur="inputBlur"></InputSet>
            <SelectSet v-if=" item.type == 'select'" :objs="item" v-model="item.value" @change="changeSelect(item)" @blur="blurInput"></SelectSet>
            <ColorSet v-if="item.type == 'color' " :objs="item"></ColorSet>
            <SelectSetNew v-if="item.type == 'new'" :objs="item"></SelectSetNew>
            <TitleSet v-if="item.type == 'title'" :objs="item"></TitleSet>
            <LevelSet v-if="item.type == 'level'"  :objs="item"></LevelSet>
        </div>
    </div>
</template>
<script>
    import InputSet from "@/components/customizeTemp/inputSet.vue";
    import SelectSet from "@/components/customizeTemp/selectSet.vue"
    import ColorSet from "@/components/customizeTemp/colorSet.vue"
    import SelectSetNew from "@/components/customizeTemp/selectSetNew.vue"
    import TitleSet from "@/components/customizeTemp/titleSet.vue"
    import LevelSet from "@/components/customizeTemp/levelSet.vue"
    export default {
        name: 'map-set',
        components: {
            InputSet,
            SelectSet,
            ColorSet,
            SelectSetNew,
            TitleSet,
            LevelSet
        },
        data() {
            return {
                isShowSetting: false,
                list: [{
                    type: "select",
                    value: 1,
                    options: [1, 2, 3, 4],
                    lable: "字体大小",
                    placeholder: "请选择"
                }, {
                    type: "input",
                    value: '22',
                    lable: "宽度",
                    placeholder: "请输入"
                },
                {
                    type:"title",
                    name:"图片设置",
                    icon:"el-icon-paperclip"
                },
                {
                    type: "color",
                    value: '#EE0E0E',
                    lable: "字体颜色",
                },{
                    type:"title",
                    name:"层级设置",
                    icon:"el-icon-document-copy"
                },{
                    type:"level",
                    name:"层级设置",
                    value:[2,8],
                    max:24,
                },],
                inputvalue: "12"
            }
        },
        created() {},
        mounted() {},
        methods: {
            open() {
                this.isShowSetting = true;
            },
            close() {
                this.isShowSetting = false;
            },
            blurInput() {
                console.log("blur")
            },
            inputBlur(val) {
                console.log("blur:", val)
            },
            inputFocus(value) {
                console.log("focus:", value)
            },
            inputTest(obj) {
                console.log(obj, '@input')
            },
            sure() {
                console.log(this.inputvalue, ":inputvalue")
            },
            goAdress() {
                this.$router.push("/adress")
            },
            goOtherPage() {
                window.location = "./accessoriesList.html"
            },
            inputChanged(objs) {
                console.log(objs, 'objs');
                console.log(this.list, 'list')
            },
            changeSelect(objs) {
                console.log(objs, 'objs');
                console.log(this.list, 'list')
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../less/variable.less';
    .map-set {
        position: fixed;
        top: 40px;
        left: 400px;
        width: 260px;
        min-height: 100%;
        background: #202133;
        overflow-y: auto;
        border-left: 1px solid @borderColor;
    }
    .close-icon {
        position: absolute;
        top: 8px;
        right: 8px;
        color: #fff;
        font-size: 18px;
    }
    .detail-name {
        position: relative;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        padding: 10px;
        span {
            color: #fff;
        }
    }
</style>

