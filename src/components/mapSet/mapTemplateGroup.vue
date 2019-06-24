<template>
  <div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>点击分组选择模板列表</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="closeChoice">确 定</el-button>
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
    closeChoice () {
        this.dialogVisible = false;
        this.$emit("confirmGroupChoiceTem")
    }
  }
};
</script>

<style scoped>
</style>
