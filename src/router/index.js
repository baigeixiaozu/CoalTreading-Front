import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path:"/",
    redirect:"/news/list"
  },
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
    path: "/user/audit",
    component: () => import("../views/user/audit.vue"),
    meta: { title: "注册审核" }
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
  //用户消息列表
  {
    path: "/message/list",
    component: () => import("../views/message/list.vue"),
    meta: { title: "用户信息列表" }
  },
  // 交易路由START
  {
    path: "/trade/GPList/:mode",
    name: "GPList",
    component: () => import("../views/trade/GPList.vue"),
    meta: { title: "挂牌列表" }
  },
  {
    path: "/trade/MyZPList",
    name: "MyZPList",
    component: () => import("../views/trade/MyZPList.vue"),
    meta: { title: "我的摘牌列表" }
  },
  {
    path: "/trade/margin",
    name: "margin",
    component: () => import("../views/trade/margin.vue"),
    meta: { title: "支付保证金" }
  },
  {
    path: "/trade/predeposit",
    name: "predeposit",
    component: () => import("../views/trade/predeposit.vue"),
    meta: { title: "资金预存" }
  },
  {
    path: "/trade/contract/:mode",
    name: "contract",
    component: () => import("../views/trade/contract.vue"),
    meta: { title: "合同处理" }
  },
  {
    path: "/trade/A/:mode",
    name: "GP1",
    component: () => import("../views/trade/A.vue"),
    // meta: { title: "挂牌/摘牌" },
    beforeEnter:(to, from, next)=>{
      if(to.params.mode === 'zp'){
        to.meta.title = '卖方摘牌'
      }else{
        to.meta.title = '买方挂牌'
      }
      next()
    }
  },
  {
    path: "/trade/B/:mode",
    name: "GP2",
    component: () => import("../views/trade/B.vue"),
    // meta: { title: "挂牌/摘牌" }
    beforeEnter:(to, from, next)=>{
      if(to.params.mode === 'zp'){
        to.meta.title = '买方摘牌'
      }else{
        to.meta.title = '卖方挂牌'
      }
      next()
    }
  },
  // 交易路由END
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
// 全局解析守卫
// router.beforeResolve((to, from, next) => {
//   window.document.title = to.meta.title
//   next()
// })
export default router;
