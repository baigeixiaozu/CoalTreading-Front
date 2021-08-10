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
              class="input-item"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="热值(Kcal/kg)>" prop="calorificValue">
            <el-input
              v-model.number="salelistForm.calorificValue"
              class="input-item"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="原煤单价(元/吨)" prop="unitPrice">
            <el-input
              v-model.number="salelistForm.unitPrice"
              class="input-item"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="transportPrice" label="运费单价(元/吨)">
            <el-input
              v-model.number="salelistForm.transportPrice"
              class="input-item"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="全硫(%)<" prop="ts">
            <el-input
              v-model.number="salelistForm.ts"
              class="input-item"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="location" label="产地">
            <el-input
              v-model="salelistForm.location"
              class="input-item"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="挥发分(%)<" prop="vc">
            <el-input v-model.number="salelistForm.vc" class="input-item">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item prop="sendLocal" label="发站(发货港口)">
            <el-input
              v-model="salelistForm.sendLocal"
              class="input-item"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="kgjhf" label="空干基灰分(%)<">
            <el-input
              v-model.number="salelistForm.kgjhf"
              class="input-item"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="ms" label="全水分(%)<">
            <el-input
              v-model.number="salelistForm.ms"
              class="input-item"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="Save('salelistForm')">保存草稿</el-button>
        <el-button @click="resetForm('salelistForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { requestPublish, requestEdit, loadDetail } from "../api";
export default {
  data() {
    return {
      labelPosition: "right",
      isNew: true,
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
    // console.log(this.$route.query)
  },
  created() {
    const q = this.$route.query;
    if (q.id) {
      // 获取详细信息
      this.isNew = false;
      this.loadDetail(q.id);
    }
  },
  methods: {
    Save(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //保存草稿
          const q = this.$route.query;
          if (q.id) {
            // 编辑
            this.editData(q.id, false);
          } else {
            // 新增
            this.publishData(false);
          }
        } else {
          this.$message({
            message: "请检查数据合法性",
            type: "warning",
          });
        }
      });
    },
    submitForm(formName) {
      const q = this.$route.query;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //提交
          if (q.id) {
            // 编辑
            this.editData(q.id, true);
          } else {
            // 新增
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
    // 新增
    publishData(publish = false) {
      requestPublish({
        publish: publish,
        salePubData: this.salelistForm,
      })
        .then((res) => {
          console.log(res);
          this.$message({
            message: "提交成功",
            type: "success",
          });
          if (this.isNew) {
            this.$router.push("/trade/listed/salelisted?id=" + res.data.reqId);
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.error) {
            this.$message({
              message: err.error,
              type: "error",
            });
          }
        });
    },
    //编辑
    editData(id, publish = false) {
      requestEdit({
        id: id,
        publish: publish,
        salePubData: this.salelistForm,
      })
        .then((res) => {
          this.$message({
            message: "提交成功",
            type: "success",
          });
          if (this.isNew) {
            this.$router.push("/trade/listed/salelisted?id=" + res.data.reqId);
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.error) {
            this.$message({
              message: err.error,
              type: "error",
            });
          }
        });
    },
    // 加载
    loadDetail(id) {
      loadDetail(id)
        .then((res) => {
          this.salelistForm = res.data.detail;
        })
        .catch((err) => {
          console.log(err);
          if (err.error) {
            this.$message({
              message: err.error,
              type: "error",
            });
            this.$router.back();
          }
        });
    },
  },
};
</script>

<style>
.input-item {
  width: 40%;
  float: left;
}
</style>
