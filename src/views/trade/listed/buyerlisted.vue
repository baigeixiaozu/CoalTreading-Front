<template>
  <!--
  买方挂牌
  -->
  <div class="baseData">
      <el-form
        :label-position="labelPosition"
        :model="buylistForm"
        status-icon
        :rules="rules"
        ref="buylistForm"
        label-width="100px"
        class="demo-buylistForm"
      >
      <el-row>
        <el-col :span="8">
          <el-form-item label="申请单位" prop="supplyQuantity">
            <el-input
              v-model.number="buylistForm.supplyQuantity"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单据编号" prop="calorificValue">
          <el-input
            v-model.number="buylistForm.calorificValue"
          ></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="申请人" prop="applicant">
            <el-input
              v-model="buylistForm.applicant"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="发资人" prop="signer">
            <el-input
              v-model="buylistForm.signer"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="reqDate" label="申请日期">
            <el-input v-model="buylistForm.reqDate"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="deliveryStartTime" label="交货日期(起)">
            <el-input v-model="buylistForm.deliveryStartTime"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="交货日期(止)" prop="deliveryEndTime">
            <el-input
              v-model="buylistForm.deliveryEndTime">
              </el-input>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item prop="coalType" label="煤种">
            <el-input v-model="buylistForm.coalType"></el-input>
          </el-form-item>
        </el-col>

      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="buyQuantity" label="采购数量">
            <el-input v-model="buylistForm.buyQuantity"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="transportMode" label="运输方式">
            <el-input v-model="buylistForm.transportMode"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="deliveryLocation" label="交货地点">
            <el-input v-model="buylistForm.deliveryLocation"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="settlementMethod" label="结算方式">
            <el-input v-model="buylistForm.settlementMethod"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="acceptanceMethod" label="验收方式">
            <el-input v-model="buylistForm.acceptanceMethod"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="paymentMethod" label="结算付款方式">
            <el-input v-model="buylistForm.paymentMethod"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="deposit1" label="报价保证金缴纳">
            <el-input v-model="buylistForm.deposit1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="deposit1" label="履约保证金缴纳">
            <el-input v-model="buylistForm.deposit1"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      </el-form>
      </div>
      <div class="coalQuality">
        <el-form
          :label-position="labelPosition"
          :model="coalForm"
          status-icon
          :rules="rules"
          ref="coalForm"
          label-width="100px"
          class="demo-coalForm"
        >
        <el-row>
          <el-col :span="8">
            <el-form-item label="收到基低位发热量" prop="lowHeat">
              <el-input
                v-model="coalForm.lowHeat"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="sdjql" label="收到基全硫">
              <el-input v-model="coalForm.sdjql"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="qsf" label="全水分">
              <el-input v-model="coalForm.qsf"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="收到基灰分" prop="sdjhf">
              <el-input
                v-model="coalForm.sdjhf"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="sdjhff1" label="收到基挥发分起">
              <el-input v-model="coalForm.sdjhff1"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="sdjhff2" label="收到基挥发分止">
              <el-input v-model="coalForm.sdjhff2"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="空干基水分" prop="kgjsf">
              <el-input
                v-model="coalForm.kgjsf"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="kgjhff1" label="空干基挥发分起">
              <el-input v-model="coalForm.kgjhff1"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="kgjhff2" label="空干基挥发分止">
              <el-input v-model="coalForm.kgjhff2"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="空干基全硫" prop="kgjql">
              <el-input
                v-model="coalForm.kgjql"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="highHeat" label="干基高位发热量">
              <el-input v-model="coalForm.highHeat"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="gjql" label="干基全硫">
              <el-input v-model="coalForm.gjql"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="干燥无灰基挥发分起" prop="gzwhjhff1">
              <el-input
                v-model="coalForm.gzwhjhff1"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="gzwhjhff2" label="干燥无灰基挥发分止">
              <el-input v-model="coalForm.gzwhjhff2"></el-input>
            </el-form-item>
          </el-col>
     
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="粒度" prop="granularity">
              <el-input
                v-model="coalForm.granularity"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="hrd" label="灰熔点">
              <el-input v-model="coalForm.hrd"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="hskmxs" label="哈式可磨细数">
              <el-input v-model="coalForm.hskmxs"></el-input>
            </el-form-item>
          </el-col>
          
        </el-row>
        <el-form-item prop="remark" label="备注">
          <el-input v-model="coalForm.remark"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        labelPosition: 'top',
        salelistForm: {
             supplyQuantity:'',//供应量 number
             calorificValue:'',//热值 number
             unitPrice:'',//原煤单价 number
             ts:'',//全硫 number
             location:'',//产地
             transportPrice:'',//运费单价 number
             vc:'', //挥发分 number
             sendLocal:'',//发站 string
             kgjhf:'' ,// 空干基灰分 number
             ms:'',//全水分  number
          },
          rules:{
            supplyQuantity:'',//供应量 number
              calorificValue:'',//热值 number
              unitPrice:'',//原煤单价 number
              ts:'',//全硫 number
              location:'',//产地
              transportPrice:'',//运费单价 number
             vc:'', //挥发分 number
              sendLocal:'',//发站 string
            kgjhf:'' ,// 空干基灰分 number
             ms:'',//全水分  number
             supplyQuantity: [{
                   required: true,
                   message: '请输入用户名',
                   trigger: 'blur'
                 },
                  { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
               ],//供应量 number
               calorificValue: [{
                   required: true,
                   message: '请输入用户名',
                   trigger: 'blur'
                 },
                  { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
               ],//热值 number
               unitPrice: [{
                   required: true,
                   message: '请输入用户名',
                   trigger: 'blur'
                 },
                  { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
               ],//原煤单价 number
               ts: [{
                   required: true,
                   message: '请输入用户名',
                   trigger: 'blur'
                 },
                  { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
               ],//全硫 number
               location: [{
                   required: true,
                   message: '请输入用户名',
                   trigger: 'blur'
                 },
                  { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
               ],//产地
               transportPrice: [{
                   required: true,
                   message: '请输入用户名',
                   trigger: 'blur'
                 },
                  { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
               ],//运费单价 number
              vc: [{
                   required: true,
                   message: '请输入用户名',
                   trigger: 'blur'
                 },
                  { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
               ], //挥发分 number
               sendLocal: [{
                   required: true,
                   message: '请输入用户名',
                   trigger: 'blur'
                 },
                  { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
               ],//发站 string
             kgjhf: [{
                   required: true,
                   message: '请输入用户名',
                   trigger: 'blur'
                 },
                  { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
               ],// 空干基灰分 number
              ms: [{
                   required: true,
                   message: '请输入用户名',
                   trigger: 'blur'
                 },
                  { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
               ],//全水分  number
          }
      }
    },
    mounted() {

    },
    methods:{

    }
  }
</script>

<style>
</style>
