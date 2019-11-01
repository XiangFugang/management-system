<template>
  <div>
    <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
  </div>
</template>

<script>
export default {
  name: "Pie",
  components: {},
  props: {},
  data() {
    this.chartSettings = {
      roseType: 'radius'
    }
    return {
      chartData:{
        columns: ['name', 'data'],
        rows: []
      }
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("api/ringChat")
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
