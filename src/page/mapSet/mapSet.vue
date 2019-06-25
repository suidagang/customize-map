<template>
	<div class="content">
		<TopNavBar ref="topNavBar"></TopNavBar>
		<div class="sidebar-container">
			<el-menu class="side-bar-box" mode="vertical" :show-timeout="200" background-color="#1c1e2d" text-color="#fff" active-text-color="#fff" :unique-opened="true" >
				<SidebarItem ref="siderBarItem" @openModal="openModal" @openNewLayerModal="openNewLayerModal"></SidebarItem>
			</el-menu>
		</div>
		<div class="main-map">
			<MyMap ref="myMap"></MyMap>
		</div>
		<NewLayerModal ref="newLayerModal" @sureChoiceTemplate="sureChoiceTemplate"></NewLayerModal>
		<MapGroupSettings ref="mapGroupSettings" @closeSet = "closeSet" @showGroupChioceTem= "showGroupChioceTem" @showSet ="showSet"></MapGroupSettings>
		<MapTemplateGroup ref="mapTemplateGroup" @confirmGroupChoiceTem = "confirmGroupChoiceTem"></MapTemplateGroup>
		<MapDetaileSet ref="mapDetaileSet"></MapDetaileSet>
	</div>
</template>

<script>
	import SidebarItem from "@/components/mapSet/siderBarItem.vue";
	import NewLayerModal from "@/components/mapSet/newLayerModal.vue";
	import MapGroupSettings from "@/components/mapSet/mapGroupSettings.vue";
	import MapTemplateGroup from "@/components/mapSet/mapTemplateGroup.vue";
	import MapDetaileSet from "@/components/mapSet/mapDetaileSet.vue";
	import TopNavBar from "@/components/mapSet/topNavBar.vue"
	import MyMap from "@/components/mapSet/myMap.vue"
	export default {
		components: {
			SidebarItem,
			NewLayerModal,
			MapGroupSettings,
			MapTemplateGroup,
			MapDetaileSet,
			TopNavBar,
			MyMap
		},
		data() {
			return {
				dialogVisible: false
			};
		},
		computed: {},
		mounted() {},
		methods: {
			closeSet() {
				this.$refs.siderBarItem.clearActive();
				this.$refs.mapDetaileSet.close();
			},
			openModal() {
				this.$refs.mapGroupSettings.open();
			},
			openNewLayerModal() {
				this.$refs.newLayerModal.open();
			},
			sureChoiceTemplate(obj) {
				console.log("到这里");
				this.$refs.siderBarItem.addOneLayer(obj);
			},
			showGroupChioceTem(){
				this.$refs.mapTemplateGroup.open();
			},
			confirmGroupChoiceTem(){
				this.$refs.mapGroupSettings.addGroup()
			},
			showSet(){
				this.$refs.mapDetaileSet.open()
			}
		}
	};
</script>

<style scoped>
	
	.head {
		height: 50px;
		width: 100%;
		line-height: 50px;
		text-align: center;
		font-size: 20px;
		color: black;
		border-bottom: 1px solid #ccc;
	}
	html,
	body,
	.content {
		margin: 0;
		padding: 0;
		height: 100%;
		overflow-y: auto;
	}
	html::-webkit-scrollbar,
	body::-webkit-scrollbar,
	.content::-webkit-scrollbar{
		display: none;
	}
	.main-map {
		margin-left: 280px;
		min-height: 100%;
		overflow: hidden;
	}
	.side-bar-box{
		padding-bottom: 100px;
	}
</style>
