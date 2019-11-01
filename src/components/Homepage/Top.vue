<template>
  <div id="top">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="top_one">
            <div class="top_one_top"></div>
            <countTo
              class="top_one_bottom"
              :startVal="startVal"
              :endVal="endVal.visits"
              :duration="5000"
            ></countTo>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="top_tow">
            <div class="top_one_top"></div>
            <countTo
              class="top_one_bottom"
              :startVal="startVal"
              :endVal="endVal.messages"
              :duration="3000"
            ></countTo>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="top_therr">
            <div class="top_one_top"></div>
            <countTo
              class="top_one_bottom"
              :startVal="startVal"
              :endVal="endVal.purchases"
              :duration="3000"
            ></countTo>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="top_for">
            <div class="top_one_top"></div>
            <countTo
              class="top_one_bottom"
              :startVal="startVal"
              :endVal="endVal.shopping"
              :duration="3000"
            ></countTo>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "Top",
  components: {
    countTo
  },
  props: {},
  data() {
    return {
      startVal: 0,
      endVal: {}
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("api/homeData")
        .then(res => {
          this.endVal = res.data;
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

<style scoped lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.bg-purple {
  background: #fff;
  box-shadow: 5px 1px #f6f6f6;
}

.grid-content {
  height: 100px;
}
#top {
  .top_one {
    position: relative;
    overflow: hidden;
    padding-left: 100px;
    height: 100%;
    background: url("../../Imges/qun.png") 27px 22px no-repeat;
    background-size: 50px;
    line-height: 20px;
    .top_one_top {
      height: 30px;
      line-height: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: 20px;
      margin-top: -30px;
    }
    .top_one_bottom {
      height: 30px;
      line-height: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: 20px;
    }
  }
  .top_tow {
    position: relative;
    overflow: hidden;
    padding-left: 100px;
    height: 100%;
    background: url("../../Imges/duanxin.png") 27px 22px no-repeat;
    background-size: 50px;
    line-height: 20px;
    .top_one_top {
      height: 30px;
      line-height: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: 20px;
      margin-top: -30px;
    }
    .top_one_bottom {
      height: 30px;
      line-height: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: 20px;
    }
  }
  .top_therr {
    position: relative;
    overflow: hidden;
    padding-left: 100px;
    height: 100%;
    background: url("../../Imges/renmingbi.png") 27px 22px no-repeat;
    background-size: 50px;
    line-height: 20px;
    .top_one_top {
      height: 30px;
      line-height: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: 20px;
      margin-top: -30px;
    }
    .top_one_bottom {
      height: 30px;
      line-height: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: 20px;
    }
  }
  .top_for {
    position: relative;
    overflow: hidden;
    padding-left: 100px;
    height: 100%;
    background: url("../../Imges/gouwuc.png") 27px 22px no-repeat;
    background-size: 50px;
    line-height: 20px;
    .top_one_top {
      height: 30px;
      line-height: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: 20px;
      margin-top: -30px;
    }
    .top_one_bottom {
      height: 30px;
      line-height: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: 20px;
    }
  }
}
</style>
