<template>
  <div>
    <el-container>
      <el-header><h3>{{ title }}</h3></el-header>
      <el-main>
        <div class="news-meta">发布时间：{{date}}</div>
        <div class="news-content">{{content}}</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {loadNewsDetail} from './api'
export default {
  data() {
    return {
      title: "",
      content: "",
      date: ''
    };
  },
  created(){
    loadNewsDetail(this.$route.query.id).then(res=>{
      console.log(res)
      this.title = res.data.title;
      this.content = res.data.content;
      this.date = res.data.date;
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
.news-meta{
  margin-bottom: 1rem;
  color: gray
}
.news-content{
  margin-top: 1rem;
}

</style>
