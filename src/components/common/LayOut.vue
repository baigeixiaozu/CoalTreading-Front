<template>
  <el-container>
    <el-header ><img src='D:/coal/src/assets/logo1.png'></el-header>
    <el-container>
      <el-aside width="200px"><side-bar></side-bar></el-aside>
      <el-container>
       <el-main>
         <bread-crumb></bread-crumb>
          <app-main></app-main>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
  
  
</template>

<script>

import SideBar from '@/components/common/sidebar/Index'
import AppMain from '@/components/common/AppMain'
import BreadCrumb from '@/components/common/BreadCrumb'


export default {
  data(){
    return {}
  },
  components: {
    SideBar,
    AppMain,
    BreadCrumb
  }
}
</script>

