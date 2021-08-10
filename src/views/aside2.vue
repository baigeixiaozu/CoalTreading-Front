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
          v-if="menuGroup.roles.includes('ALL') || menuGroup.roles.includes(currentRole)"
          :index="menuGroup.index"
        >
          <template #title>
            <i :class="menuGroup.icon"></i>
            <span>{{ menuGroup.name }}</span>
          </template>
          <el-menu-item-group>
            <template v-for="subMenu in menuGroup.child" :key="subMenu.index">
              <el-menu-item v-if="subMenu.roles.includes('ALL') || subMenu.roles.includes(currentRole)" :index="subMenu.index"
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
          roles: ['ALL'],
          child: [
            {
              index: "/news/edit",
              name: "资讯编辑",
              icon: "el-icon-edit",
              roles: ['NEWS_EDITOR'],
            },
            {
              index: "/news/list",
              name: "资讯列表",
              icon: "el-icon-s-order",
              roles: ['ALL'],
            },
          ],
        },
        {
          index: "2",
          name: "账户管理",
          icon: "",
          roles: ['ALL'],
          child: [
            {
              index: "/user/login",
              name: "登录",
              icon: "el-icon-s-open",
              roles: ['ALL'],
            },
            {
              index: "/user/reg",
              name: "注册",
              icon: "el-icon-s-open",
              roles: ['ALL'],
            },
            {
              index: "/user/complete",
              name: "信息完善",
              icon: "el-icon-s-open",
              roles: ['USER_SALE', 'USER_BUY'],
            },
            {
              index: "/user/userinfo",
              name: "用户信息修改",
              icon: "el-icon-s-open",
              roles: ['USER_SALE', 'USER_BUY', 'USER_MONEY'],
            },
            {
              index: "/user/new",
              name: "新增用户",
              icon: "el-icon-s-open",
              roles: ['SUPER_ADMIN'],
            },
          ],
        },
        {
          index: "3",
          name: "审核中心",
          icon: "",
          roles: ['ALL'],
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
          roles: ["USER_SALE", "USER_BUY"],
          child: [
            {
              index: "/trade/ListedInfo",
              name: "挂牌列表",
              icon: "el-icon-s-open",
              roles: ["USER_SALE", "USER_BUY"],
            },
            {
              index: "/trade/DelistInfo",
              name: "摘牌列表",
              icon: "el-icon-s-open",
              roles: ["USER_SALE", "USER_BUY"],
            },
            {
              index: "/trade/listed/buyerlisted",
              name: "挂牌",
              icon: "el-icon-s-open",
              roles: ["USER_BUY"],
            },
            {
              index: "/trade/listed/salelisted",
              name: "挂牌",
              icon: "el-icon-s-open",
              roles: ["USER_SALE"],
            },
            {
              index: "/trade/delist/buyerdelist",
              name: "摘牌",
              icon: "el-icon-s-order",
              roles: ["USER_BUY"],
            },
            {
              index: "/trade/delist/sellerdelist",
              name: "摘牌",
              icon: "el-icon-s-order",
              roles: ["USER_SALE"],
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
