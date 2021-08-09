<template>
  <!-- 卖方摘牌 -->
  <div class="baseData">
    <el-form
      :label-position="labelPosition"
      :model="buyPubData"
      status-icon
      ref="buyPubData"
      label-width="150px"
      class="demo-buyPubData"
    >
      <el-row>
        <el-col :span="8">
          <el-form-item label="申请单位" prop="supplyQuantity">
            <el-input
              v-model.number="buyPubData.buylistForm.supplyQuantity"
              style="width: 20%"
              :disabled="true"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单据编号" prop="calorificValue">
            <el-input
              v-model.number="buyPubData.buylistForm.calorificValue"
              style="width: 20%"
              :disabled="true"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="申请人" prop="applicant">
            <el-input
              v-model="buyPubData.buylistForm.applicant"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="发资人" prop="signer">
            <el-input
              v-model="buyPubData.buylistForm.signer"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="reqDate" label="申请日期">
            <el-input
              v-model="buyPubData.buylistForm.reqDate"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="deliveryStartTime" label="交货日期">
            <el-date-picker
              v-model="buyPubData.buylistForm.deliveryStartTime"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
            至
            <el-date-picker
              v-model="buyPubData.buylistForm.deliveryEndTime"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item prop="acceptanceMethod" label="验收方式">
            <el-select
              v-model="buyPubData.buylistForm.acceptanceMethod"
              placeholder="请选择..."
              style="width: 20%"
            >
              <el-option label="到厂验收" value="到厂验收"></el-option>
              <el-option
                label="到厂第三方验收"
                value="到厂第三方验收"
              ></el-option>
              <el-option
                label="港口第三方验收"
                value="港口第三方验收"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item prop="coalType" label="煤种">
            <el-select
              v-model="buyPubData.buylistForm.coalType"
              placeholder="请选择..."
              style="width: 20%"
            >
              <el-option label="烟煤" value="烟煤"></el-option>
              <el-option label="无烟煤" value="无烟煤"></el-option>
              <el-option label="褐煤" value="褐煤"></el-option>
              <el-option label="贫瘦煤" value="贫瘦煤"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="buyQuantity" label="采购数量">
            <el-input
              v-model="buyPubData.buylistForm.buyQuantity"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="transportMode" label="运输方式">
            <el-select
              v-model="buyPubData.buylistForm.transportMode"
              style="width: 20%"
              placeholder="请选择..."
            >
              <el-option label="火车" value="火车"></el-option>
              <el-option label="汽车" value="汽车"></el-option>
              <el-option label="船运" value="船运"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="deliveryLocation" label="交货地点">
            <el-input
              v-model="buyPubData.buylistForm.deliveryLocation"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="settlementMethod" label="结算方式">
            <el-select
              v-model="buyPubData.buylistForm.settlementMethod"
              style="width: 20%"
              placeholder="请选择..."
            >
              <el-option label="一票结算" value="一票结算"></el-option>
              <el-option label="二票结算" value="二票结算"></el-option>
              <el-option label="铁路大票" value="铁路大票"></el-option>
              <el-option label="煤款税票" value="煤款税票"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item prop="paymentMethod" label="结算付款方式">
            <el-input
              v-model="buyPubData.buylistForm.paymentMethod"
              type="textarea"
              :rows="2"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="deposit1" label="报价保证金缴纳">
            <el-input
              v-model="buyPubData.buylistForm.deposit1"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="deposit2" label="履约保证金缴纳">
            <el-input
              v-model="buyPubData.buylistForm.deposit2"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <hr />

      <el-row>
        <el-col :span="8">
          <el-form-item label="收到基低位发热量" prop="lowHeat">
            <el-input
              v-model="buyPubData.coalForm.lowHeat"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="sdjql" label="收到基全硫">
            <el-input
              v-model="buyPubData.coalForm.sdjql"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="qsf" label="全水分">
            <el-input
              v-model="buyPubData.coalForm.qsf"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="收到基灰分" prop="sdjhf">
            <el-input
              v-model="buyPubData.coalForm.sdjhf"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="sdjhff1" label="收到基挥发分">
            <el-input
              v-model="buyPubData.coalForm.sdjhff1"
              style="width: 8%"
            ></el-input>
            (%)至
            <el-input
              v-model="buyPubData.coalForm.sdjhff2"
              style="width: 8%"
            ></el-input>
            (%)
          </el-form-item>
        </el-col>
      </el-row>
      <hr />
      <el-row>
        <el-col :span="8">
          <el-form-item label="空干基水分" prop="kgjsf">
            <el-input
              v-model="buyPubData.coalForm.kgjsf"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="kgjhff1" label="空干基挥发分起">
            <el-input
              v-model="buyPubData.coalForm.kgjhff1"
              style="width: 8%"
            ></el-input>
            (%)至
            <el-input
              v-model="buyPubData.coalForm.kgjhff2"
              style="width: 8%"
            ></el-input>
            (%)
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="空干基全硫" prop="kgjql">
            <el-input
              v-model="buyPubData.coalForm.kgjql"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <hr />
        <el-col :span="8">
          <el-form-item prop="highHeat" label="干基高位发热量">
            <el-input
              v-model="buyPubData.coalForm.highHeat"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="gjql" label="干基全硫">
            <el-input
              v-model="buyPubData.coalForm.gjql"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="干燥无灰基挥发分起" prop="gzwhjhff1">
            <el-input
              v-model="buyPubData.coalForm.gzwhjhff1"
              style="width: 8%"
            ></el-input>
            (%)至
            <el-input
              v-model="buyPubData.coalForm.gzwhjhff2"
              style="width: 8%"
            ></el-input>
            (%)
          </el-form-item>
        </el-col>
      </el-row>
      <hr />
      <el-row>
        <el-col :span="8">
          <el-form-item label="粒度" prop="granularity">
            <el-input
              v-model="buyPubData.coalForm.granularity"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="hrd" label="灰熔点">
            <el-input
              v-model="buyPubData.coalForm.hrd"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="hskmxs" label="哈式可磨细数">
            <el-input
              v-model="buyPubData.coalForm.hskmxs"
              style="width: 20%"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <hr />
      <el-form-item prop="remark" label="备注">
        <el-input
          v-model="buyPubData.coalForm.remark"
          type="textarea"
          :rows="2"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('buyPubData')"
          >提交</el-button
        >
        <el-button @click="resetForm('buyPubData')">保存</el-button>
        <el-button @click="resetForm('buyPubData')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      buyPubData: {
        value1: "",
        buylistForm: {
          applicant: "",
          signer: "",
          reqDate: "",
          deliveryStartTime: "",
          deliveryEndTime: "",
          coalType: "",
          buyQuantity: "",
          transportMode: "",
          deliveryLocation: "",
          settlementMethod: "",
          acceptanceMethod: "",
          paymentMethod: "",
          deposit1: "",
          deposit2: "",
        },
        coalForm: {
          lowHeat: "",
          sdjql: "",
          qsf: "",
          sdjhf: "",
          sdjhff1: "",
          sdjhff2: "",
          kgjsf: "",
          kgjql: "",
          kgjhff1: "",
          kgjhff2: "",
          highHeat: "",
          gjql: "",
          gzwhjhff1: "",
          gzwhjhff2: "",
          granularity: "",
          hrd: "",
          remark: "",
          hskmxs: "",
        },
      },

      rules: {
        applicant: [
          {
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        signer: [
          {
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        reqDate: [
          {
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        deliveryStartTime: [
          {
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        deliveryEndTime: [
          {
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        coalType: [
          {
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        buyQuantity: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        transportMode: [
          {
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        deliveryLocation: [
          {
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        settlementMethod: [
          {
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        acceptanceMethod: [
          {
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        paymentMethod: [
          {
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        deposit1: [
          {
            type: "integer",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        deposit2: [
          {
            type: "integer",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],

        lowHeat: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        sdjql: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        qsf: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        sdjhf: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        sdjhff1: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        sdjhff2: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        kgjsf: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        kgjql: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        kgjhff1: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        kgjhff2: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        highHeat: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        gjql: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        gzwhjhff1: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        gzwhjhff2: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        granularity: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        hrd: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        remark: [
          {
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
        hskmxs: [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods(){

  }
};
</script>




<style>
</style>
