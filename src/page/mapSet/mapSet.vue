<template>
	<div class="content">
		<TopNavBar ref="topNavBar"></TopNavBar>
		<div class="sidebar-container">
			<el-menu class="side-bar-box" mode="vertical" :show-timeout="200" background-color="#1c1e2d" text-color="#fff" active-text-color="#555a6e" :unique-opened="true">
				<SidebarItem ref="siderBarItem" @openModal="openModal" @openNewLayerModal="openNewLayerModal"></SidebarItem>
			</el-menu>
		</div>
		<div class="main-map">
			<div style="height:2000px;width:100px;"></div>
		</div>
		<NewLayerModal ref="newLayerModal" @sureChoiceTemplate="sureChoiceTemplate"></NewLayerModal>
		<MapSpecificSettings ref="mapSpecificSettings" @closeSet = "closeSet" @showGroupChioceTem= "showGroupChioceTem" @showSet ="showSet"></MapSpecificSettings>
		<MapTemplateGroup ref="mapTemplateGroup" @confirmGroupChoiceTem = "confirmGroupChoiceTem"></MapTemplateGroup>
		<MapSet ref="mapSet"></MapSet>
	</div>
</template>

<script>
	import SidebarItem from "@/components/mapSet/siderBarItem.vue";
	import NewLayerModal from "@/components/mapSet/newLayerModal.vue";
	import MapSpecificSettings from "@/components/mapSet/mapSpecificSettings.vue";
	import MapTemplateGroup from "@/components/mapSet/mapTemplateGroup.vue";
	import MapSet from "@/components/mapSet/mapSet.vue";
	import TopNavBar from "@/components/mapSet/topNavBar.vue"
	export default {
		components: {
			SidebarItem,
			NewLayerModal,
			MapSpecificSettings,
			MapTemplateGroup,
			MapSet,
			TopNavBar
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
				this.$refs.mapSet.close();
			},
			openModal() {
				this.$refs.mapSpecificSettings.open();
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
				this.$refs.mapSpecificSettings.addGroup()
			},
			showSet(){
				this.$refs.mapSet.open()
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
		margin-left: 180px;
		min-height: 100%;
		z-index: 9999;
		background: pink;
		overflow: hidden;
	}
	.side-bar-box{
		padding-bottom: 100px;
	}
</style>
