<template>
	<div class="map-set" v-show="isShowSetting">
		<i class="el-icon-close close-icon" @click="closeSetting"></i>
		<div class="new-group" @click="groupChoiceTemplate">
			<i class="el-icon-plus"></i>
			<span>新建分组</span>
		</div>
		<div class="groups" v-for="(item, index) in groupList" :key="index" @click="goSet">
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
				// this.$emit("showSet");
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
	}
	.map-set::-webkit-scrollbar {
		display: none;
	}

	.close-icon {
		position: absolute;
		top: 8px;
		right: 8px;
		color: #fff;
		font-size: 18px;
	}
	.groups {
		position: relative;
		height: 114px;
		width: 100px;
		margin: 6px auto;
		border: 1px solid #2f3245;
		box-sizing: border-box;
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
	}
	.padd100{
		height: 100px;
		width: 100%;
	}
</style>

