<template>
<el-config-provider :locale="locale">
  <el-container>
    <el-header><img src="./assets/logo1.png" /></el-header>
    <el-container>
      <el-container>
        <el-aside width="220px"><Aside></Aside></el-aside>
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
</el-config-provider>
</template>

<script>
import Aside from "./views/Aside.vue";
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default {
  name: "App",
  components: {
    Aside,
    [ElConfigProvider.name]: ElConfigProvider
  },
  data() {
    return {
      locale: zhCn
    };
  },
  methods: {
    goBack() { this.$router.back()},
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
