<template>

  <el-form :label-position="labelPosition" :rules="rules" ref="form" label-width="80px" :model="form">
    <el-form-item>
      <span><h2>用户信息修改</h2></span>
    </el-form-item>
    <el-form-item label="用户名：" prop="login">
      <el-input v-model="form.login" type="text" name="name"  :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="昵称：" prop="nick">
      <el-input v-model="form.nick" type="text" name="nick"  :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="新密码：" prop="pass">
      <el-input v-model="form.pass" type="text" name="pwd"  placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item label="邮箱：" prop="email">
      <el-input v-model="form.email" type="text" name="email"  placeholder="请输入邮箱"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="patchData()">立即修改</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {getUserInfo} from './api'
  export default {
    data() {
      return {
        labelPosition: 'right',
        form: {
          login: '', //登录名
          pass: '', //密码
          email:'',
          nick: '',//
          },
        rules: {
          login: [{
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            },
             { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          pass: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            { min: 6, max: 30, message: '密码长度不符', trigger: 'blur' }
          ],

          email: [{
              required: true,
              message: '请输入邮箱',
              trigger: 'blur'
            },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
                { min: 2, max: 20, message: '长度不得超过20 个字符', trigger: 'blur' }
          ],
          nick: [{
              required: true,
              message: '请输入真实姓名',
              trigger: 'blur'
            },
            { max: 10, message: '长度不得超过 10 个字符', trigger: 'blur' }
          ],
        }
        };
    },
    mounted() {
      this.getData();
    },
    methods: {
      patchData : function(){
        this.axios({
          method:'patch',
          url:'/update/userinfo',
          data:{
            email:this.form.email,
            pass:this.form.pass
          }
        }).then(function(repos) {
          ElMessage({
            message: "修改成功",
            type: "success",
          });
          console.log(repos);
        }).catch(function(err) {
          console.log(err);
        });
      },
      getData: function() {
        console.log(localStorage.token);
        getUserInfo().then(repos => {
            console.log(repos)
            this.form.email = repos.data.email;
            this.form.nick = repos.data.nick;
            this.form.login=repos.data.login;
            this.form.pass =repos.data.pass;
          })
          .catch(function(err) {
            console.log(err);
          });
      }

    }
  }
</script>

<style>
</style>
