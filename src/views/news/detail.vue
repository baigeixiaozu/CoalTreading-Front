<template>
  <div>
    <el-container>
      <el-header><h3>{{ title }}</h3></el-header>
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
    loadNewsDetail(this.$route.query.id).then(res=>{
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
