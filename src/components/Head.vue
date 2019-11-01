<template>
  <div id="Head">
    <div class="Head_left">
      <div>欢迎{{ obj.username }}来到风落木归山后台管理系统</div>
    </div>
    <div class="Head_right">
      <div>{{ time() }}，亲爱的{{ obj.username }}</div>
      <div>上次登录时间：</div>
      <div>{{ obj.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  components: {},
  props: {},
  data() {
    return {
      obj: {},
      data: 0
    };
  },
  methods: {
    time() {
      if (this.data >= 6 && this.data < 12) {
        return "早上好";
      } else if (this.data >= 12 && this.data <= 14) {
        return "中午好";
      } else if (this.data >= 15 && this.data <= 18) {
        return "下午好";
      } else if (this.data >= 19 && this.data <= 0) {
        return "晚上好";
      } else {
        return "洗洗睡吧";
      }
    }
  },
  mounted() {
    this.obj = JSON.parse(localStorage.getItem("user"));
    this.obj.date = this.$dayjs(this.obj.date).format(
      "YYYY年MM月DD日hh：mm：ss"
    );
    this.data = Number(new Date().getHours());
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#Head {
  color: #fff;
  font-size: 18px;
  font-family: 仿宋;
  display: flex;
  justify-content: space-between;
  .Head_left {
  }
  .Head_right {
    display: flex;
  }
}
</style>
