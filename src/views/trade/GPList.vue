<template>
  <!-- 
  用户查看自己所有的挂牌列表，并选择修改草稿或者发布新挂牌信息，
  -->
  <div>
    <el-container>
      <el-header><h2>{{mode==='my'?'我的挂牌列表':'公共挂牌列表'}}</h2></el-header>
      <el-main></el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      mode: this.$route.params.mode
    }
  },
  created(){
  },
  updated(){
    this.mode = this.$route.params.mode
  },
  methods: {
    
    getPublicList(){

    },
    getMyList(){

    }
  }
}
</script>

<style>
</style>
