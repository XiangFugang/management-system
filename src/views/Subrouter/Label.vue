<template>
  <el-tabs class="aaa" @tab-click="handleClick">
    <el-tab-pane>
      <span slot="label">未读消息({{ this.arr.length }})</span>
      <div v-for="(item, index) in arr" :key="index" class="bbb">
        <div>{{ item.name }}</div>
        <div>
          {{ item.time }}
          <span class="yidu" @click="biaoji(index)">标为已读</span>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">已读消息({{ this.arry.length }})</span>
      <div v-for="(item, index) in arry" :key="index" class="bbb">
        <div>{{ item.name }}</div>
        <div>
          {{ item.time }}
          <span class="yidu" @click="shanchu(index)">删除</span>
        </div>
      </div>
      <div class="ccc" @click="quanbu">全部删除</div>
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">回收站({{ this.recycle.length }})</span>
      <div v-for="(item, index) in recycle" :key="index" class="bbb">
        <div>{{ item.name }}</div>
        <div>
          {{ item.time }}
          <span class="huanyuan" @click="huanyuan(index)">还原</span>
        </div>
      </div>
      <div class="ttt" @click="qingkong">清空回收站</div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "Label",
  components: {},
  props: {},
  data() {
    return {
      //未读
      arr: [
        {
          name: "【系统消息】该系统将于今晚2点到5点进行维护",
          time: "2018-9-17 20:08:00"
        },
        {
          name: "【系统消息】该系统将于今晚2点到5点进行维护",
          time: "2018-9-17 20:08:00"
        },
        {
          name: "【系统消息】该系统将于今晚2点到5点进行维护",
          time: "2018-9-17 20:08:00"
        }
      ],
      //已读
      arry: [],
      //回收
      recycle: [
        {
          name: "【系统消息】该系统将于今晚2点到5点进行维护",
          time: "2018-9-17 20:08:00"
        }
      ]
    };
  },
  methods: {
    handleClick() {},
    //标记为已读
    biaoji(index) {
      this.arry.push(this.arr[index]);
      this.arr.splice(index, 1);
    },
    //删除
    shanchu(index) {
      this.recycle.push(this.arry[index]);
      this.arry.splice(index, 1);
    },
    //全部删除
    quanbu() {
     this.recycle = this.recycle.concat(this.arry)
      this.arry= []
    },
    //还原
    huanyuan(index){
      this.arry.push(this.recycle[index]);
      this.recycle.splice(index, 1);
    },
    //清空回收站
    qingkong() {
      this.recycle.splice(0);
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.aaa {
  margin-top: 10px;
  text-align: left;
  line-height: 40px;
}
.bbb {
  border-bottom: 1px solid #e4e7ed;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}
.yidu {
  display: inline-block;
  padding: 0 5px 0 5px;
  line-height: 30px;
  border: 1px solid #e4e7ed;
  border-radius: 5px;
  margin: 0 10px 0 5px;
  cursor: pointer;
  font-size: 15px;
}
.ccc {
  width: 65px;
  line-height: 30px;
  border-radius: 5px;
  border: 1px solid #e4e7ed;
  background-color: red;
  margin-top: 10px;
  padding: 0 5px 0 5px;
  cursor: pointer;
}
.huanyuan {
  display: inline-block;
  padding: 0 5px 0 5px;
  line-height: 30px;
  border: 1px solid #e4e7ed;
  border-radius: 5px;
  margin: 0 10px 0 5px;
  cursor: pointer;
  font-size: 15px;
  background-color: bisque;
}
.ttt {
  width: 80px;
  line-height: 30px;
  border-radius: 5px;
  border: 1px solid #e4e7ed;
  background-color: #99a9bf;
  margin-top: 10px;
  padding: 0 5px 0 5px;
  cursor: pointer;
}
</style>
