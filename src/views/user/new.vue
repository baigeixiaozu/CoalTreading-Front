<template>
  <el-form
    :label-position="labelPosition"
    :rules="rules"
    ref="formLabel"
    label-width="80px"
    :model="formLabel"
  >
    <el-form-item>
      <span><h2>新增用户</h2></span>
    </el-form-item>
    <el-form-item label="用户名：" prop="login">
      <el-input
        v-model="formLabel.login"
        name="name"
        :value="formLabel.login"
        placeholder="请输入用户名"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码：" prop="pass">
      <el-input
      type="password"
      show-password
        v-model="formLabel.pass"
        name="pwd"
        :value="formLabel.pass"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item label="真实姓名：" prop="nick">
      <el-input
        v-model="formLabel.nick"
        name="nick"
        :value="formLabel.nick"
        placeholder="请输入真实姓名"
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱：" prop="email">
      <el-input
        v-model="formLabel.email"
        name="email"
        :value="formLabel.email"
        placeholder="请输入邮箱"
      ></el-input>
    </el-form-item>
    <el-form-item label="联系方式：" prop="phn">
      <el-input
        v-model="formLabel.phn"
        name="phn"
        placeholder="请输入联系方式"
      ></el-input>
    </el-form-item>
    <el-form-item label="角色：" prop="role">
      <el-select v-model="formLabel.role" placeholder="请选择角色">
        <el-option
          v-for="role in roleList"
          :key="role.id"
          :label="role.name"
          :value="role.id"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('formLabel')"
        >立即创建</el-button
      >
      <el-button @click="resetForm('formLabel')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { getRoleList,genNewUser } from "./api";
export default {
  data() {
    return {
      labelPosition: "top",
      formLabel: {
        login: "", //登录名
        pass: "", //密码
        email: "",
        phn: "", //联系方式
        nick: "", //真实姓名
        role: "", //角色
      },
      rules: {
        login: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        pass: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          { min: 6, max: 30, message: "密码长度不符", trigger: "blur" },
        ],
        phn: [
          {
            required: true,
            message: "请输入联系方式",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur",
          },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
          {
            min: 2,
            max: 20,
            message: "长度不得超过20 个字符",
            trigger: "blur",
          },
        ],
        nick: [
          {
            required: true,
            message: "请输入真实姓名",
            trigger: "blur",
          },
          { max: 10, message: "长度不得超过 10 个字符", trigger: "blur" },
        ],
        role: [
          {
            required: true,
            message: "请选择角色",
            trigger: "blur",
          },
        ],
      },
      roleList: [],
    };
  },
  created() {
    getRoleList("admin").then((res) => {
      this.roleList = res.data;
    });
  },
  mounted() {
    console.log(localStorage.token);
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.postData();
        } else {
          this.$message({
            message: "表单验证不通过",
            type: "warning",
          });
          return false;
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    postData: function () {
      genNewUser({
          login: this.formLabel.login, //登录名
          pass: this.formLabel.pass, //密码
          email: this.formLabel.email,
          phn: this.formLabel.phn, //联系方式
          nick: this.formLabel.nick, //真实姓名
          role: this.formLabel.role, //角色
        })
        .then( (resp)=> {
          console.log(resp);
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
