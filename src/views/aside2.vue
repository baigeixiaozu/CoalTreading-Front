<template>
  <div id="aside">
    <el-radio-group
      v-model="isCollapse"
      style="margin-bottom: 20px"
      fill="#1353c9"
    >
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router
    >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-chat-line-square"></i>
          <span>资讯中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/news/edit"
            ><i class="el-icon-edit"> </i>编辑资讯
          </el-menu-item>

          <el-menu-item index="/news/list"
            ><i class="el-icon-s-order"></i>资讯列表</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template #title>
          <span>账户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user/login">
            <i class="el-icon-s-open"></i>登录/注册
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="/audit">审核中心</el-menu-item>

      <el-submenu index="4">
        <template #title>
          <span>交易中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1"
            ><i class="el-icon-s-open"></i>挂牌</el-menu-item
          >
          <el-menu-item index="4-2"
            ><i class="el-icon-s-order"></i>摘牌</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 600px;
}
</style>
