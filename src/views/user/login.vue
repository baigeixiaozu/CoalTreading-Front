<template>
  <el-form
    :label-position="labelPosition"
    :model="loginForm"
    status-icon
    :rules="rules"
    ref="loginForm"
    label-width="100px"
  >
    <el-form-item label="用户名" prop="login">
      <el-input
        v-model.number="loginForm.login"
        placeholder="请输入用户名"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input
        type="password"
        v-model="loginForm.pass"
        autocomplete="off"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')"
        >登录</el-button
      >
      <el-button @click="regForm('loginForm')">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {userLogin} from './api';
import { ElMessage } from 'element-plus';
export default {
  data() {
    return {
      labelPosition: "right",
      loginForm: {
        pass: "",
        login: "",
      },
      rules: {
        login: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
        ],

        pass: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$message({
        message: "登录成功",
        type: "success",
      });
    },
    submitForm(formName) {
      console.log(formName);
      console.log
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          ElMessage({
            message: "注册失败,请填写用户名密码",
            type: "warning",
          });
          return false;

          //this.$router.push({name:'reg'});
        } else {
          this.postData();
        }
      });
    },

    regForm(formName) {
      localStorage.removeItem("token");
      this.$router.push({
        name: "userReg",
      });
    },

    postData: function () {
      
      userLogin(this.loginForm.login, this.loginForm.pass)
        .then( (res)=> {
          const resp = res;
          if (resp.code == 200) {
            this.$store.commit("set_token", resp.data.access_token);
            this.$store.commit("set_role", resp.data.role[0]);
            
            // console.log("login test", localStorage.token);
            this.$message({
              message: "登录成功",
              type: "success",
              duration: 1000
            });
            if(this.$route.query.redirect){
              this.$router.push({
                path: this.$route.query.redirect
              });
            }else{
              console.log("跳转至个人信息页")
              this.$router.push({
                path: "/user/info"
              });
            }
          } else {
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>
