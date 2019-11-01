<template>
  <div id="Statistics">
    <div class="Statistics_a">
      <top></top>
    </div>
    <div class="Statistics_A">
      <el-row>
        <el-col :span="12">
          <div class="grid-content Category">
            <left></left>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content project">
            <rgith></rgith>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="Statistics_B"><bottom></bottom></div>
  </div>
</template>

<script>
import left from "../../components/Statistics/left";
import rgith from "../../components/Statistics/rgith";
import bottom from "../../components/Statistics/Bottom";
import top from "../../components/Statistics/Top";
export default {
  name: "Statistics",
  components: {
    left,
    rgith,
    bottom,
    top
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
.Statistics_A {
  .Category {
    padding-top: 40px;
  }
  .project {
    padding-top: 40px;
  }
}
</style>
