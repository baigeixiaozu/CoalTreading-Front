<template>
  <!-- 资金预存界面-->
<div>
<el-form
        :label-position="labelPosition"
        :model="predeposit"
        status-icon
        :rules="rules"
        ref="predeposit"
        label-width="150px"
        class="demo-predeposit"
      >
      <div>
      <hr /><h2>保证金账户信息</h2>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="balance" label="">
          <b> 账户金额：</b> <b style="color: #ca1302">{{this.predeposit.balance}}   元</b>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="unfreeze" label="">
           <b> 未冻结余额： </b> <b style="color: #ca1302">{{this.predeposit.unfreeze}}  元</b>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="freeze" label="">
           <b> 报价冻结金额：</b> <b style="color: #ca1302">{{this.predeposit.freeze}}   元</b>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="performance" label="">
           <b> 履约冻结金额：</b> <b style="color: #ca1302">{{this.predeposit.performance}}   元</b>

          </el-form-item>
        </el-col>
      </el-row>
       <hr /><h2>收款单信息</h2><hr />
       </div>
       <div class="info">
      <el-form-item prop="comname" label="汇款单位名称:">
        <el-input v-model="predeposit.comname"

        :disabled="true"
        ></el-input>
      </el-form-item>
      <el-form-item prop="bankname" label="开户银行名称:">
        <el-input v-model="predeposit.bankname"

        :disabled="true"
        ></el-input>
      </el-form-item>
      <el-form-item prop="bankid" label="银行账号:">
        <el-input v-model="predeposit.bankid"

        :disabled="true"
        ></el-input>
      </el-form-item>

      <el-form-item prop="money" label="汇款金额:">
        <el-input v-model.number="predeposit.money"
        style="width: 95%"
        ></el-input>元
      </el-form-item>
      <el-form-item prop="time" label="汇款时间:">
        <el-input v-model="predeposit.time"

        :disabled="true"
        ></el-input>
      </el-form-item>
      <el-form-item prop="file" label="汇款凭证:">
        <el-input v-model="predeposit.file"
        type="file"
      
        ></el-input>
      </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('predeposit')">确认</el-button>

          <el-button @click="resetForm('predeposit')">返回</el-button>
        </el-form-item>
        </div>
      </el-form>
      </div>
</template>

<script>
  import{
    postPredepositinfo,
    getPredepositinfo,
  }from './api'
  export default{
    data(){
      return{
        labelPosition: "right",
        predeposit: {
          freeze:'',//报价冻结金额
          balance:'',//账户金额
          unfreeze:'',//未冻结余额
          performance:'',//履约金额
          comname:'',//汇款单位名称
          bankname:'',//开户银行名称
          bankid:'',//银行账号
          money:'',//汇款金额
          time:'',//汇款时间
          file:'',//凭证
        },
        rules:{
          money:{
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        }
      }
    },
    mounted() {

      this.getdata()
      //获取时间
      var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
      this.predeposit.time= year + seperator1 + month + seperator1 + strDate;
    },
    methods:{
      submit(FormName){
        //post 提交信息

      },
      getdata: function() {
        getPredepositinfo().then(repos => {
          console.log(repos.data[0])
           this.predeposit.comname=repos.data[0].comName,
          this.predeposit.freeze=repos.data[0].freeze,
          this.predeposit.balance=repos.data[0].balance,
          this.predeposit.unfreeze=repos.data[0].balance-repos.data[0].freeze,
          this.predeposit.performance=0,
          this.predeposit.bankname=repos.data[0].bankName,
          this.predeposit.bankid=repos.data[0].bankAcc


          })
          .catch(function(err) {
            console.log(err);
          });
      }

    }
  }
</script>

<style>
.info{
  width: 500px;

  margin:auto;

}
</style>
