<template>
  <div id="center1">
    <el-row type="flex" class="row-bg" justify="space-between" gutter="9">
      <el-col :span="8"
        ><div class="grid-content bg-purple">
        <Radar></Radar>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <pie></pie>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <Histogram></Histogram>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//雷达图
import Radar from "./Center1/Radar";
//饼图
import pie from "./Center1/Pie";
//柱状图
import Histogram from "./Center1/Histogram"
export default {
  name: "Center1",
  components: {
    Radar,
    pie,
    Histogram
  },
  props: {},
  data() {
    return {};
  },
  methods: {

  },
  mounted() {
    this.getCity();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#center1 {
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  /*background: #d3dce6;*/
}
.bg-purple {
  background: #fff;
}
.bg-purple-light {
  background: #fff;
}
.grid-content {
  border-radius: 4px;
}
.row-bg {
  overflow: hidden;
  padding: 10px 0;
  background: #99a9bf;
}
</style>
