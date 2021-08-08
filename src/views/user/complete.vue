<template>
  <div class="reg2">
    <h2>基础信息</h2>
    <hr>
    <el-form :label-position="labelPosition" :rules="rules" ref="form" :model="form">
      <el-row>
        <el-col :span="12">
          <el-form-item label="公司名称" prop="comName">
            <el-input v-model="form.comName" placeholder="请输入公司名称" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="企业类型" prop="nick">
            <span>
              {{this.form.nick}}

            </span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="法人代表" prop="legalName">
            <el-input v-model="form.legalName" placeholder="请输入法人代表" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="法人身份证" prop="legalId">
            <el-input v-model="form.legalId" placeholder="请输入法人身份证" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="公司地址" prop="comAddr">
            <el-input v-model="form.comAddr" placeholder="请输入注册地区" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item prop="email" label="企业邮箱">
            {{this.form.email}}
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="联系电话" prop="comContact">
            <el-input v-model="form.comContact" placeholder="请输入联系电话" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="传真" prop="fax">
            <el-input v-model="form.fax" placeholder="请输入传真" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="邮政编码" prop="comZip">
            <el-input v-model="form.comZip" placeholder="请输入邮政编码" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="注册资金（万元）" prop="registeredCapital">
            <el-input v-model="form.registeredCapital" placeholder="请输入注册资金" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="营业执照号" prop="businessLicenseId">
            <el-input v-model="form.businessLicenseId" placeholder="请输入营业执照号" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="组织机构代码" prop="oibCode">
            <el-input v-model="form.oibCode" placeholder="请输入组织机构代码" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="经营许可证编号" prop="manageLicenseId">
            <el-input v-model="form.manageLicenseId" placeholder="请输入经营许可证编号" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="税务登记证编号" prop="trCert">
            <el-input v-model="form.trCert" placeholder="请输入税务登记证编号" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="煤炭存放地点" prop="coalStoreSite">
            <el-input v-model="form.coalStoreSite" placeholder="请输入煤炭存放地点" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="煤炭数量（吨）" prop="number">
            <el-input v-model.number="form.number" placeholder="请输入煤炭数量" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12'>
          <el-form-item label="煤炭质量" prop="coalQuality">
            <el-input v-model="form.coalQuality" placeholder="请输入内容" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="运输方式" prop="coalTransport">
            <el-input v-model="form.coalTransport" placeholder="请输入内容" style="width:30%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="公司简介" prop="comIntro">
        <el-input v-model="form.comIntro" type="textarea" :rows="2" placeholder="请输入内容"></el-input>
      </el-form-item>
      <h2>企业资质</h2>
      <hr />
      <el-form-item></el-form-item>
      <el-upload class="upload-demo" action="http://localhost:8080/user/uploadFile" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed"
        :file-list="businessLicenseFile" :before-upload="beforeUpload6">
        <el-button size="small" type="primary">营业执照点击上传</el-button>
        <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>

      <el-form-item></el-form-item>
      <el-upload class="upload-demo" action="http://localhost:8080/user/uploadFile" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed"
        :file-list="trCertFile" :before-upload="beforeUpload5">
        <el-button size="small" type="primary">税务登记证点击上传</el-button>
        <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>

      <el-form-item></el-form-item>
      <el-upload class="upload-demo" action="http://localhost:8080/user/uploadFile" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed"
        :file-list="oibCodeFile" :before-upload="beforeUpload4">
        <el-button size="small" type="primary">组织机构代码证点击上传</el-button>
        <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-form-item></el-form-item>
      <el-form-item></el-form-item>
      <el-upload class="upload-demo" action="http://localhost:8080/user/uploadFile" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed"
        :file-list="manageLicenseFile" :before-upload="beforeUpload3">
        <el-button size="small" type="primary">煤炭经营许可证点击上传</el-button>
        <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>

      <el-form-item></el-form-item>
      <el-upload class="upload-demo" action="http://localhost:8080/user/uploadFile" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed"
        :file-list="legalIdFile" :before-upload="beforeUpload2">
        <el-button size="small" type="primary">法人身份证点击上传</el-button>
        <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form>
    <h2>完善财务信息</h2>
    <hr>
    <el-form :label-position="labelPosition" :rules="rules" ref="form1" :model="form1">
      <el-form-item label="汇款单位名称" prop="comName">
        <el-input v-model="form1.comName" placeholder="请输入......" style="width:30%;"></el-input>
      </el-form-item>
      <el-form-item label="开户银行" prop="bankName">
        <el-input v-model="form1.bankName" placeholder="请输入......" style="width:30%;"></el-input>
      </el-form-item>
      <el-form-item label="银行账号" prop="bankAcc">
        <el-input v-model="form1.bankAcc" placeholder="请输入......" style="width:30%;"></el-input>
      </el-form-item>
      <el-form-item label="账户余额" prop="blance">
        <el-input v-model.number="form1.blance" placeholder="请输入......" style="width:30%;"></el-input>
      </el-form-item>
      <el-form-item label="报价冻结金额" prop="freeze">
        <el-input v-model.number="form1.freeze" placeholder="请输入......" style="width:30%;"></el-input>
      </el-form-item>
      <el-form-item></el-form-item>
      <el-upload class="upload-demo" action="http://localhost:8080/user/uploadFile" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed"
        :file-list="aoPermitFile" :before-upload="beforeUpload1">
        <el-button size="small" type="primary">开户许可证证点击上传</el-button>
        <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form>
    <hr>
    <el-form>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form','form1')">提交</el-button>
        <el-button @click="resetForm('form','form1')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {getUserInfo} from './api'
  export default {
    name: 'reg2',
    data() {
      return {
        labelPosition: 'right',
        form1: {
          comName: '',
          bankName: '',
          bankAcc: '',
          blance: '',
          freeze: '',
          aoPermitFile: '', //开户许可证文件路径

        },
        form: {
          comName: '',
          legalName: '',
          nick: '',
          legalId: '',
          comAddr: '',
          comContact: '',
          comZip: '',
          businessLicenseId: '',
          manageLicenseId: '',
          fax: '',
          registeredCapital: '',
          oibCode: '',
          trCert: '',
          coalStoreSite: '',
          coalQuantity: '',
          coalQuality: '',
          coalTransport: '',
          comIntro: '',
          email: '',
          legalIdFile: '',
          businessLicenseFile: '',
          manageLicenseFile:'',
          oibCodeFile: '',
          trCertFile: '',

        },
        rules: {
          comName: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          legalName: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          legalId: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          comAddr: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          comContact: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          comZip: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          businessLicenseId: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          manageLicenseId: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          registeredCapital: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          oibCode: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          trCert: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          coalStoreSite: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          fax: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          coalQuantity: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          coalQuality: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          coalTransport: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],
          comIntro: [{
            required: true,
            message: '输入不能为空',
            trigger: 'blur'
          }, ],

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
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      beforeUpload1(file) {
        console.log(file.name)
        this.form1.aoPermitFile=file.name;
      },
      beforeUpload2(file) {
        console.log(file.name)
        this.form.legalIdFile=file.name;
      },
      beforeUpload3(file) {
        console.log(file.name)
        this.form.manageLicenseFile=file.name;
      },
      beforeUpload4(file) {
        console.log(file.name)
        this.form.oibCodeFile=file.name;
      },
      beforeUpload5(file) {
        console.log(file.name)
        this.form.trCertFile=file.name;
      },
      beforeUpload6(file) {
        console.log(file.name)
        this.form.businessLicenseFile=file.name;
      },
      submitForm(formName, formName1) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '注册成功',
              type: 'success'
            });
          } else {
            this.$message({
              message: '注册失败',
              type: 'warning'
            });
            return false;
          }
        });
        this.$refs[formName1].validate((valid) => {
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
      resetForm(formName, formName1) {
        this.$refs[formName].resetFields();
        this.$refs[formName1].resetFields();
      },
      postData: function() {
        this.axios({
          method: 'post',
          url: this.baseURL + '/user/complete',
          data: {
            comName: this.form.comName,
            legalName: this.form.legalName,
            nick: this.form.nick,
            legalId: this.form.legalId,
            comAddr: this.form.comAddr,
            comContact: this.form.comContact,
            comZip: this.form.comZip,
            businessLicenseId: this.form.businessLicenseId,
            manageLicenseId: this.form.manageLicenseId,
            fax: this.form.fax,
            registeredCapital: this.form.registeredCapital,
            oibCode: this.form.oibCode,
            trCert: this.form.trCert,
            coalStoreSite: this.form.coalStoreSite,
            coalQuantity: this.form.coalQuantity,
            coalQuality: this.form.coalQuality,
            coalTransport: this.form.coalTransport,
            comIntro: this.form.comIntro,
          }
        }).then(function(repos) {
          //console.log(repos);
        }).catch(function(err) {
          console.log(err);
        });
      },
      //form1 axios
      postData1: function() {
        this.axios({
          method: 'post',
          url: this.baseURL + '/user/finance',
          data: {
            comName:this.form1.comName,
            bankName:this.form1.bankName,
            bankAcc:this.form1.bankAcc,
            blance:this.form1.balance,
            freeze:this.form1.freeze,
            aoPermitFile:this.form1.aoPermitFile
          }
        }).then(function(repos) {
          console.log(repos);
        }).catch(function(err) {
          console.log(err);
        });
      },
      getData: function() {
        console.log(localStorage.token);
        getUserInfo().then(repos => {
            console.log(repos)
            this.form.email = repos.data.data.email;
            this.form.nick = repos.data.data.userType;
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
