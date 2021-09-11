<template>
  <!-- 
    买方挂牌/卖方摘牌
    调用 --- /trade/A/[zp|gp]?id=[req_id]
  -->
  <div class="baseData">
    <el-form
      :label-position="labelPosition"
      :model="buyPubData"
      status-icon
      ref="buyPubData"
      label-width="140px"
      class="demo-buyPubData"
      :rules="rules"
      :disabled="isFormDisabled"
    >
      <el-row>
        <el-col :span="8">
          <el-form-item label="申请单位" prop="baseData.requestCompany">
            <el-input v-model="buyPubData.baseData.requestCompany" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单据编号" prop="baseData.requestNum">
            <el-input v-model="buyPubData.baseData.requestNum" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="申请人" prop="baseData.applicant">
            <el-input v-model="buyPubData.baseData.applicant"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="发资人" prop="baseData.signer">
            <el-input v-model="buyPubData.baseData.signer"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="baseData.reqDate" label="申请日期">
            <el-date-picker
              v-model="buyPubData.baseData.reqDate"
              :default-value="new Date()"
              :readonly="true"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item prop="baseData.deliveryTime" label="交货日期" style="display: flex">
            <el-date-picker
              v-model="buyPubData.baseData.deliveryTime"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              range-separator="至"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item prop="baseData.acceptanceMethod" label="验收方式">
            <el-select v-model="buyPubData.baseData.acceptanceMethod" placeholder="请选择...">
              <el-option label="到厂验收" value="到厂验收"></el-option>
              <el-option label="到厂第三方验收" value="到厂第三方验收"></el-option>
              <el-option label="港口第三方验收" value="港口第三方验收"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item prop="baseData.coalType" label="煤种">
            <el-select v-model="buyPubData.baseData.coalType" placeholder="请选择...">
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
          <el-form-item prop="baseData.buyQuantity" label="采购数量">
            <el-input v-model.number="buyPubData.baseData.buyQuantity"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="baseData.transportMode" label="运输方式">
            <el-select v-model="buyPubData.baseData.transportMode" placeholder="请选择...">
              <el-option label="火车" value="火车"></el-option>
              <el-option label="汽车" value="汽车"></el-option>
              <el-option label="船运" value="船运"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="baseData.deliveryLocation" label="交货地点">
            <el-input v-model="buyPubData.baseData.deliveryLocation"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="baseData.settlementMethod" label="结算方式">
            <el-select v-model="buyPubData.baseData.settlementMethod" placeholder="请选择...">
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
          <el-form-item prop="baseData.paymentMethod" label="结算付款方式">
            <el-input v-model="buyPubData.baseData.paymentMethod" type="textarea" :rows="2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="baseData.deposit1" label="报价保证金缴纳">
            <el-input v-model.number="buyPubData.baseData.deposit1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="baseData.deposit2" label="履约保证金缴纳">
            <el-input v-model.number="buyPubData.baseData.deposit2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <hr />

      <el-row>
        <el-col :span="8">
          <el-form-item label="收到基低位发热量" prop="coalQuality.lowHeat">
            <el-input v-model.number="buyPubData.coalQuality.lowHeat"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="coalQuality.sdjql" label="收到基全硫">
            <el-input v-model.number="buyPubData.coalQuality.sdjql"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="coalQuality.qsf" label="全水分">
            <el-input v-model.number="buyPubData.coalQuality.qsf"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="收到基灰分" prop="coalQuality.sdjhf">
            <el-input v-model.number="buyPubData.coalQuality.sdjhf"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="15" style="display: flex">
          <el-form-item
            prop="coalQuality.sdjhff1"
            label="收到基挥发分"
            style="display: flex"
            label-width="145px"
          >
            <el-input v-model.number="buyPubData.coalQuality.sdjhff1"></el-input>
          </el-form-item>
          <el-form-item
            prop="coalQuality.sdjhff2"
            label="(%)至"
            style="display: flex"
            label-width="60px"
          >
            <el-input v-model.number="buyPubData.coalQuality.sdjhff2"></el-input>
          </el-form-item>
        </el-col>
        <span style="display: flex; align-items: center; margin-bottom: 22px">(%)</span>
      </el-row>
      <hr />
      <el-row>
        <el-col :span="12">
          <el-form-item label="空干基水分" prop="coalQuality.kgjsf">
            <el-input v-model.number="buyPubData.coalQuality.kgjsf"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="空干基全硫" prop="coalQuality.kgjql">
            <el-input v-model.number="buyPubData.coalQuality.kgjql"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" style="display: flex">
          <el-form-item prop="coalQuality.kgjhff1" label="空干基挥发分">
            <el-input v-model.number="buyPubData.coalQuality.kgjhff1"></el-input>
          </el-form-item>
          <el-form-item
            prop="coalQuality.kgjhff2"
            label="(%)至"
            style="display: flex"
            label-width="60px"
          >
            <el-input v-model.number="buyPubData.coalQuality.kgjhff2"></el-input>
          </el-form-item>
        </el-col>
        <span style="display: flex; align-items: center; margin-bottom: 22px">(%)</span>
      </el-row>
      <hr />
      <el-row>
        <el-col :span="12">
          <el-form-item prop="coalQuality.highHeat" label="干基高位发热量">
            <el-input v-model.number="buyPubData.coalQuality.highHeat"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="coalQuality.gjql" label="干基全硫">
            <el-input v-model.number="buyPubData.coalQuality.gjql"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" style="display: flex">
          <el-form-item label="干燥无灰基挥发分" prop="coalQuality.gzwhjhff1">
            <el-input v-model.number="buyPubData.coalQuality.gzwhjhff1"></el-input>
          </el-form-item>
          <el-form-item
            prop="coalQuality.gzwhjhff2"
            label="(%)至"
            style="display: flex"
            label-width="60px"
          >
            <el-input v-model.number="buyPubData.coalQuality.gzwhjhff2"></el-input>
          </el-form-item>
        </el-col>
        <span style="display: flex; align-items: center; margin-bottom: 22px">(%)</span>
      </el-row>
      <hr />
      <el-row>
        <el-col :span="8">
          <el-form-item label="粒度" prop="coalQuality.granularity">
            <el-input v-model.number="buyPubData.coalQuality.granularity"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="coalQuality.hrd" label="灰熔点≥">
            <el-input v-model.number="buyPubData.coalQuality.hrd"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="coalQuality.hskmxs" label="哈式可磨细数≥">
            <el-input v-model.number="buyPubData.coalQuality.hskmxs"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <hr />
      <el-form-item prop="coalQuality.remark" label="备注">
        <el-input v-model="buyPubData.coalQuality.remark" type="textarea" :rows="2"></el-input>
      </el-form-item>
    </el-form>
    <div v-if="this.$store.state.role === 'USER_BUY' && mode==='gp'">
      <!-- 挂牌区域 -->
      <div v-if="gpInfo.status === '0'">
        <el-button type="primary" @click="submitForm('buyPubData')">提交</el-button>
        <el-button @click="save">保存</el-button>
        <el-button @click="resetForm('buyPubData')">重置</el-button>
      </div>
      <div v-else-if="gpInfo.status === '3'">
        <!-- 已发布 -->
        <div>已发布</div>
      </div>
      <div v-else-if="gpInfo.status === '8'">
        <!-- 上传合同 -->
        <div>上传合同</div>
        <router-link :to="'/trade/contract/gp?id=' + this.gpInfo.id">
          <el-button>去上传合同</el-button>
        </router-link>
      </div>
      <div v-else-if="gpInfo.status === '9'">
        <!-- 上传合同完毕，等待确认 -->
        <div>上传合同完毕，等待确认</div>
        <router-link
          :to="'/trade/contract/gp?id=' + this.gpInfo.id + (this.gpInfo.contractFile===null?'':'&path=' + this.gpInfo.contractFile)"
        >
          <el-button>去查看合同</el-button>
        </router-link>
      </div>
      <div v-else-if="gpInfo.status === '10'">
        <!-- 上传合同 -->
        <div>合同被拒绝</div>
        <router-link :to="'/trade/contract/gp?id=' + this.gpInfo.id">
          <el-button>去上传合同</el-button>
        </router-link>
      </div>
      <div v-else-if="gpInfo.status === '11'">
        <!-- 合同被确认，生成订单 -->
        <div>合同被确认，生成订单</div>
      </div>
      <div v-else-if="gpInfo.status === '15'">
        <!-- 待交保证金 -->
        <div>待交保证金</div>
      </div>
    </div>
    <div v-else-if="this.$store.state.role === 'USER_SALE' && mode==='zp'">
      <!-- 摘牌区域 -->
      <div v-if="zpInfo.status === '0'">
        <!-- 未摘牌,默认 -->
        <el-button type="primary" @click="zpAction">摘牌</el-button>
        <el-button @click="this.$router.back()">返回</el-button>
      </div>
      <div v-else-if="zpInfo.status === '1'">
        <!-- 待交保证金 -->
        <div>待交保证金</div>
        <router-link :to="'/trade/margin?gpid=' + this.gpInfo.id">
          <el-button>去交保证金</el-button>
        </router-link>
      </div>
      <div v-else-if="gpInfo.status === '9'">
        <!-- 确认合同 -->
        <div>确认合同</div>
      </div>
      <div v-else-if="zpInfo.status === '2'">
        <!-- 摘牌成功 -->
        <div>摘牌成功</div>
      </div>
    </div>
    <div v-else-if="this.$store.state.role === 'USER_MONEY'">
      <!-- 财务区域 -->
      <div v-if="mode==='gp'">
        <!-- 挂牌 -->
        <div v-if="gpInfo.status === '0'">
          <!-- 未挂牌,默认 -->
          <div>未被交易用户挂牌</div>
        </div>
        <div v-else-if="gpInfo.status === '15'">
          <!-- 待交保证金 -->
          <div>待交保证金</div>
          <router-link :to="'/trade/margin?gpid=' + this.gpInfo.id">
            <el-button>去交保证金</el-button>
          </router-link>
        </div>
        <div v-else-if="gpInfo.status === '2'">
          <!-- 摘牌成功 -->
          <div>摘牌成功</div>
        </div>
      </div>
      <div v-else-if="mode==='zp'">
        <!-- 摘牌 -->
        <div v-if="zpInfo.status === '0'">
          <!-- 未摘牌,默认 -->
          <div>未被交易用户摘牌</div>
        </div>
        <div v-else-if="zpInfo.status === '1'">
          <!-- 待交保证金 -->
          <div>待交保证金</div>
          <router-link :to="'/trade/margin?zpid=' + this.zpInfo.id">
            <el-button>去交保证金</el-button>
          </router-link>
        </div>
        <div v-else-if="zpInfo.status === '2'">
          <!-- 摘牌成功 -->
          <div>摘牌成功</div>
        </div>
      </div>
    </div>
    <div v-if="!this.$store.state.isLogin">
      <!-- 未登录,默认 -->
      <el-button type="primary" @click="zpAction">摘牌</el-button>
      <el-button @click="this.$router.back()">返回</el-button>
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
  getComName,
  getZPDetail,
  getZPDetail2
} from "./api";
export default {
  data() {
    return {
      labelPosition: "right",
      mode: this.$route.params.mode,
      isFormDisabled: false,
      publish: false,
      buyPubData: {
        baseData: {
          requestCompany: "",
          requestNum: "",
          applicant: "",
          signer: "",
          reqDate: null,
          deliveryStartTime: "",
          deliveryEndTime: "",
          coalType: "",
          buyQuantity: "",
          transportMode: "",
          deliveryLocation: "",
          settlementMethod: "",
          acceptanceMethod: "",
          paymentMethod: "",
          deposit1: null,
          deposit2: null
        },
        coalQuality: {
          lowHeat: null,
          sdjql: null,
          qsf: null,
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
          hskmxs: ""
        }
      },
      rules: {
        "baseData.applicant": [
          {
            required: true,
            message: "不能为空",
            trigger: "blur"
          }
        ],
        "baseData.signer": [
          {
            required: true,
            message: "不能为空",
            trigger: "blur"
          }
        ],
        "baseData.reqDate": [
          {
            required: true,
            message: "不能为空",
            trigger: "blur"
          }
        ],
        "baseData.deliveryTime": [
          {
            required: true,
            message: "不能为空",
            trigger: "blur"
          }
        ],
        "baseData.coalType": [
          {
            required: true,
            message: "不能为空",
            trigger: "blur"
          }
        ],
        "baseData.buyQuantity": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "baseData.transportMode": [
          {
            required: true,
            message: "不能为空",
            trigger: "blur"
          }
        ],
        "baseData.deliveryLocation": [
          {
            required: true,
            message: "不能为空",
            trigger: "blur"
          }
        ],
        "baseData.settlementMethod": [
          {
            required: true,
            message: "不能为空",
            trigger: "blur"
          }
        ],
        "baseData.acceptanceMethod": [
          {
            required: true,
            message: "不能为空",
            trigger: "blur"
          }
        ],
        "baseData.paymentMethod": [
          {
            required: true,
            message: "不能为空",
            trigger: "blur"
          }
        ],
        "baseData.deposit1": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "baseData.deposit2": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],

        "coalQuality.lowHeat": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "coalQuality.sdjql": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "coalQuality.qsf": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "coalQuality.sdjhff1": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "change"
          },
          {
            type: "number",
            max: 100,
            min: 0,
            message: "超出范围",
            trigger: "change"
          }
        ],
        "coalQuality.sdjhff2": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "change"
          }
        ],
        "coalQuality.kgjsf": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "coalQuality.kgjql": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "coalQuality.kgjhff1": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "coalQuality.kgjhff2": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "coalQuality.highHeat": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "coalQuality.gjql": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "coalQuality.gzwhjhff1": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "coalQuality.gzwhjhff2": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "coalQuality.granularity": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "coalQuality.hrd": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "coalQuality.hskmxs": [
          {
            type: "number",
            required: true,
            message: "不能为空，且只能为数字",
            trigger: "blur"
          }
        ],
        "coalQuality.remark": [
          {
            required: true,
            message: "不能为空",
            trigger: "blur"
          }
        ]
      },
      gpInfo: {
        id: null,
        status: "0",
        contractFile: null
      },
      zpInfo: {
        id: null,
        status: "0"
      }
    };
  },
  created() {
    // this.buyPubData = JSON.parse(
    //   `{"baseData":{"applicant":"nurt","signer":"fy","reqDate":null,"deliveryStartTime":["2021-08-03T16:00:00.000Z","2021-08-18T16:00:00.000Z"],"deliveryEndTime":"","coalType":"无烟煤","buyQuantity":2375,"transportMode":"火车","deliveryLocation":"73","settlementMethod":"二票结算","acceptanceMethod":"到厂第三方验收","paymentMethod":"8738","deposit1":3783,"deposit2":73873,"deliveryTime":["2021-08-11T16:00:00.000Z","2021-08-20T16:00:00.000Z"]},"coalQuality":{"lowHeat":38738,"sdjql":7387,"qsf":7387387,"sdjhf":378373,"sdjhff1":73,"sdjhff2":378,"kgjsf":73,"kgjql":783,"kgjhff1":387,"kgjhff2":383,"highHeat":783,"gjql":83,"gzwhjhff1":837,"gzwhjhff2":8383,"granularity":73,"hrd":152,"remark":"738","hskmxs":83}}`
    // );
    if (this.buyPubData.baseData.reqDate === null) {
      this.buyPubData.baseData.reqDate = new Date();
    }
    this.init();
  },
  updated() {},
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
        // 挂牌
        if (q.id) {
          // 编辑挂牌信息
          this.loadGPDetail(q.id);
        } else {
          // 新建挂牌信息
          getComName().then(res => {
            this.buyPubData.baseData.requestCompany = res.data;
            this.buyPubData.baseData.requestNum =
              res.data + new Date().getTime();
          });
        }
      }
    },
    save() {
      // 重置请求时间
      this.buyPubData.baseData.reqDate = new Date();
      // console.log(JSON.stringify(this.buyPubData));
      this.$refs["buyPubData"].validate(valid => {
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
            type: "warning"
          });
        }
      });
    },
    submitForm() {
      const q = this.$route.query;
      // 重置请求时间
      this.buyPubData.baseData.reqDate = new Date();
      this.$refs["buyPubData"].validate(valid => {
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
            type: "warning"
          });
          return false;
        }
      });
    },
    // 新增
    publishData(publish = false) {
      requestPublish({
        publish: publish,
        buyPubData: this.buyPubData
      })
        .then(res => {
          console.log(res);
          this.$message({
            message: "提交成功",
            type: "success"
          });
          this.$router.push(`${this.$route.path}?id=${res.data.reqId}`);
        })
        .catch(err => {
          console.log(err);
          if (err.error) {
            this.$message({
              message: err.error,
              type: "error"
            });
          }
        });
    },
    //编辑
    editData(id, publish = false) {
      requestEdit({
        id: id,
        publish: publish,
        buyPubData: this.buyPubData
      })
        .then(res => {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          this.$router.push(`${this.$route.path}?id=${res.data.reqId}`);
        })
        .catch(err => {
          console.log(err);
          if (err.error) {
            this.$message({
              message: err.error,
              type: "error"
            });
          }
        });
    },
    // 加载
    loadGPDetail(id) {
      loadMyReqDetail(id)
        .then(res => {
          res.data.detail.baseData.reqDate = new Date(
            res.data.detail.baseData.reqDate
          );
          this.buyPubData = res.data.detail;
          this.gpInfo.id = res.data.id;
          this.gpInfo.status = res.data.status;
          this.gpInfo.contractFile = res.data.contractFile;
          this.isFormDisabled =
            res.data.status !== "1" && res.data.status !== "7";
        })
        .catch(err => {
          console.log(err);
          if (err.error) {
            this.$message({
              message: err.error,
              type: "error"
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
        getPublicReqDetail(id).then(res => {
          console.log(res);
          res.data.detail.baseData.reqDate = new Date(
            res.data.detail.baseData.reqDate
          );
          this.buyPubData = res.data.detail;
        });
      } else {
        // 已登录
        getZPDetail2(this.gpInfo.id).then(res => {
          console.log("loadZPDetail1 - 已登录", res);
          res.data.reqInfo.detail.baseData.reqDate = new Date(
            res.data.reqInfo.detail.baseData.reqDate
          );
          this.buyPubData = res.data.reqInfo.detail;
          this.gpInfo.status = res.data.reqInfo.status;
        });
      }
    },
    loadZPDetail2(zid) {
      getZPDetail(zid).then(res => {
        console.log(res);
        res.data.reqInfo.detail.baseData.reqDate = new Date(
          res.data.reqInfo.detail.baseData.reqDate
        );
        this.buyPubData = res.data.reqInfo.detail;
        const delistinfo = res.data.delistInfo;
        this.zpInfo.status = delistinfo.status;
      });
    },
    doDelist(id) {
      doDelist(id).then(res => {
        console.log(res);
        this.$message({
          message: "摘牌成功",
          type: "success"
        });

        this.$router.push(this.$route.path + "?zid=" + res.data.id);
      });
    }
  }
};
</script>

<style>
</style>
