import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/news/edit",
    component: () => import("../views/news/edit.vue"),
    meta: { title: "编辑资讯" },
  },
  {
    path: "/news/list",
    component: () => import("../views/news/list.vue"),
    meta: { title: "资讯中心" },
  },
  {
    path: "/news/search",
    component: () => import("../views/news/search.vue"),
    meta: { title: "搜索资讯" },
  },
  {
    path: "/audit",
    component: () => import("../views/news/audit.vue"),
    meta: { title: "审核界面" },
  },
  // 用户路由START
  {
    path: "/user/login",
    component: () => import("../views/user/login.vue"),
    meta: { title: "登录" },
  },
  {
    path: "/user/reg",
    name: "userReg",
    component: () => import("../views/user/reg.vue"),
    meta: { title: "注册" },
  },
  // 用户路由END
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
