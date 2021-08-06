import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/editnews",
    component: () => import("../views/editnews.vue"),
    meta: { title: "编辑资讯" },
  },
  {
    path: "/newslist",
    component: () => import("../views/newslist.vue"),
    meta: { title: "资讯中心" },
  },
  {
    path: "/search",
    component: () => import("../views/search.vue"),
    meta: { title: "搜索资讯" },
  },
  {
    path: "/audit",
    component: () => import("../views/audit.vue"),
    meta: { title: "审核界面" },
  },
  {
    path: "/user/login",
    component: () => import("../views/user/login.vue"),
    meta: { title: "登录" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
