<template>
<!-- 支付保证金界面 -->
<el-form
        :label-position="labelPosition"
        :model="margin"
        status-icon
        :rules="rules"
        ref="margin"
        label-width="150px"
        class="demo-margin"
      >
      <h2>基本信息</h2>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="docnumber" label="单据编号">
            <el-input v-model.number="margin.docnumber"
            style="width:25%"
            :disabled="true"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="com_name" label="申请单位">
            <el-input v-model.number="margin.com_name"
            style="width:25%"
            :disabled="true"
            ></el-input>
          </el-form-item>
        </el-col>


      </el-row>
      <span>报价保证金收取标准为<b style="color: #ca1302">10</b>元/吨</span>

      <hr /><h2>保证金账户信息</h2>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="balance" label="">
           账户金额： <el-input v-model.number="margin.balance"
            style="width:25%"
            :disabled="true"
            ></el-input>元
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="unfreeze" label="">
            未冻结余额<el-input v-model.number="margin.unfreeze"
            style="width:25%"
            :disabled="true"
            ></el-input>元
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="freeze" label="">
            报价冻结金额<el-input v-model.number="margin.freeze"
            style="width:25%"
            :disabled="true"
            ></el-input>元
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="performance" label="">
            履约冻结金额<el-input v-model.number="margin.performance"
            style="width:25%"
            :disabled="true"
            ></el-input>元
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="number" label="">
           投标数量 <el-input v-model.number="margin.number"
            style="width:25%"

            ></el-input>(万吨)
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="margin" label="">缴纳报价保证金金额  <b style="color: #ca1302">{{this.margin.number*100000}}  </b>元
          </el-form-item>
        </el-col>
      </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm('margin')">确认缴纳</el-button>

          <el-button @click="resetForm('margin')">返回</el-button>
        </el-form-item>
      </el-form>
</template>

<script>
  import {
    postMargininfo,
    getMargininfo
  }from './api';
  export default{
    data(){
      return{
        labelPosition: "right",

        margin: {
          freeze:'',//报价冻结金额
          balance:'',//账户金额
          com_name:'',//申请单位
          docnumber:'',//单据编号
          unfreeze:'',//未冻结余额
          performance:'',//履约金额
          number:0,//投标数量
          margin:'',
        },
        rules:{
          number:{
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        }
      }
    },
    mounted() {

      this.getdata();

    },
    methods:{
      submit(FormName){
        //post 提交信息
        //this.margin.margin=this.margin.number*100000
      },
      getdata: function() {

        getMargininfo().then(repos => {
           this.margin.com_name=repos.data.comName,
          this.margin.freeze=repos.data.freeze
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
