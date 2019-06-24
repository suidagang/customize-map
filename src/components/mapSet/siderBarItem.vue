<template>
	<div>
		<div v-for="(items,indexOne) in barMenu" :key="indexOne + '-one'">
			<el-submenu :index="items.name" v-if="items.children.length>0" class="el-menu-title-box">
				<div slot="title" @click="goRouter(items)">
					<i class="el-icon-share" @click.stop.prevent="hideLayer(items,items.show,indexOne)" v-show="items.show"></i>
					<i class="el-icon-delete" @click.stop.prevent="hideLayer(items,items.show,indexOne)" v-show="!items.show"></i>
					<span>{{items.name}}</span>
				</div>
				<div v-for="(item,indexTwo) in items.children" :key="indexTwo + '-two'">
					<el-menu-item :index="item.name" v-if="item.children.length<=0" :class="{ active:item.active}">
						<i class="el-icon-share" @click.stop.prevent="hideLayer(item,item.show,indexOne,false)" v-show="item.show"></i>
						<i class="el-icon-delete" @click.stop.prevent="hideLayer(item,item.show,indexOne,false)" v-show="!item.show"></i>
						<span>{{item.name}}</span>
					</el-menu-item>
				</div>
			</el-submenu>
			<el-menu-item :index="items.name" class="submenu-title-noDropdown" :class="{ active:items.active}" v-if="items.children.length<=0">
				<i class="el-icon-share" @click.stop.prevent="hideLayer(items,items.show,indexOne,true)" v-show="items.show"></i>
				<i class="el-icon-delete" @click.stop.prevent="hideLayer(items,items.show,indexOne,true)" v-show="!items.show"></i>
				<span slot="title">{{items.name}}</span>
			</el-menu-item>
		</div>
		<!-- <div class="new-layer">
			<el-link type="primary" :underline="false">
				<span>我的图层</span>
				<i class="el-icon-circle-plus-outline add-btn" @click="openAddModal"></i>
			</el-link>
		</div> -->
		<el-menu-item index="newLayer" class="submenu-title-noDropdown" >
			<i class="el-icon-shopping-cart-full"></i>
			<span slot="title">我的图层</span>
			<i class="el-icon-plus delete-icon" @click.stop.prevent="openAddModal"></i>
		</el-menu-item>
		<div v-for="(obj,num) in layerList" class="my-layer" v-bind:key="num + '-num'">
			<el-menu-item :index="obj.name" class="submenu-title-noDropdown" :class="{ active:obj.active}" v-if="obj.children.length<=0" @click="goRouter(obj,true)">
				<i class="el-icon-share" @click.stop.prevent="hideCustomizeLayer(obj,obj.show)" v-show="obj.show"></i>
				<i class="el-icon-delete" @click.stop.prevent="hideCustomizeLayer(obj,obj.show)" v-show="!obj.show"></i>
				<i class="el-icon-delete"></i>
				<span slot="title">{{obj.name}}</span>
				<i class="el-icon-close delete-icon" @click.stop.prevent="deleteLayer(num)"></i>
			</el-menu-item>
		</div>
	</div>
</template>

<script>
	export default {
		name: "honePage",
		data() {
			return {
				barMenu: [{
						name: "首页",
						icons: "el-icon-share",
						active: false,
						show: true,
						children: []
					},
					{
						name: "组件",
						icons: "el-icon-share",
						active: false,
						show: true,
						children: [{
								name: "按钮",
								icons: "el-icon-share",
								active: false,
								show: true,
								children: []
							},
							{
								name: "表格",
								icons: "el-icon-share",
								active: false,
								show: true,
								children: []
							},
							{
								name: "单选框",
								icons: "el-icon-share",
								active: false,
								show: true,
								children: []
							},
							{
								name: "多选框",
								icons: "el-icon-share",
								active: false,
								show: true,
								children: []
							}
						]
					},
					{
						name: "开关",
						icons: "el-icon-share",
						active: false,
						show: true,
						children: [{
								name: "开关1",
								icons: "el-icon-share",
								active: false,
								show: true,
								children: []
							},
							{
								name: "开关2",
								icons: "el-icon-share",
								active: false,
								show: true,
								children: []
							}
						]
					},
					{
						name: "图标",
						icons: "el-icon-share",
						active: false,
						show: true,
						children: []
					}
				],
				layerList: [{
						name: "图层1",
						icons: "el-icon-share",
						active: false,
						show: true,
						children: []
					},
					{
						name: "图层2",
						icons: "el-icon-share",
						active: false,
						show: true,
						children: []
					}
				]
			};
		},
		computed: {},
		methods: {
			//清楚选中样式
			clearActive() {
				this.noActive();
			},
			//隐藏显示自定义图层
			hideCustomizeLayer(obj, show) {
				obj.show = !show;
			},
			//删除图层
			deleteLayer(num) {
				this.layerList.splice(num, 1);
			},
			//新增
			openAddModal() {
				this.$emit("openNewLayerModal");
			},
			//新增一个图层
			addOneLayer(obj) {
				this.layerList.push(obj);
				this.layerList.push(obj);
				this.layerList.push(obj);
				this.layerList.push(obj);
				this.layerList.push(obj);
			},
			hideLayer(obj, show,index,flag) {
				
				//如果下面有子集
				if (obj.children && obj.children.length > 0) {
					console.log(obj,'obj1');
					obj.children.map(item => {
						return (item.show = !show);
					});
					obj.show = !show;
				}else{//没有子集
					//说明是二级子集
					if(!flag){
						obj.show = !show;
						let firstLevels = this.barMenu[index];
						let hasShow = firstLevels.children.some((item) =>{
							return item.show === true;
						});
						//全部为显示
						if(hasShow){
							this.barMenu[index].show = true;
						}else{
							this.barMenu[index].show = false;
						}
					}else{
						obj.show = !show;
					}
				}
				
			},
			noActive() {
				this.barMenu.map(item => {
					if (item.children && item.children.length > 0) {
						item.children.map(items => {
							return (items.active = false);
						});
					}
					return (item.active = false);
				});
				this.layerList.map(items => {
					return (items.active = false);
				});
			},
			goRouter(obj, flag) {
				//其他active样式去掉
				this.noActive();
				obj.active = true;
				if (obj.children && obj.children.length <= 0) {
					this.$emit("openModal");
				}
			}
		}
	};
</script>

<style type="text/css" lang="less" scoped>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
	.side-icons {
		display: inline-block;
		margin-right: 5px;
		width: 24px;
		text-align: center;
		font-size: 18px;
		vertical-align: middle;
		color: #fff;
	}
	.active {
		border: 1px solid #4c61ee;
        box-shadow: 0px 0px 2px #4c61ee;
	}
	.new-layer {
		height: 40px;
		line-height: 40px; // background: #32bced;
		background: pink;
		padding-left: 30px;
	}
	.add-btn {
		float: right;
		font-size: 24px;
		margin-top: 8px;
		margin-right: 8px;
	}
	.delete-icon {
		float: right;
		font-size: 24px;
		margin-top: 8px;
		margin-right: 8px;
	}
</style>
