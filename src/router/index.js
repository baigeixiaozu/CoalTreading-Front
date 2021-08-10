import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/news/edit",
    component: () => import("../views/news/edit.vue"),
    meta: { title: "编辑资讯" }
  },
  {
    path: "/news/list",
    component: () => import("../views/news/list.vue"),
    meta: { title: "资讯中心" }
  },
  {
    path: "/news/list2",
    component: () => import("../views/news/list2.vue"),
    meta: { title: "资讯列表" }
  },
  {
    path: "/news/search",
    component: () => import("../views/news/search.vue"),
    meta: { title: "搜索资讯" }
  },
  {
    path: "/news/audit",
    component: () => import("../views/news/audit.vue"),
    meta: { title: "资讯审核" }
  },
  {
    path: "/news/detail",
    component: () => import("../views/news/detail.vue"),
    meta: { title: "资讯详情" }
  },
  // 用户路由START
  {
    path: "/user/login",
    component: () => import("../views/user/login.vue"),
    meta: { title: "登录" }
  },
  {
    path: "/user/reg",
    name: "userReg",
    component: () => import("../views/user/reg.vue"),
    meta: { title: "注册" }
  },
  {
    path: "/user/info",
    name: "info",
    component: () => import("../views/user/info.vue"),
    meta: { title: "信息修改" }
  },
  ,
  {
    path: "/user/complete",
    name: "userComplete",
    component: () => import("../views/user/complete.vue"),
    meta: { title: "完善企业信息" }
  },
  {
    path: "/user/new",
    name: "userNew",
    component: () => import("../views/user/new.vue"),
    meta: { title: "新增用户" }
  },
  // 用户路由END
  // 交易路由START
  {
    path: "/trade/ListedInfo",
    name: "ListedInfo",
    component: () => import("../views/trade/ListedInfo.vue"),
    meta: { title: "挂牌列表" }
  },
  {
    path: "/trade/DelistInfo",
    name: "DelistInfo",
    component: () => import("../views/trade/DelistInfo.vue"),
    meta: { title: "摘牌列表" }
  },

  {
    path: "/trade/delist/buyerdelist",
    name: "buyerdelist",
    component: () => import("../views/trade/delist/buyerdelist.vue"),
    meta: { title: "摘牌" }
  },
  {
    path: "/trade/delist/sellerdelist",
    name: "sellerdelist",
    component: () => import("../views/trade/delist/sellerdelist.vue"),
    meta: { title: "摘牌" }
  },
  
  {
    path: "/trade/listed/buyerlisted",
    name: "buyerlisted",
    component: () => import("../views/trade/listed/buyerlisted.vue"),
    meta: { title: "挂牌" }
  },
  {
    path: "/trade/listed/salelisted",
    name: "DelistInfo",
    component: () => import("../views/trade/listed/salelisted.vue"),
    meta: { title: "挂牌" }
  },
  {
    path: "/trade/A/:mode",
    name: "GP1",
    component: () => import("../views/trade/A.vue"),
    meta: { title: "挂牌1" }
  },
  {
    path: "/trade/B/:mode",
    name: "GP2",
    component: () => import("../views/trade/B.vue"),
    meta: { title: "挂牌" }
  },
  // 交易路由END
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
