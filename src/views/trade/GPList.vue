<template>
  <!-- 
  用户查看自己所有的挂牌列表，并选择修改草稿或者发布新挂牌信息，
  -->
  <div>
    <el-container>
      <el-header
        ><h2>
          {{ mode === "my" ? "我的挂牌列表" : "公共挂牌列表" }}
        </h2></el-header
      >
      <el-main>
        <template v-for="item in  list" :key="item.id">
          <el-row><el-col :span="5">{{item.id}}</el-col><el-col :span="10">{{item.created_time}}</el-col></el-row>
        </template>
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :current-page="currentPage"
          @current-change="handleCurrentChange"
          :page-sizes="[10,15,20]"
          @size-change="handleSizeChange"
          :page-count="totalPages"
          :total="1"
        ></el-pagination>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import { loadPublicReqList, loadMyReqList } from "./api";
export default {
  data() {
    return {
      currentPage: 1,
      totalPages: 1,
      pageSize: 10,
      mode: this.$route.params.mode,
      list: []
    };
  },
  watch:{
    currentPage(oldValue, newValue){
      console.log(oldValue, newValue)
    }

  },
  created() {
    this.loadList();
  },
  updated() {
    this.mode = this.$route.params.mode;
    this.loadList();
  },
  methods: {
    handleSizeChange(size){
      this.pageSize = size;
      this.loadList(this.currentPage, size);
    },
    handleCurrentChange(current){
      this.currentPage = current;
      this.loadList(current, this.pageSize)
    },
    loadList(page=1, limit=10) {
      const loadFunc = {
        public: this.getPublicList,
        my: this.getMyList,
      };
      loadFunc[this.mode](page, limit);
    },
    getPublicList(page, limit) {
      loadPublicReqList(page, limit).then((res) => {
        console.log(res);
        this.list = res.data.rows;
      });
    },
    getMyList(page, limit) {
      loadMyReqList(page, limit).then((res) => {
        console.log(res);
        this.list = res.data.rows;
      });
    },
  },
};
</script>

<style>
</style>
