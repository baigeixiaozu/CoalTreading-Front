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
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          this.$message({
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
      var params = new URLSearchParams();
      params.append("key", "value");
      this.axios({
        method: "post",
        url: this.baseURL + "/user/login",
        data: {
          pass: this.loginForm.pass,
          login: this.loginForm.login,
        },
      })
        .then(function (res) {
          //console.log(repos.data.code)
          /* if(repos.data.code == 200){
              alert('注册成功');
              this.$router.push({name:'reg'});
            }else if(repos.data.code == 101404){
              alert('账号错误');
            }else if(repos.data.code == 101401){
              alert('密码错误');
            } */
          if (res.data.code == 200) {
            var userInfo = res.data.data;
            console.log(res);
            localStorage.token = res.data.data.access_token;
            alert(localStorage.token);
            //	self.$store.commit('$_setToken', userInfo.token);

            //alert('cg');
            // Toast({ message: '登录成功', type: 'success',duration: 1500});   // ui弹窗提示
            //              this.$router.push({ name:'success' });  // 跳转到首页
          } else {
            //Toast({ message: res.data.message, duration: 1500});   // ui弹窗提示
            alert("sb");
          }
          //console.log(res);
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
