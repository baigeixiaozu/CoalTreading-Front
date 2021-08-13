<template>
  <div>
    <div v-if="mode === 'gp'">
      <!-- 挂牌放上传合同 -->
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
    <div v-else-if="mode === 'zp'">
      <!-- 摘牌方下载合同 -->
      <el-button @click="getContractFile">下载合同</el-button>
      <el-button @click="acceptContract" type="primary">确认合同</el-button>
    </div>
  </div>
</template>

<script>
import { downContractFile } from "./api";
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
    this.id = q.id;
    this.path = q.path;
    this.mode = mode;
  },
  methods: {
    successHandle(response, file, fileList) {
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
    acceptContract() {
      // 接受合同
    },
  },
};
</script>

<style>
</style>