<template>
  <!-- 资金预存界面-->

<el-form
        :label-position="labelPosition"
        :model="predeposit"
        status-icon
        :rules="rules"
        ref="predeposit"
        label-width="150px"
        class="demo-predeposit"
      >
      <span>报价保证金收取标准为<b style="color: #ca1302">10</b>元/吨</span>

      <hr /><h2>保证金账户信息</h2>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="balance" label="">
           账户金额： <b style="color: #ca1302">{{this.predeposit.balance}}   元</b>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="unfreeze" label="">
            未冻结余额：  <b style="color: #ca1302">{{this.predeposit.unfreeze}}  元</b>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="freeze" label="">
            报价冻结金额： <b style="color: #ca1302">{{this.predeposit.freeze}}   元</b>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="performance" label="">
            履约冻结金额： <b style="color: #ca1302">{{this.predeposit.performance}}   元</b>

          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item prop="comname" label="汇款单位名称:">
        <el-input v-model.number="predeposit.comname"
        style="width:25%"
        :disabled="true"
        ></el-input>
      </el-form-item>
      <el-form-item prop="bankname" label="开户银行名称:">
        <el-input v-model.number="predeposit.bankname"
        style="width:25%"
        :disabled="true"
        ></el-input>
      </el-form-item>
      <el-form-item prop="bankid" label="银行账号:">
        <el-input v-model.number="predeposit.bankid"
        style="width:25%"
        :disabled="true"
        ></el-input>
      </el-form-item>
      <h2>收款单信息</h2>
      <el-form-item prop="money" label="汇款金额:">
        <el-input v-model.number="predeposit.money"
        style="width:25%"
        ></el-input>元
      </el-form-item>
      <el-form-item prop="time" label="汇款时间:">
        <el-input v-model.number="predeposit.time"
        style="width:25%"
        :disabled="true"
        ></el-input>
      </el-form-item>
      <el-form-item prop="file" label="汇款凭证:">
        <el-input v-model.number="predeposit.file"
        style="width:25%"
        :disabled="true"
        ></el-input>
      </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('margin')">确认</el-button>

          <el-button @click="resetForm('margin')">返回</el-button>
        </el-form-item>
      </el-form>
</template>

<script>
  export default{
    data(){
      return{
        labelPosition: "right",

        margin: {
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
    methods:{
      submit(FormName){
        //post 提交信息
        
      },
      getdata(){
        //获取信息

      }

    }
  }
</script>

<style>
</style>
