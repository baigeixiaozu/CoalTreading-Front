<template>
  <div>
    <el-container>
      <el-header><h3>{{ title }}</h3></el-header>
      <el-main>
        <div class="news-meta">发布时间：{{date}}</div>
        <div class="news-content">{{content}}</div>
      </el-main>
     <span class="dialog-footer">
      <el-button type="danger" @click="notpass(this.$route.query.id)">拒绝</el-button>
      <el-button type="success" @click="pass(this.$route.query.id)">通过</el-button>
      </span>
    </el-container>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import {loadNewsDetail} from './api'
import {getpass} from "./api.js"
import {getnotpass} from "./api.js"
export default {
  data() {
    return {
      title: "",
      content: "",
      date: ''
    };
  },
  methods:{
   pass(id){
      getpass(id).then(res=>{
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
    ElMessage.success({
            message: '已通过',
            type: 'success',
          })
       this.$router.back()   
      },
    notpass(id){
      getnotpass(id).then(res=>{
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
    ElMessage.success({
            message: '已拒绝',
            type: 'success',
          })
          this.$router.back()
      },
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
