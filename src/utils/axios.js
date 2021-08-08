"use strict";

import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || "http://127.0.0.1:8080",
  timeout: 60 * 1000, // Timeout
  withCredentials: false // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    let token = localStorage.getItem("Authorization");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  function(error) {
    // Do something with request error
    console.log("request error", error)
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  (response) => {
    // Do something with response data
    console.log("response", response);

    if(response.status !== 200)return Promise.reject(response);

    const resp = response.data;
    if(resp.code !== 200){
      console.log("状态码异常", resp)
      // Toast({
      //   message: resp.error,
      //   duration: 1000,
      //   forbidClick: true
      // });
    }

    return response.data;
  },
  (error) => {
    // Do something with response error
    console.log("response error",error.response);
    console.log("网络错误", error);
    const resp = error.response;
    if (resp.status) {
      switch (resp.status) {
        // 401: 未登录，或者登录过期
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          console.log("401")
          // Toast({
          //   message: "登录过期，请重新登录",
          //   duration: 1000,
          //   forbidClick: true
          // });
          // 清除token
          localStorage.removeItem("token");
          // store.commit("loginSuccess", null);
          router.replace({
            path: "/user/login",
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
          break;

        // 403 没有接口相关权限
        // 对用户进行提示
        // 跳转登录页面
        case 403:
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: "/index",
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;

        // 404请求不存在
        case 404:
          console.log("404")
          // Toast({
          //   message: "网络请求不存在",
          //   duration: 1500,
          //   forbidClick: true
          // });
          break;
        // 其他错误，直接抛出错误提示
        default:
          // Toast({
          //   message: error.response.data.error,
          //   duration: 1500,
          //   forbidClick: true
          // });
      }
    }else
      console.log("网络请求 - ", error);
    return Promise.reject(error);
  }
);

export default _axios;
