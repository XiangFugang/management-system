<template>
  <div id="Bottom">
    <el-row :gutter="10">
      <el-col :span="16"
        ><div class="grid-content bg-purple">
          <!--订单-->
          <Order></Order></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <!--进度条-->
          <Progress_bar></Progress_bar></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import Order from "./Bottom/Order";
import Progress_bar from "./Bottom/Progress bar";
export default {
  name: "Bottom",
  components: {
    Order,
    Progress_bar
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.el-row {
  background: #99a9bf;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  padding:8px 8px 8px 8px !important;

  border-radius: 4px;
}
.bg-purple {
  background: #fff;
}
.grid-content {
  background: #fff;
  border-radius: 4px;
  min-height: 120px;
}
</style>
