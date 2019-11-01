<template>
  <div>
    <div class="Statistics_a">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="Statistics_b">今日发布</div>
            <i class="el-icon-check"></i>
            <div class="Statistics_c">1</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <div class="Statistics_b">原创文章</div>
            <i class="el-icon-tickets"></i>
            <div class="Statistics_c">{{sum}}</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-ligh">
            <div class="Statistics_b">新留言</div>
            <i class="el-icon-bell"></i>
            <div class="Statistics_c">1</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purpl">
            <div class="Statistics_b">新消息</div>
            <i class="el-icon-phone-outline"></i>
            <div class="Statistics_c">1</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  components: {},
  props: {},
  data() {
    return {
      arr: [], // 接收数据
      sum:0, // 统计原创的个数
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("api/article/allArticle")
        .then(res => {
          this.arr = res.data;
          res.data.map(item =>{
            if(item.source==="原创"){
              this.sum++;
            }
          })
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCity()
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
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  position: relative;
  background: #7ccadf;
}
.bg-purple-light {
  position: relative;
  background: #e88;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple-ligh {
  position: relative;
  background: #8375a3;
}
.bg-purpl {
  background-color: #9fcec1;
}
.Statistics_b {
  line-height: 25px;
}
.Statistics_c {
  line-height: 20px;
}
.el-icon-check {
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -8px;
}
.el-icon-tickets {
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -8px;
}
.el-icon-bell {
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -8px;
}
.el-icon-phone-outline {
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -8px;
}
</style>
