<template>
  <div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <el-tree
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree">
    </el-tree>

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
      dialogVisible: false,
       filterText: '',
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    };
  },
  computed: {},
  mounted() {},
  methods: {
    filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
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
