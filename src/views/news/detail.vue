<template>
  <div>
    <el-container>
      <el-header>{{ title }}</el-header>
      <el-main>{{content}}</el-main>
    </el-container>
  </div>
</template>

<script>
import {loadNewsDetail} from './api'
export default {
  data() {
    return {
      title: "标题",
      content: "内容"
    };
  },
  created(){
    loadNewsDetail(202).then(res=>{
      console.log(res)
      this.title = res.data.title;
      this.content = res.data.content;
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
  }
};
</script>

<style>
</style>