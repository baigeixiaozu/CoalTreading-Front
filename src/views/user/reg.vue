<template>
  <!-- 交易用户注册 -->
  <div class="reg1">
    <p>用户注册</p>
    <el-form
      :label-position="labelPosition"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="login">
        <el-input
          v-model.number="ruleForm.login"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
          placeholder="请确认密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item prop="nick" label="公司">
        <el-input v-model="ruleForm.nick"></el-input>
      </el-form-item>
      <el-form-item label="身份" prop="role">
        <el-select
          v-model="ruleForm.role"
          type="text"
          name="role"
          placeholder="请选择身份"
        >
          <!-- <el-option label="供应商" value="7"></el-option>
          <el-option label="采购商" value="8"></el-option> -->
          <el-option
            v-for="item in roleList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
            >{{ item.name }}</el-option
          >
        </el-select>
      </el-form-item>
      <p>
        <el-form-item prop="check">
          <el-radio-group v-model="ruleForm.check">
            <el-radio label="同意"
              ><a href="#"> 使用条款和隐私策略 </a></el-radio
            >
          </el-radio-group>
        </el-form-item>
      </p>
      <p class="txt">
        <a href="#/user/login"><span></span>已有账号登录</a>
      </p>
      <!--<a href="#" class="off"><img src="img/temp/off.png"></a>-->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button type="text" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getRoleList, userRegister } from "./api";
export default {
  name: "reg",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "right",
      ruleForm: {
        pass: "",
        //checkPass: '',
        login: "",
        nick: "",
        //check:'',
        email: "",
        role: "",
      },
      rules: {
        pass: [
          {
            required: true,
            validator: validatePass,
            trigger: "blur",
          },
        ],
        checkPass: [
          {
            required: true,
            validator: validatePass2,
            trigger: "blur",
          },
        ],
        login: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
        ],
        nick: [
          {
            required: true,
            message: "公司不能为空",
            trigger: "blur",
          },
        ],
        role: [
          {
            required: true,
            message: "身份不能为空",
            trigger: "blur",
          },
        ],
        check: [
          {
            required: true,
            message: "请阅读后勾选",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱地址",
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
      },
      roleList: [],
    };
  },
  mounted() {
    getRoleList("user").then((res) => {
      console.log(res);
      this.roleList = res.data;
    });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.postData();
        } else {
          this.$message({
            message: "资料填写不规范，请检查！",
            type: "warning",
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      //清除存储的token数据
      //window.sessionStorage.clear()
    },
    postData: function () {
      userRegister({
        pass: this.ruleForm.pass,
        //checkPass: '',
        login: this.ruleForm.login,
        nick: this.ruleForm.nick,
        //check:'',
        email: this.ruleForm.email,
        role: this.ruleForm.role,
      })
        .then((res) => {
          console.log(res);
          this.$router.push("/user/login");
        })
        .catch((err) => {
          console.log(err);
          if (err.error) {
            this.$message({
              type: "error",
              message: err.error,
            });
          }
        });
    },
  },
};
</script>

<style>
</style>
