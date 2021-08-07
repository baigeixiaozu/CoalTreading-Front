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
      <el-submenu v-for="menuGroup in menuList" :key="menuGroup.index" :index="menuGroup.index">
        <template #title>
          <i :class="menuGroup.icon"></i>
          <span>{{menuGroup.name}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="subMenu in menuGroup.child" :key="subMenu.index" :index="subMenu.index"
            ><i :class="subMenu.icon"> </i>{{subMenu.name}}
          </el-menu-item>
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
      menuList: [
        {
          index: 1,
          name: "资讯",
          icon: "el-icon-chat-line-square",
          role: "",
          child: [
            {
              index: "/news/edit",
              name: "资讯编辑",
              icon: "el-icon-edit",
              role: "",
            },
            {
              index: "/news/list",
              name: "资讯列表",
              icon: "el-icon-s-order",
              role: ""
            }
          ]
        },
        {
          index: 2,
          name: "账户管理",
          icon: "",
          role: "",
          child: [
            {
              index: "/user/login",
              name: "登录/注册",
              icon: "el-icon-s-open",
              role: "",
            },
            {
              index: "/user/new",
              name: "新增用户",
              icon: "el-icon-s-open",
              role: "",
            }
          ]
        },
        {
          index: 3,
          name: "审核中心",
          icon: "",
          role: "",
          child: [
            {
              index: "/audit",
              name: "审核中心",
              icon: "",
              role: "",
            }
          ]
        },
        {
          index: 4,
          name: "交易中心",
          icon: "",
          role: "",
          child: [
            {
              index: "4-1",
              name: "挂牌",
              icon: "el-icon-s-open"
            },
            {
              index: "4-2",
              name: "摘牌",
              icon: "el-icon-s-order"
            }
          ]
        }
      ]
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
