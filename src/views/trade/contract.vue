<template>
  <div>
    <div v-if="mode === 'gp'">
      <!-- 挂牌放上传合同 -->
      <div v-if="path===null">
        <el-upload
          class="upload-demo"
          :action="`${API}/request/contract/upload/${this.id}`"
          :headers="auth"
          :limit="1"
          name="contract"
          :on-success="successHandle"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <template #tip>
            <div class="el-upload__tip">只能上传不超过 5MB 的文件</div>
          </template>
        </el-upload>
      </div>
      <!-- TODO:使用fileList获取显示 -->
      <div v-else>
        <el-button @click="getContractFile">下载合同</el-button>
      </div>
    </div>
    <div v-else-if="mode === 'zp'">
      <!-- 摘牌方下载合同 -->
      <el-button @click="getContractFile">下载合同</el-button>
      <br /><br /><br />
      <el-button @click="acceptContract(true)" type="primary">确认合同</el-button>
      <el-button @click="acceptContract(false)" type="warning">拒绝合同</el-button>
    </div>
  </div>
</template>

<script>
import { downContractFile,acceptContract } from "./api";
export default {
  data() {
    return {
      API: process.env.VUE_APP_BASE_URL,
      auth: {
        Authorization: `Bearer ${this.$store.state.token}`,
      },
      mode: null,
      id: null,
      path: null,
    };
  },
  created() {
    const q = this.$route.query;
    const mode = this.$route.params.mode;
    // 挂牌--挂牌ID，摘牌--摘牌ID
    this.id = q.id;
    if(q.path)this.path = q.path; // 挂牌传
    this.mode = mode;
  },
  methods: {
    successHandle(response, file, fileList) {
      console.log("successHandle")
      file.name = response.data.path;
    },
    getContractFile() {
      downContractFile(this.id, this.path).then((data) => {
        this.$message({
          message: "开始下载",
          type: "success",
        });
        console.log(typeof data);
        let url = window.URL.createObjectURL(data);
        if (!data) {
          return;
        }
        let link = document.createElement("a");
        link.style.display = "none";
        link.href = url;
        link.setAttribute(
          "download",
          this.path.split("/")[this.path.split("/").length - 1]
        );

        document.body.appendChild(link);
        link.click();
      });
    },
    acceptContract(accept) {
      // 接受合同
      acceptContract(this.id, accept).then(res=>{
        console.log(res)
        this.$message({
          message: "提交成功",
          type: "success"
        })
      })
    },
  },
};
</script>

<style>
</style>