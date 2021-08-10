<template>
  <!--
  买方摘牌
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
              style="width:25%"
              :disabled="true"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="热值(Kcal/kg)>" prop="calorificValue">
          <el-input
            v-model.number="salelistForm.calorificValue"
            style="width:25%"
            :disabled="true"
          ></el-input>
        </el-form-item>
        </el-col>

      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="原煤单价(元/吨)" prop="unitPrice">
            <el-input
              v-model.number="salelistForm.unitPrice"
              style="width:25%"
              :disabled="true"
            ></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item prop="transportPrice" label="运费单价(元/吨)">
            <el-input v-model.number="salelistForm.transportPrice"
            style="width:25%"
            :disabled="true"
           ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="全硫(%)<" prop="ts">
            <el-input
              v-model.number="salelistForm.ts"
              style="width:25%"
              :disabled="true"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="location" label="产地">
            <el-input v-model="salelistForm.location"
            style="width:25%"
            :disabled="true"></el-input>
          </el-form-item>
        </el-col>

      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="挥发分(%)<" prop="vc">
            <el-input
              v-model.number="salelistForm.vc"
              style="width:25%"
              :disabled="true">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item prop="sendLocal" label="发站(发货港口)">
            <el-input v-model="salelistForm.sendLocal"
            style="width:25%"
            :disabled="true"></el-input>
          </el-form-item>
        </el-col>

      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="kgjhf" label="空干基灰分(%)<">
            <el-input v-model.number="salelistForm.kgjhf"
            style="width:25%"
            :disabled="true"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="ms" label="全水分(%)<">
            <el-input v-model.number="salelistForm.ms"
            style="width:25%"
            :disabled="true"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm('salelistForm')">摘牌</el-button>
         
          <el-button @click="resetForm('salelistForm')">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
import {getPublicReqDetail, doDelist} from '../api'
export default {
  data() {
    return {
      labelPosition: "right",
      reqId: null,
      form: {
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
        publish: "",
      },
    };
  },
  mounted() {},
  created(){
    const q = this.$route.query;
    if(!q.id){
      this.$message({
        message: "参数为空",
        type: "warning"
      })
      // this.$router.back();
      return;
    }
    this.reqId = q.id;
    this.loadData(q.id);
  },
  methods: {
    submitForm() {
      this.doDelist(this.reqId);
    },

    loadData(id){
      getPublicReqDetail(id).then(res=>{
        console.log(res)
        this.form = res.data.detail;
      })
    },
    doDelist(id){
      doDelist(id).then(res=>{
        console.log(res)
        this.$message({
          message: "摘牌成功",
          type: "success"
        })
      })
    }
  },
};
</script>

<style>
</style>
