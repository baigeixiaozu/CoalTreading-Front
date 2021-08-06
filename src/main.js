// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import Vuex from "vuex";
import store from "./store";

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.prototype.axios = axios;
Vue.prototype.$store = store;
Vue.use(Vuex);
Vue.prototype.baseURL = "http://localhost:8080";

Vue.config.productionTip = false;

axios.interceptors.request.use(config => {
  //此处读取上文存储的token并设置请求头
  //alert();
  console.log("1234");
  let token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = "Bear " + token;
  }
  // 这里需要注意，必须return config才能生效
  return config;
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store: store,
  render: h => h(App)
});

//token 获取成功后使用
router.beforeEach((to, from, next) => {
  //如果前往登陆页面放行
  if (to.path === "/login") return next();
  if (to.path === "/reg1") return next();

  //读取客户端sessionStorage 中存储的Token
  const tokenStr = window.localStorage.getItem("token");

  //判断Token是否存在，存在则放行，不存在则需进行登录
  if (!tokenStr) return next("/login");
  next();
});

/*

// 全局路由构造函数，判断是否登录和要跳转到页面
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.requireAuth)) {    // 需要登录
    if(window.localStorage.token && window.localStorage.isLogin === '1'){
      next()
    } else if (to.path !== '/login') {
      let token = window.localStorage.token;
      if (token === 'null' || token === '' || token === undefined){
          next({path: '/login'})
          Toast({ message: '检测到您还未登录,请登录后操作！', duration: 1500 })
      }
    } else {
      next()
    }
  } else {   // 不需要登录
    next()
  }
})
axios.interceptors.request.use(
  config =>{
    if(store.state.token){
      config.headers.common['token'] =store.state.token
    }
    return config;
  },
  error =>{
    //对请求错误做什么
    return Promise.reject(error);
  })

//http reponse响应拦截器
axios.interceptors.response.use(
  response =>{
    return response;
  },
  error=>{
    if(error.response){
      switch(error.response.status){
        case 401:
          localStorage.removeItem('token');
          router.replace({
            path: '/login',
            //query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
          })
      }
    }
  })
 */
