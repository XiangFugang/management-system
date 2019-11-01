<template>
  <div id="Histogram">
    <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
  </div>
</template>

<script>
export default {
  name: "Histogram",
  components: {},
  props: {},
  data() {
    this.chartSettings = {
      metrics: ["expected", "actual"],
      dimension: ["date"]
    };
    return {
      chartData: {
        columns: ["date", "expected", "actual"],
        rows: []
      }
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("api/homeChat")
        .then(res => {
          this.chartData.rows = res.data;
          // console.log(res.data);
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
