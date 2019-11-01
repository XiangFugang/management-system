<template>
  <div id="Progress_bar">
    <div class="Progress_bar_img">
      <img
        src="../../../Imges/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
        alt=""
      />
    </div>
    <div v-for="(item, index) in arr" :key="index" style="height: 65px;">
      <div style="text-align: left;padding: 10px 0 10px 0">
        <div style="padding-bottom: 10px">{{item.name}}</div>
        <el-progress :percentage="item.progress" :status="item.progress === 100 ? 'success' : ''"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Progress bar",
  components: {},
  props: {},
  data() {
    return {
      arr: [],
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("api/progress")
        .then(res => {
          this.arr = res.data;
          this.arr.map(item => {
            item.progress = item.progress * 100;
          });
          // console.log(this.arr);
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
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
#Progress_bar {
  .Progress_bar_img {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
