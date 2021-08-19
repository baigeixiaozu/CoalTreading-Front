<template>
  <div>
    <!-- 交易审核界面 -->
    <div v-if="this.$route.params.type === 'A'">
      <form-a :buyPubData="formData" :isFormDisabled="true"></form-a>
    </div>
    <div v-else-if="this.$route.params.type === 'B'">
      <form-b :salelistForm="formData" :isFormDisabled="true"></form-b>
    </div>
    <div v-else>
      <h2>参数错误</h2>
    </div>
  </div>
</template>

<script>
import formA from "./A.vue";
import formB from "./B.vue";
import { getTradeAuditDetail } from "../api";
export default {
  data() {
    return {
      id: null,
      formData: {},
    };
  },
  components: {
    formA,
    formB,
  },
  created() {
    this.id = this.$route.params.id;
    this.loadDetail(this.id);
  },
  methods: {
    loadDetail(id) {
      getTradeAuditDetail(id).then((res) => {
        console.log(res);
        if (res.data.detail.baseData.reqDate) {
          res.data.detail.baseData.reqDate = new Date(
            res.data.detail.baseData.reqDate
          );
        }
        this.formData = res.data.detail;
      });
    },
  },
};
</script>

<style>
</style>