<template>
  <div class="reg2">
    <h2>基础信息</h2>
    <hr />
    <el-form
      :label-position="labelPosition"
      :rules="comInfoRules"
      ref="comInfo"
      :model="comInfo"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="公司名称" prop="comName">
            <el-input
              v-model="comInfo.comName"
              placeholder="请输入公司名称"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="企业类型" prop="nick">
            <span>
              {{ comInfo.userType }}
            </span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="法人代表" prop="legalName">
            <el-input
              v-model="comInfo.legalName"
              placeholder="请输入法人代表"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="法人身份证" prop="legalId">
            <el-input
              v-model.number="comInfo.legalId"
              placeholder="请输入法人身份证"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="公司地址" prop="comAddr">
            <el-input
              v-model="comInfo.comAddr"
              placeholder="请输入注册地区"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="email" label="企业邮箱">
            {{ comInfo.email }}
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="联系电话" prop="comContact">
            <el-input
              v-model.number="comInfo.comContact"
              placeholder="请输入联系电话"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="传真" prop="fax">
            <el-input
              v-model="comInfo.fax"
              placeholder="请输入传真"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮政编码" prop="comZip">
            <el-input
              v-model.number="comInfo.comZip"
              placeholder="请输入邮政编码"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="注册资金（万元）" prop="registeredCapital">
            <el-input
              v-model="comInfo.registeredCapital"
              placeholder="请输入注册资金"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="营业执照号" prop="businessLicenseId">
            <el-input
              v-model="comInfo.businessLicenseId"
              placeholder="请输入营业执照号"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="组织机构代码" prop="oibCode">
            <el-input
              v-model="comInfo.oibCode"
              placeholder="请输入组织机构代码"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="经营许可证编号" prop="manageLicenseId">
            <el-input
              v-model="comInfo.manageLicenseId"
              placeholder="请输入经营许可证编号"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="税务登记证编号" prop="trCert">
            <el-input
              v-model="comInfo.trCert"
              placeholder="请输入税务登记证编号"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="煤炭存放地点" prop="coalStoreSite">
            <el-input
              v-model="comInfo.coalStoreSite"
              placeholder="请输入煤炭存放地点"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="煤炭数量（吨）" prop="number">
            <el-input
              v-model.number="comInfo.number"
              placeholder="请输入煤炭数量"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="煤炭质量" prop="coalQuality">
            <el-input
              v-model="comInfo.coalQuality"
              placeholder="请输入内容"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="运输方式" prop="coalTransport">
            <el-input
              v-model="comInfo.coalTransport"
              placeholder="请输入内容"
              style="width: 90%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="公司简介" prop="comIntro">
        <el-input
          v-model="comInfo.comIntro"
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>
      <h2>企业资质</h2>
      <hr />
      <el-row>
        <el-col :span="12">
          <el-form-item>
            <el-upload
              class="upload-demo"
              :action="API + '/user/uploadFile?type=BUSINESS_LICENSE_FILE'"
              :headers="auth"
              :limit="1"
              :before-remove="beforeRemove"
              :before-upload="beforeUpload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-exceed="handleExceed"
              :on-error="uploadErrorHandle"
              :on-success="uploadSuccessHandle"
              accept="image/*"
            >
              <el-button size="small" type="primary"
                >营业执照点击上传</el-button
              >
              <div class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <el-upload
              class="upload-demo"
              :action="API + '/user/uploadFile?type=TR_CERT_FILE'"
              :headers="auth"
              :limit="1"
              :before-remove="beforeRemove"
              :before-upload="beforeUpload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-exceed="handleExceed"
              :on-error="uploadErrorHandle"
              :on-success="uploadSuccessHandle"
              accept="image/*"
            >
              <el-button size="small" type="primary"
                >税务登记证点击上传</el-button
              >
              <div class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </el-form-item></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item>
            <el-upload
              class="upload-demo"
              :action="API + '/user/uploadFile?type=OIB_CODE_FILE'"
              :headers="auth"
              :limit="1"
              :before-remove="beforeRemove"
              :before-upload="beforeUpload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-exceed="handleExceed"
              :on-error="uploadErrorHandle"
              :on-success="uploadSuccessHandle"
              accept="image/*"
            >
              <el-button size="small" type="primary"
                >组织机构代码证点击上传</el-button
              >
              <div class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload></el-form-item
          ></el-col
        >
        <el-col :span="12">
          <el-form-item>
            <el-upload
              class="upload-demo"
              :action="API + '/user/uploadFile?type=MANAGE_LICENSE_FILE'"
              :headers="auth"
              :limit="1"
              :before-remove="beforeRemove"
              :before-upload="beforeUpload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-exceed="handleExceed"
              :on-error="uploadErrorHandle"
              :on-success="uploadSuccessHandle"
              accept="image/*"
            >
              <el-button size="small" type="primary"
                >煤炭经营许可证点击上传</el-button
              >
              <div class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </el-form-item></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item>
            <el-upload
              class="upload-demo"
              :action="API + '/user/uploadFile?type=LEGAL_ID_FILE'"
              :headers="auth"
              :limit="1"
              :before-remove="beforeRemove"
              :before-upload="beforeUpload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-exceed="handleExceed"
              :on-error="uploadErrorHandle"
              :on-success="uploadSuccessHandle"
              accept="image/*"
            >
              <el-button size="small" type="primary"
                >法人身份证点击上传</el-button
              >
              <div class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload></el-form-item
          ></el-col
        >
      </el-row>
    </el-form>
    <h2>完善财务信息</h2>
    <hr />
    <el-form
      :label-position="labelPosition"
      :rules="fiRules"
      ref="financeInfo"
      :model="financeInfo"
    >
      <el-form-item label="财务邮箱" prop="email">
        <el-input
          v-model="financeInfo.email"
          placeholder="请输入......"
          style="width: 90%"
        ></el-input>
      </el-form-item>
      <el-form-item label="汇款单位名称" prop="comName">
        <el-input
          v-model="financeInfo.comName"
          placeholder="请输入......"
          style="width: 90%"
        ></el-input>
      </el-form-item>
      <el-form-item label="开户银行" prop="bankName">
        <el-input
          v-model="financeInfo.bankName"
          placeholder="请输入......"
          style="width: 90%"
        ></el-input>
      </el-form-item>
      <el-form-item label="银行账号" prop="bankAcc">
        <el-input
          v-model.number="financeInfo.bankAcc"
          placeholder="请输入......"
          style="width: 90%"
        ></el-input>
      </el-form-item>
      <!-- <el-form-item label="账户余额" prop="blance">
        <el-input v-model.number="form1.blance" placeholder="请输入......" style="width:30%;"></el-input>
      </el-form-item> -->
      <!-- <el-form-item label="报价冻结金额" prop="freeze">
        <el-input v-model.number="form1.freeze" placeholder="请输入......" style="width:30%;"></el-input>
      </el-form-item> -->
      <el-upload
        class="upload-demo"
        :action="API + '/user/uploadFile?type=AO_PERMIT_FILE'"
        :headers="auth"
        :limit="1"
        :before-remove="beforeRemove"
        :before-upload="beforeUpload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-exceed="handleExceed"
        :on-error="uploadErrorHandle"
        :on-success="uploadSuccessHandle"
        accept="image/*"
      >
        <el-button size="small" type="primary">开户许可证证点击上传</el-button>
        <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form>
    <hr />
    <el-form>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getUserInfo, userComplete } from "./api";
