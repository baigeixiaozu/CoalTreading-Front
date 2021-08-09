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
        label-width="120px"
        class="demo-salelistForm"
      >
      <el-row>
        <el-col :span="8">
          <el-form-item label="供应量" prop="supplyQuantity">
            <el-input
              v-model.number="salelistForm.supplyQuantity" style="width:25%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="热值" prop="calorificValue">
          <el-input
            v-model.number="salelistForm.calorificValue" style="width:25%"
          ></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="原煤单价" prop="unitPrice">
            <el-input
              v-model="salelistForm.unitPrice" style="width:25%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="全硫(%)" prop="ts">
            <el-input
              v-model="salelistForm.ts" style="width:25%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="location" label="产地">
            <el-input v-model="salelistForm.location" style="width:25%"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="transportPrice" label="运费单价">
            <el-input v-model="salelistForm.transportPrice" style="width:25%"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="挥发分(%)" prop="vc">
            <el-input
              v-model="salelistForm.vc" style="width:25%">
              </el-input>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item prop="sendLocal" label="发站(发货港口)">
            <el-input v-model="salelistForm.sendLocal" style="width:25%"></el-input>
          </el-form-item>
        </el-col>

      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="kgjhf" label="空干基灰分(%)">
            <el-input v-model="salelistForm.kgjhf" style="width:25%"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="ms" label="全水分(%)">
            <el-input v-model="salelistForm.ms" style="width:25%"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">保存草稿</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        labelPosition: 'right',
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

             supplyQuantity: [{
                   required: true,
                   message: '不能为空',
                   trigger: 'blur'
                 },
               ],
               calorificValue: [{
                   required: true,
                   message: '不能为空',
                   trigger: 'blur'
                 },
               ],
               unitPrice: [{
                   required: true,
                   message: '不能为空',
                   trigger: 'blur'
                 },
               ],
               ts: [{
                   required: true,
                   message: '不能为空',
                   trigger: 'blur'
                 },
               ],
               location:[{
                   required: true,
                   message: '不能为空',
                   trigger: 'blur'
                 },
               ],
               transportPrice: [{
                   required: true,
                   message: '不能为空',
                   trigger: 'blur'
                 },
               ],
              vc: [{
                   required: true,
                   message: '不能为空',
                   trigger: 'blur'
                 },
               ],
               sendLocal:  [{
                   required: true,
                   message: '不能为空',
                   trigger: 'blur'
                 },
               ],//发站 string
             kgjhf: [{
                   required: true,
                   message: '不能为空',
                   trigger: 'blur'
                 },
               ],// 空干基灰分 number
              ms: [{
                   required: true,
                   message: '不能为空',
                   trigger: 'blur'
                 },
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
