<template>
  <!-- 支付保证金界面 -->
  <el-form
    :label-position="labelPosition"
    :model="margin"
    status-icon
    :rules="rules"
    ref="margin"
    label-width="160px"
    class="demo-margin"
  >
    <h2>基本信息</h2>
    <el-row>
      <el-col :span="12">
        <el-form-item prop="docnumber" label="单据编号">
          <el-input
            v-model.number="margin.docnumber"
            style="width: 70%"
            :disabled="true"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="com_name" label="申请单位">
          <el-input
            v-model.number="margin.com_name"
            style="width: 70%"
            :disabled="true"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <span>报价保证金收取标准为<b style="color: #ca1302">10</b>元/吨</span>

    <hr />
    <h2>保证金账户信息</h2>
    <el-row>
      <el-col :span="12">
        <el-form-item prop="balance" label="账户金额：">
          <el-input
            v-model.number="margin.balance"
            style="width: 50%"
            :disabled="true"
          ></el-input
          >元
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="unfreeze" label="未冻结余额：">
          <el-input
            v-model.number="margin.unfreeze"
            style="width: 50%"
            :disabled="true"
          ></el-input
          >元
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item prop="freeze" label="报价冻结金额：">
          <el-input
            v-model.number="margin.freeze"
            style="width: 50%"
            :disabled="true"
          ></el-input
          >&nbsp;元
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="performance" label="履约冻结金额：">
          <el-input
            v-model.number="margin.performance"
            style="width: 50%"
            :disabled="true"
          ></el-input
          >元
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item prop="number" label="投标数量：">
          <el-input v-model.number="margin.number" style="width: 40%"></el-input
          >(万吨)
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="margin" label="缴纳报价保证金金额："
          >
          <b style="color: #ca1302"
            >{{ totalMargin }} </b
          >元
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <el-button type="primary" @click="submit()" :disabled="allowSubmit">确认缴纳</el-button>
      <el-button @click="resetForm('margin')">返回</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { postMarginInfo, getMarginInfo, getZPDetail } from "./api";
export default {
  data() {
    return {
      labelPosition: "right",
      type: null,
      id: {
        gp: null,
        zp: null,
      },
      margin: {
        freeze: "", //报价冻结金额
        balance: "", //账户金额
        com_name: "", //申请单位
        docnumber: "", //单据编号
        unfreeze: "", //未冻结余额
        performance: "", //履约金额
        number: 0, //投标数量
        margin: "",
        price: 10,
      },
      rules: {
        number: {
          type: "number",
          required: true,
          message: "不能为空，且只能为数字",
          trigger: "blur",
        },
      },
    };
  },
  computed:{
    totalMargin(){
      return this.margin.number * this.margin.price * 10000;
    },
    allowSubmit(){
      const putCount = (this.margin.number * this.margin.price * 10000);
      return putCount <= 0 || this.margin.unfreeze <= putCount;
    }
  },
  created() {
    console.log("margin created");
    const q = this.$route.query;
    if (q.zpid) {
      // 摘牌保证金
      this.type = "zp";
      this.id.zp = q.zpid;
    } else if (q.gpid) {
      // 挂牌保证金
      this.type = "gp";
      this.id.gp = q.gpid;
    }
    this.getdata();
  },
  methods: {
    submit() {
      //post 提交信息
      this.postdata(this.id[this.type]);
    },
    getdata: function () {
      const param = {};
      param[this.type + "id"] = this.id[this.type];
      getMarginInfo(param)
        .then((res) => {
          if (res.data.requestInfo === null) {
            this.$message({
              message: `请求的${
                this.type === "zp" ? "摘牌" : "挂牌"
              }信息不存在`,
            });
            return;
          }
          (this.margin.com_name = res.data.financeInfo.comName),
            (this.margin.freeze = res.data.financeInfo.freeze),
            (this.margin.balance = res.data.financeInfo.balance),
            (this.margin.unfreeze =
              res.data.financeInfo.balance - res.data.financeInfo.freeze),
            (this.margin.performance = 0);
          this.margin.docnumber = res.data.requestInfo.requestNum;
          //docnumber:
        })
        .catch((err) => {
          console.log(err);
        });
    },
    postdata(id) {
      postMarginInfo(this.type, id, this.totalMargin)
        .then((res) => {
          console.log(res);
          this.$message({
            message: "提交成功",
            type: "success",
          });
        })
        .catch((err) => {
          console.log(err);
          this.$message({
            message: err.data,
            type: "error",
          });
        });
    },
  },
};
</script>

<style>
</style>
