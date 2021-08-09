<template>
  <!--
  卖方挂牌
  -->
  <div class="reg1">
    <el-form
      :label-position="labelPosition"
      :model="salelistForm"
      status-icon
      :rules="rules"
      ref="salelistForm"
      label-width="150px"
      class="demo-salelistForm"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="供应量(万吨)" prop="supplyQuantity">
            <el-input
              v-model.number="salelistForm.supplyQuantity"
              style="width: 25%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="热值(Kcal/kg)>" prop="calorificValue">
            <el-input
              v-model.number="salelistForm.calorificValue"
              style="width: 25%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="原煤单价(元/吨)" prop="unitPrice">
            <el-input
              v-model.number="salelistForm.unitPrice"
              style="width: 25%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="transportPrice" label="运费单价(元/吨)">
            <el-input
              v-model.number="salelistForm.transportPrice"
              style="width: 25%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="全硫(%)<" prop="ts">
            <el-input
              v-model.number="salelistForm.ts"
              style="width: 25%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="location" label="产地">
            <el-input
              v-model="salelistForm.location"
              style="width: 25%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="挥发分(%)<" prop="vc">
            <el-input v-model.number="salelistForm.vc" style="width: 25%">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item prop="sendLocal" label="发站(发货港口)">
            <el-input
              v-model="salelistForm.sendLocal"
              style="width: 25%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="kgjhf" label="空干基灰分(%)<">
            <el-input
              v-model.number="salelistForm.kgjhf"
              style="width: 25%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="ms" label="全水分(%)<">
            <el-input
              v-model.number="salelistForm.ms"
              style="width: 25%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="Save('ruleForm')">保存草稿</el-button>
        <el-button @click="resetForm('salelistForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {requestPublish, requestEdit} from '../api'
export default {
  data() {
    return {
      labelPosition: "right",
      publish: false,
      salelistForm: {
        supplyQuantity: "", //供应量 number
        calorificValue: "", //热值 number
        unitPrice: "", //原煤单价 number
        ts: "", //全硫 number
        location: "", //产地
        transportPrice: "", //运费单价 number
        vc: "", //挥发分 number
        sendLocal: "", //发站 string
        kgjhf: "", // 空干基灰分 number
        ms: "", //全水分  number
      },
      rules: {
        supplyQuantity: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        calorificValue: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        unitPrice: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        ts: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        location: [
          {
            required: true,
            message: "不能为空",
            trigger: "blur",
          },
        ],
        transportPrice: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        vc: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        sendLocal: [
          {
            required: true,
            message: "不能为空",
            trigger: "blur",
          },
        ], //发站 string
        kgjhf: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ], // 空干基灰分 number
        ms: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ], //全水分  number
      },
    };
  },
  mounted() {
    console.log(this.$route.query)
  },
  methods: {
    Save(formName) {
      //保存草稿
      const q = this.$route.query;
      if(q.id){
        this.editData(q.id, false);
      }else{
        this.publishData(false);
      }
    },
    submitForm(formName) {
      const q = this.$route.query;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //提交
          if(q.id){
            this.editData(q.id, true);
          }else{
            this.publishData(true);
          }
        } else {
          this.$message({
            message: "数据格式有误，请检查！",
            type: "warning",
          });
          return false;
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    publishData(publish = false) {
      requestPublish({
        publish: publish,
        salePubData: this.salelistForm
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
    editData(id, publish = false) {
      requestEdit({
        id: id,
        publish: publish,
        salePubData: this.salelistForm
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
  },
};
</script>

<style>
</style>
