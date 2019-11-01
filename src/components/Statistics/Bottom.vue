<template>
  <div>
    <ve-waterfall :data="chartData"></ve-waterfall>
  </div>
</template>

<script>
let _ = require("lodash");
export default {
  name: "Bottom",
  components: {},
  props: {},
  data() {
    return {
      chartData: {
        columns: ["时间", "数量"],
        rows: []
      }
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("api/article/allArticle")
        .then(res => {
          // console.log(res);
          res.data.map(item => {
            item.date = this.$dayjs(item.date).format("YYYY年MM月DD日");
          });
          let a = _.groupBy(res.data, "date");
          console.log(a);
          for (let i in a) {
            this.chartData.rows.push({ 数量: a[i].length, 时间: i });
          }
          //----------------遍历对象----------------------------------->
          //var obj={name:'张三',age:20}
          // for(var x in obj){ 遍历对象
          //   console.log(x)  //name age
          //   console.log(obj[x])  //张三  20
          // }
          //-------------------------------------------------------------------------------->
        })
        .catch(err => {
          console.log(err);
        });
    }
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

<style scoped lang="scss"></style>
