<template>
  <div id="Radar">
    <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
  </div>
</template>

<script>
export default {
  name: "Radar",
  components: {},
  props: {},
  data() {
    this.chartSettings = {
      labelMap: {
        name: "name",
        sales: "sales",
        ministration: "ministration",
        delelopmer: "delelopmer",
        techology: "techology",
        marketing: "marketing"
      }
    };
    return {
      chartData: {
        columns: [
          "name",
          "sales",
          "ministration",
          "techology",
          "marketing",
          "delelopmer"
        ],
        rows: []
      }
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("api/radarChat")
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