import { validateEMail } from "./../../utils/validator.js";
export default {
  data() {
    return {
      API: process.env.VUE_APP_BASE_URL,
      auth: {
        Authorization: `Bearer ${this.$store.state.token}`,
      },
      labelPosition: "right",
      comInfo: {
        comName: "",
        legalName: "",
        nick: "",
        legalId: "",
        comAddr: "",
        comContact: "",
        comZip: "",
        businessLicenseId: "",
        manageLicenseId: "",
        fax: "",
        registeredCapital: "",
        oibCode: "",
        trCert: "",
        coalStoreSite: "",
        coalQuantity: "",
        coalQuality: "",
        coalTransport: "",
        comIntro: "",
        email: "",
        legalIdFile: "",
        businessLicenseFile: "",
        manageLicenseFile: "",
        oibCodeFile: "",
        trCertFile: "",
      },
      comInfoRules: {
        comName: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        legalName: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        legalId: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        comAddr: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        comContact: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        comZip: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        businessLicenseId: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        manageLicenseId: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        registeredCapital: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        oibCode: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        trCert: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        coalStoreSite: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        fax: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        coalQuantity: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        coalQuality: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        coalTransport: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        comIntro: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
      },
      financeInfo: {
        email: '',
        comName: "",
        bankName: "",
        bankAcc: "",
        blance: "",
        freeze: "",
        aoPermitFile: "", //开户许可证文件路径
      },
      fiRules: {
        email: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
          {
            validator: validateEMail,
            message: "邮箱格式不正确",
            trigger: "change",
          },
        ],
        comName: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        bankName: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
        bankAcc: [
          {
            required: true,
            message: "输入不能为空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    
  },
  created(){
    this.getData();
    // const data = JSON.parse(`{"comName":"公司名","legalName":"法人代表","nick":"","legalId":6546416741,"comAddr":"公司地址","comContact":13615996870,"comZip":351168,"businessLicenseId":"73873879","manageLicenseId":"736987639786","fax":"8796896+86","registeredCapital":"8968","oibCode":"34637863","trCert":"7387863","coalStoreSite":"煤炭存放地点","coalQuantity":"","coalQuality":"高高高","coalTransport":"水水水","comIntro":"简介简介简介简介","email":"jiyecafe@gmail.com","legalIdFile":"","businessLicenseFile":"","manageLicenseFile":"","oibCodeFile":"","trCertFile":"","userType":"供应商","number":999,"financeInfo":{"email":"dfgdg@fsdf.cdfb","comName":"汇款单位名称","bankName":"开户银行","bankAcc":6354169419674,"blance":"","freeze":"","aoPermitFile":""}}`);
    // this.comInfo = data;
    // this.financeInfo = data.financeInfo
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    beforeUpload(file) {
      console.log("beforeUpload", file.name);
    },
    uploadErrorHandle(err, file, fileList) {
      const resp = JSON.parse(err.message);
      this.$message({
        message: `文件上传失败`,
        type: "error",
      });
      // console.log("on-error", fileList);
    },
    uploadSuccessHandle(res, file, fileList) {
      // console.log(res, file, fileList)
      file.name = res.data.path;
      this.$message({
        message: "上传成功",
        type: "success",
      });
    },
    submitForm() {
      this.$refs["comInfo"].validate((valid) => {
        if (valid) {
          console.log("数据通过验证1");
          this.$refs["financeInfo"].validate((valid) => {
            if (valid) {
              console.log("数据通过验证2");
              this.postData()
            } else {
              this.$message({
                message: "数据填写不完整",
                type: "warning",
              });
              return false;
            }
          });
        } else {
          this.$message({
            message: "数据填写不完整",
            type: "warning",
          });
          return false;
        }
      });
    },
    resetForm() {
      this.$refs["form"].resetFields();
      this.$refs["financeInfo"].resetFields();
    },
    postData: function () {
      const data = JSON.parse(JSON.stringify(this.comInfo));
      data.financeInfo = this.financeInfo;
      console.log(JSON.stringify(data))
      userComplete(data)
        .then((res) => {
          console.log(res);
          this.$message({
            message:"提交成功",
            type: "success"
          })
        })
        .catch((err) => {
          console.log(err);
          if(err.error)
          {
            this.$message({
              message: err.error,
              type: "error"
            })
          }
        });
    },
    // 获取用户数据（TODO: 是否获取公司等数据？）
    getData: function () {
      getUserInfo()
        .then((resp) => {
          console.log(resp);
          this.comInfo.email = resp.data.email;
          this.comInfo.userType = resp.data.userType;
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
