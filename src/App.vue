<template>
  <el-container>
    <el-header><img src="./assets/logo1.png" /></el-header>
    <el-container>
      <el-container>
        <el-aside width="220px"><aside2></aside2></el-aside>
        <el-main>
          <el-row>
            <el-page-header @back="goBack" content="详情页面"> </el-page-header>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark title">
                {{ this.$route.meta.title }}
              </div>
            </el-col>
          </el-row>
          <el-card shadow="hover"><router-view></router-view></el-card
        ></el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import aside2 from "./views/aside2.vue";

export default {
  name: "App",
  components: {
    aside2,
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.back()
    },
  },
};
</script>


<style  lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;

  color: rgb(219, 219, 231);
}
.bg-purple-dark {
  background: #1353c9;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 5px;
  min-height: 36px;
  color: #ffffff;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.title{
  display:flex;
  align-items: center;
  justify-content: center;
}
</style>