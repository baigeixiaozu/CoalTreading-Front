<template>

    <el-form :label-position="labelPosition" :rules="rules" ref="formLabel" label-width="80px" :model="formLabel">
      <el-form-item>
        <span><h2>用户注册</h2></span>
      </el-form-item>
      <el-form-item label="用户名：" prop="login">
        <el-input v-model="formLabel.login" type="text" name="name" value="" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="pass">
        <el-input v-model="formLabel.pass" type="text" name="pwd" value="" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名：" prop="nick">
        <el-input v-model="formLabel.nick" type="text" name="nick" value="" placeholder="请输入真实姓名"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="email">
        <el-input v-model="formLabel.email" type="text" name="email" value="" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="联系方式：" prop="phn">
        <el-input v-model="formLabel.phn" type="text" name="phn" value="" placeholder="请输入联系方式"></el-input>
      </el-form-item>
      <el-form-item label="角色：" prop="role">
        <el-select v-model="formLabel.role" placeholder="请选择角色">
          <el-option label="管理人员" value="管理人员"></el-option>
          <el-option label="资讯发布人员" value="资讯发布人员"></el-option>
          <el-option label="燃料业务人员" value="燃料业务人员"></el-option>
          <el-option label="监察人员" value="监察人员"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formLabel')">立即创建</el-button>
        <el-button @click.native="resetForm('formLabel')">重置</el-button>
      </el-form-item>
    </el-form>

</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'top',
        formLabel: {
          login: '', //登录名
          pass: '', //密码
          email:'',
          phn: '',//联系方式
          nick: '',//真实姓名
          role: '',//角色
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
          phn: [{
              required: true,
              message: '请输入联系方式',
              trigger: 'blur'
            },

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
          role: [{
              required: true,
              message: '请选择角色',
              trigger: 'blur'
            },

          ],
        }
      };
    },
    mounted() {
      console.log(localStorage.token)
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '注册成功',
              type: 'success'
            });
            this.postData();

          } else {
            this.$message({
              message: '注册失败',
              type: 'warning'
            });
            return false;
          }
        });
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      postData: function() {
        this.axios({
          headers: {
                      Authorization: "Bearer " + localStorage.token
                    },
          method: 'post',
          url: this.baseURL+'/user/new',
          data:{
            login: this.formLabel.login, //登录名
            pass: this.formLabel.pass, //密码
            email:this.formLabel.email,
            phn: this.formLabel.phn,//联系方式
            nick: this.formLabel.nick,//真实姓名
            role: this.formLabel.role,//角色
          }
        }).then(function(repos) {
          console.log(repos);
        }).catch(function(err) {
          console.log(err);
        });
      }

    }
  }
</script>

<style>
</style>
