<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="标题">
      <el-input v-model="form.title" placeholder="请输入标题"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input
        type="textarea"
        v-model="form.content"
        placeholder="请输入内容"
        :rows="30"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="save">保存</el-button>
      <el-button type="primary" @click="onSubmit">上传</el-button>
      <el-button type="primary" @click="clear">清除</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        title: "",
        content: "",
        status: 0,
      },
    };
  },
  created: () => {},
  methods: {
    onSubmit() {
      this.form.status = 1;
      console.log(JSON.stringify(this.form));

      axios
        .post(
          "https://yapi.jysafe.cn/mock/12/news/publish",
          JSON.stringify(this.form)
        )
        .then(
          function (response) {
            console.log(response);
          },
          function (error) {}
        );
    },
    clear() {
      this.form.title = "";
      this.form.content = "";
    },
    save() {
      this.form.status = 2;
      console.log(JSON.stringify(this.form));

      axios
        .post(
          "https://yapi.jysafe.cn/mock/12/news/publish",
          JSON.stringify(this.form)
        )
        .then(
          function (response) {
            console.log(response);
          },
          function (error) {}
        );
    },
  },
};
</script>
