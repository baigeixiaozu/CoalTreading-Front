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
import { submit } from "./api";
export default {
  data() {
    return {
      form: {
        title: "",
        content: ""
      },
    };
  },
  
  methods: {
    postarticle(form,way){
      var article = form;
       console.log(article);
     submit(article,way).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
      if(err.error){
        this.$message({
          message: err.error,
          type:"error"
        })
        this.$router.back()
      }
    })
    },
    onSubmit() {
       this.postarticle(this.form,"publish/")
       this.clear()
    },
    clear() {
      this.form.title = "";
      this.form.content = "";
    },
    save() {
      this.postarticle(this.form,"draft/")
    }
    
  },
};
</script>
