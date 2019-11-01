<template>
  <div id="upload">
    <div class="upload_a">支持拖拽</div>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          Element Ui 自带上传组建
        </div></el-col
      >
    </el-row>
    <el-upload
      class="upload-demo"
      drag
      action="api/upload"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <div class="upload_b">支持剪裁</div>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          vue-image-crop-upload
        </div></el-col
      >
    </el-row>
    <div class="upload_c">
      <el-button type="primary" @click="toggleShow">图片上传</el-button>
      <my-upload
        field="img"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
        :width="300"
        :height="300"
        url="api/upload"
        :params="params"
        :headers="headers"
        img-format="png"
      ></my-upload>
      <img :src="imgDataUrl" />
    </div>
  </div>
</template>

<script>
import "babel-polyfill"; // es6 shim
import myUpload from "vue-image-crop-upload";
export default {
  name: "Upload",
  components: {
    "my-upload": myUpload
  },
  props: {},
  data() {
    return {
      show: false,
      imgDataUrl: "" // the datebase64 url of created image
    };
  },
  params: {
    token: "123456798",
    name: "avatar"
  },
  headers: {
    smail: "*_~"
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------");
      this.imgDataUrl = imgDataUrl;
      console.log(field);
    },
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      console.log(jsonData);
      console.log("field: " + field);
    },
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log(status);
      console.log("field: " + field);
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
.upload_a {
  line-height: 20px;
  padding-bottom: 20px;
  text-align: left;
  font-weight: bold;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: left;
  line-height: 36px;
  padding-left: 20px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.upload-demo {
  text-align: left;
}
.upload_b {
  line-height: 20px;
  text-align: left;
  font-weight: bold;
  padding-top: 20px;
  font-size: 20px;
  padding-bottom: 20px;
}
  .upload_c{
    text-align: left;
  }
</style>
