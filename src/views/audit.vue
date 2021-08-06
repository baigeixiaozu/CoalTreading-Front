<template>
  <el-card shadow="hover">
    <el-scrollbar height="300px">
      <p class="item" v-for="item in reglist" :key="item">{{ item }}</p>
    </el-scrollbar>
    <el-pagination layout="prev, pager, next" :total="50"> </el-pagination
  ></el-card>
  <el-row></el-row>
  <el-card shadow="hover">
    <el-scrollbar height="300px">
      <p class="item" v-for="item in newslist" :key="item">{{ item }}</p>
    </el-scrollbar>
    <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
  </el-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    const item1 = "这是注册审核列表";
    const item2 = "这是资讯审核列表";
    return {
      reglist: Array(20).fill(item1),
      newslist: Array(20).fill(item2),
    };
  },
  created: () => {
    console.log("created");
  },
};
</script>
<style scoped>
</style>