<template>
  <div>
    <el-table :data="data" stripe style="width: 100%">
      <el-table-column prop="num" label="Order_NO" width="300" align="center">
      </el-table-column>
      <el-table-column label="Price" width="150" align="center">
        <template slot-scope="scope" style="padding-left: 0px">
          <span>￥{{ scope.row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="Status" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status === '0' ? 'success' : 'danger'" v-if="scope.row.status === 0">pending</el-tag>
          <el-tag :type="scope.row.status === '0' ? 'danger' : 'success'" v-if="scope.row.status === 1">success</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Order",
  components: {},
  props: {},
  data() {
    return {
      data: []
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("api/orderData")
        .then(res => {
          this.data = res.data;
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
