<template>
	<div class="map-set" v-show="isShowSetting">
		<i class="el-icon-close close-icon" @click="closeSetting"></i>
		<div class="new-group" @click="groupChoiceTemplate">
			<i class="el-icon-plus"></i>
			<span>新建分组</span>
		</div>
		<div class="groups" v-for="(item, index) in groupList" :key="index" @click="goSet">
			<div class="group-header">
				<i class="el-icon-water-cup save-icon"></i>
				<i class="el-icon-delete close-icon"></i>
			</div>
			<div class="temp-img"></div>
			<div class="grup-name">点视图</div>
			<div class="level-name">层级13-17</div>
		</div>
		<div class="padd100"></div>
	</div>
</template>
<script>
	export default {
		name: "groups",
		components: {},
		data() {
			return {
				groupList: [{}],
				isShowSetting: false
			};
		},
		created() {},
		mounted() {},
		methods: {
			open() {
				this.isShowSetting = true;
			},
			closeSetting() {
				this.isShowSetting = false;
				this.$emit("closeSet");
			},
			groupChoiceTemplate() {
				this.$emit("showGroupChioceTem");
			},
			addGroup() {
				this.groupList.push({});
				this.groupList.push({});
				this.groupList.push({});
				this.groupList.push({});
				this.groupList.push({});
				this.groupList.push({});
				this.groupList.push({});
				this.groupList.push({});
			},
			goSet() {
				this.$emit("showSet");
			}
		}
	};
</script>

<style scoped>
	.map-set {
		position: fixed;
		top: 40px;
		left: 280px;
		background: #202133;
		width: 120px;
		height: 100%;
		overflow-y: auto;
		z-index: 222;
	}
	.map-set::-webkit-scrollbar {
		display: none;
	}
	.save-icon{
		position: absolute;
		left: 8px;
		top: 8px;
		font-size: 18px;
		color: #fff;
		cursor: pointer;
	}
	.close-icon {
		position: absolute;
		top: 8px;
		right: 8px;
		color: #fff;
		font-size: 18px;
		cursor: pointer;
	}
	.groups {
		position: relative;
		/* height: 114px; */
		width: 100px;
		margin: 6px auto;
		border: 1px solid #2f3245;
		box-sizing: border-box;
		cursor: pointer;
	}
	.add-icon {
		position: absolute;
		top: 5px;
		right: 5px;
		color: #fff;
		font-size: 18px;
	}
	.new-group {
		width: 100px;
		height: 34px;
		text-align: center;
		line-height: 34px;
		border: 1px solid #2f3245;
		margin: 40px auto 6px;
		color: #757c98;
		box-sizing: border-box;
		cursor: pointer;
	}
	.padd100{
		height: 100px;
		width: 100%;
	}
	.group-header{
		position: relative;
		height: 30px;
		overflow: hidden;
		width: 100%;
	}
	.temp-img{
		height: 56px;
		width: 88px;
		background: orange;
		margin: 0 auto;
	}
	.grup-name{
		color: #fff;
		font-size: 12px;
		margin-left: 5px;
		margin-top: 5px;
	}
	.level-name{
		color: #6d6f7b;
		font-size: 12px;
		margin: 5px;
	}
</style>

