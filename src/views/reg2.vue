<template>
  <div class="reg2">
    <h2>基础信息</h2>
    <hr>
    <el-form :label-position="labelPosition" :rules="rules" ref="form" :model="form">
      <el-row>
        <el-col :span="12">
          <el-form-item label="供应商名称" prop="supName">
            <el-input v-model.number="form.supName" placeholder="请输入供应商名称" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="企业类型" prop="nick">
            <span>
              {{form.nick}}

            </span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="法人代表" prop="legalR">
            <el-input v-model.number="form.legalR" placeholder="请输入法人代表" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="法人身份证" prop="corid">
            <el-input v-model.number="form.corid" placeholder="请输入法人身份证" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="注册地区" prop="regArea">
            <el-input v-model.number="form.regArea" placeholder="请输入注册地区" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item prop="email" label="企业邮箱" :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]">
            <el-input v-model="form.email" placeholder="请输入企业邮箱" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="联系电话" prop="conNo">
            <el-input v-model.number="form.conNo" placeholder="请输入联系电话" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="传真" prop="fax">
            <el-input v-model.number="form.fax" placeholder="请输入传真" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="邮政编码" prop="postCode">
            <el-input v-model.number="form.postCode" placeholder="请输入邮政编码" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="注册资金（万元）" prop="regCap">
            <el-input v-model.number="form.regCap" placeholder="请输入注册资金" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="营业执照号" prop="blNo">
            <el-input v-model.number="form.blNo" placeholder="请输入营业执照号" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="组织机构代码" prop="orgCode">
            <el-input v-model.number="form.orgCode" placeholder="请输入组织机构代码" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="经营许可证编号" prop="bpNo">
            <el-input v-model.number="form.bpNo" placeholder="请输入经营许可证编号" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="税务登记证编号" prop="RCcode">
            <el-input v-model.number="form.RCcode" placeholder="请输入税务登记证编号" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="开户银行" prop="bank">
            <el-input v-model.number="form.bank" placeholder="请输入开户银行" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="银行账号" prop="Account">
            <el-input v-model.number="form.Account" placeholder="请输入银行账号" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <hr>
      <el-form-item label="煤源存放地点、数量、质量" prop="lqq">
        <el-input v-model.number="form.lqq" type="textarea" :rows="2" placeholder="请输入内容"></el-input>
      </el-form-item>

      <el-form-item label="运输方式及保障能力" prop="typeOfShipping">
        <el-input v-model.number="form.typeOfShipping" type="textarea" :rows="2" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="应商介绍" prop="introduction">
        <el-input v-model.number="form.introduction" type="textarea" :rows="2" placeholder="请输入内容"></el-input>
      </el-form-item>
      <h2>企业资质</h2>
      <hr />
      <el-form-item>
      <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
        :file-list="busL">
        <el-button size="small" type="primary">营业执照点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      </el-form-item>
      <el-form-item>
      <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
        :file-list="taxRC">
        <el-button size="small" type="primary">税务登记证点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      </el-form-item>
      <el-form-item>
      <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
        :file-list="orgCodeC">
        <el-button size="small" type="primary">组织机构代码证点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      </el-form-item>
      <el-form-item>
      <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
        :file-list="peiA">
        <el-button size="small" type="primary">开户许可证点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      </el-form-item>
      <el-form-item>
      <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
        :file-list="coalBL">
        <el-button size="small" type="primary">煤炭经营许可证点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      </el-form-item>
      <el-form-item>
      <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
        :file-list="corid">
        <el-button size="small" type="primary">法人身份证点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      </el-form-item>
      <hr>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'reg2',
    data() {
      return {
        labelPosition: 'right',
        form: {
          login: '',
          supName: '',
          nick: '',
          regArea: '',
          legalR: '',
          conNo: '',
          postCode: '',
          blNo: '',
          bpNo: '',
          bank: '',
          regCap: '',
          corid: '',
          email: '',
          fax: '',
          orgCode: '',
          RCcode: '',
          Account: '',
          lqq: '',
          typeOfShipping: '',
          introduction: '',
          busL: [],
          corid: [],
          coalBL: [],
          peiA: [],
          orgCodeC: [],
          taxRC: [],
        },
        rules: {
        /*  supName: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          nick: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          regArea: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          legalR: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          conNo: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          postCode: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          blNo: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          bpNo: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          bank: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          regCap: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          corid: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          email: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          fax: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          orgCode: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          RCcode: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          Account: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          lqq: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          typeOfShipping: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          introduction: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ], */
        }
      };
    },
    mounted() {
     
        this.getData();
      //alert();
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '注册成功',
              type: 'success'
            });
            this.$router.push("/success");
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
          method: 'post',
          url: this.baseURL/* + '/user/complete' */,
        }).then(function(repos) {
          console.log(repos);
        }).catch(function(err) {
          console.log(err);
        });
      },

      getData: function() {
        alert(localStorage.token);
        this.axios({
            method: 'get',
            url: this.baseURL + '/user/info',
            headers: {
                        Authorization: "Bear " + localStorage.token
                      },
          }).then(repos => {
            console.log(repos)
            this.form.nick = repos.data.login;
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    },

}
</script>


<style>
</style>
