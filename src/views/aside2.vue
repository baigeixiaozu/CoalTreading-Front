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
      <template v-for="menuGroup in menuList" :key="menuGroup.index">
        <el-submenu
          v-if="menuGroup.roles.length === 0 || currentRole in menuGroup.roles"
          :index="menuGroup.index"
        >
          <template #title>
            <i :class="menuGroup.icon"></i>
            <span>{{ menuGroup.name }}</span>
          </template>
          <el-menu-item-group>
            <template v-for="subMenu in menuGroup.child" :key="subMenu.index">
              <el-menu-item v-if="subMenu.roles.length === 0 || currentRole in subMenu.roles" :index="subMenu.index"
                ><i :class="subMenu.icon"> </i>{{ subMenu.name }}
              </el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      currentRole: this.$store.state.role,
      menuList: [
        {
          index: "1",
          name: "资讯",
          icon: "el-icon-chat-line-square",
          roles: [],
          child: [
            {
              index: "/news/edit",
              name: "资讯编辑",
              icon: "el-icon-edit",
              roles: [],
            },
            {
              index: "/news/list",
              name: "资讯列表",
              icon: "el-icon-s-order",
              roles: [],
            },
          ],
        },
        {
          index: "2",
          name: "账户管理",
          icon: "",
          roles: [],
          child: [
            {
              index: "/user/login",
              name: "登录",
              icon: "el-icon-s-open",
              roles: [],
            },
            {
              index: "/user/reg",
              name: "注册",
              icon: "el-icon-s-open",
              roles: [],
            },
            {
              index: "/user/complete",
              name: "信息完善",
              icon: "el-icon-s-open",
              roles: [],
            },
            {
              index: "/user/new",
              name: "新增用户",
              icon: "el-icon-s-open",
              roles: [],
            },
          ],
        },
        {
          index: "3",
          name: "审核中心",
          icon: "",
          roles: [],
          child: [
            {
              index: "/audit",
              name: "审核中心",
              icon: "",
              roles: [],
            },
          ],
        },
        {
          index: "4",
          name: "交易中心",
          icon: "",
          roles: [],
          child: [
            {
              index: "4-1",
              name: "挂牌",
              icon: "el-icon-s-open",
              roles: [],
            },
            {
              index: "4-2",
              name: "摘牌",
              icon: "el-icon-s-order",
              roles: [],
            },
          ],
        },
      ],
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
