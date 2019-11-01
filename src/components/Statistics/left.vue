<template>
  <div>
    <ve-pie :data="chartData"></ve-pie>
  </div>
</template>

<script>
let _ = require("lodash");
export default {
  name: "left",
  components: {},
  props: {},
  data() {
    return {
      chartData: {
        columns: ["name", "sum"],
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
          let a = _.groupBy(res.data, "category");
          //----------------遍历对象----------------------------------->
          //var obj={name:'张三',age:20}
          // for(var x in obj){ 遍历对象
          //   console.log(x)  //name age
          //   console.log(obj[x])  //张三  20
          // }
          //-------------------------------------------------------------------------------->
          for (let i in a) {
            this.chartData.rows.push({ name: i, sum: a[i].length });
          }
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
