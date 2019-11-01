<template>
  <div id="see">
    <div class="see_top">
      <div class="see_top_left">
        <el-button type="primary" @click="Return">返回</el-button>
      </div>
      <div class="see_top_rghit">
        <div class="Title">{{ obj.title }}</div>
        <div class="abstract">摘要：{{ obj.abstract }}</div>
        <div class="time">发表于：{{ obj.date }}</div>
      </div>
    </div>
    <div class="content" v-html="obj.text"></div>
  </div>
</template>

<script>
export default {
  name: "See",
  components: {},
  props: {},
  data() {
    return {
      id: "",
      obj: {}
    };
  },
  methods: {
    getCaty() {
      this.$axios
        .req("/api/article/article", {
          _id: this.id
        })
        .then(res => {
          // console.log(res);
          this.obj = res.data;
        })
        .catch(ree => {
          console.log(ree);
        });
    },
    Return() {
      this.$router.push("/publish");
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getCaty();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.see_top {
  display: flex;
  .see_top_left {
    .el-button {
      line-height: 10px;
      /*padding: 0 3px 0 3px;*/
    }
  }
  .see_top_rghit {
    margin: 0 auto;
    .Title {
      line-height: 30px;
      font-size: 20px;
      font-weight: bold;
    }
    .abstract {
      line-height: 20px;
      font-size: 15px;
      margin-top: 20px;
    }
    .time {
      font-size: 12px;
      line-height: 20px;
    }
  }
}
.content{
  max-width: 500px;
  text-align: left;
  word-break:break-word;
}
</style>
