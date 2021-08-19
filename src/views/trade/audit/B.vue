<template>
  <!--
    卖方挂牌/买方摘牌
    调用 --- /trade/B/[zp|gp]?id=[req_id]
  -->
  <div class="">
    <el-form
      :label-position="labelPosition"
      :model="salelistForm"
      status-icon
      :rules="rules"
      ref="salelistForm"
      label-width="150px"
      class="demo-salelistForm"
      :disabled="isFormDisabled"
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
    </el-form>
    <!-- 审核用户 -->
    <div v-if="this.$store.state.role === 'TRADE_AUDITOR'">
      审核用户可视区
    </div>
  </div>
</template>

<script>
import {
  requestPublish,
  requestEdit,
  loadMyReqDetail,
  getPublicReqDetail,
  doDelist,
  getZPDetail,
  getZPDetail2,
} from "../api";
export default {
  props:{
    isFormDisabled: Boolean,
    salelistForm: Object
  },
  data() {
    return {
      labelPosition: "right",
      mode: this.$route.params.mode,
      publish: false,
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
      gpInfo: {
        id: null,
        status: "0",
      },
      zpInfo: {
        id: null,
        status: "0",
      },
    };
  },
  mounted() {
    // console.log(this.$route.query)
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const mode = this.$route.params.mode;
      const q = this.$route.query;
      this.gpInfo.id = q.id;
      this.zpInfo.id = q.zid;
      if (mode === "zp") {
        this.isFormDisabled = true;
        // 摘牌
        if (q.id) {
          // 第一次摘牌操作
          this.loadZPDetail1(q.id);
        } else if (q.zid) {
          // 摘牌后续
          this.loadZPDetail2(q.zid);
        }
      } else {
        if (q.id) {
          // 挂牌
          this.loadGPDetail(q.id);
        }
      }
    },
    Save() {
      this.$refs["salelistForm"].validate((valid) => {
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
    submitForm() {
      const q = this.$route.query;
      this.$refs["salelistForm"].validate((valid) => {
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
    resetForm() {
      this.$refs["salelistForm"].resetFields();
    },
    // 新增挂牌
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
          this.$router.push(`${this.$route.path}?id=${res.data.reqId}`);
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
    // 编辑挂牌
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
    // 加载挂牌信息
    loadGPDetail(id) {
      loadMyReqDetail(id)
        .then((res) => {
          this.salelistForm = res.data.detail;
          this.gpInfo.id = res.data.id;
          this.gpInfo.status = res.data.status;
          this.isFormDisabled =
            res.data.status !== "1" && res.data.status !== "7";
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

    // 摘牌
    zpAction() {
      this.doDelist(this.gpInfo.id);
    },
    loadZPDetail1(id) {
      if (!this.$store.state.isLogin) {
        // 未登录
        getPublicReqDetail(id).then((res) => {
          console.log(res);
          this.salelistForm = res.data.detail;
        });
      } else {
        // 已登录
        getZPDetail2(this.gpInfo.id).then((res) => {
          this.salelistForm = res.data.reqInfo.detail;
          const delistinfo = res.data.delistInfo;
          if (delistinfo) this.zpInfo.status = delistinfo.status;
        });
      }
    },
    loadZPDetail2(zid) {
      getZPDetail(zid).then((res) => {
        console.log(res);
        this.salelistForm = res.data.reqInfo.detail;
        const delistinfo = res.data.delistInfo;
        this.zpInfo.status = delistinfo.status;
      });
    },
    doDelist(id) {
      doDelist(id).then((res) => {
        console.log(res);
        this.$message({
          message: "摘牌成功",
          type: "success",
        });
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
