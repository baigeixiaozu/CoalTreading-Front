<template>
  <!-- 
  用户查询所有摘牌信息，可跳转至详情页面，选择是否摘牌。
  -->
  <div>
    <el-container>
      <el-header><h2>我的摘牌列表</h2></el-header>
      <el-main>
        <template v-for="item in list" :key="item.id">
          <router-link
            :to="
              '/trade/' +
              (item.type === '1' ? 'B' : 'A') +
              '/zp?id=' +
              item.req_id
            "
            ><el-row
              ><el-col :span="5" class="gp-list-item">{{ item.id }}</el-col
              ><el-col :span="10" class="gp-list-item">{{
                item.created_time
              }}</el-col
              ><el-col></el-col></el-row
          ></router-link>
        </template>
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          v-model:currentPage="currentPage"
          :page-sizes="[10, 15, 20]"
          v-model:pageSize="pageSize"
          :page-count="totalPages"
          :total="list.length"
        ></el-pagination>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import { loadDelistList } from "./api";
export default {
  data() {
    return {
      currentPage: 1,
      totalPages: 1,
      pageSize: 10,
      mode: this.$route.params.mode,
      list: [],
    };
  },
  watch: {
    currentPage(newValue, oldValue) {
      this.loadList(newValue, this.pageSize);
    },
    pageSize(newValue, oldValue) {
      this.loadList(this.currentPage, newValue);
    },
  },
  created() {
    console.log("created");
    this.loadList();
  },
  updated() {
    console.log("updated");
    this.loadList();
  },
  methods: {
    loadList(page = 1, limit = 10) {
      this.getMyList(page, limit);
    },
    getMyList(page, limit) {
      loadDelistList(page, limit).then((res) => {
        console.log(res);
        this.list = res.data.rows;
        this.totalPages = res.data.pages;
      });
    },
  },
};
</script>

<style>
.gp-list-item {
  color: black;
  margin: 1rem;
}
</style>
