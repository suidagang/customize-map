<template>
  <div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>新增图层选择模板</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    open() {
      this.dialogVisible = true;
    },
    sure () {
        this.dialogVisible = false;
        let obj = {};
        obj = {
            name: "图层3",
            icons: "el-icon-share",
            active: false,
            show: true,
            children: []
        };
        this.$emit("sureChoiceTemplate" ,obj)
    }
  }
};
</script>

<style scoped>
</style>
