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
        <router-link
          :to="
            '/trade/' +
            (this.$store.state.role === 'USER_BUY' ? 'A' : 'B') +
            '/gp'
          "
          ><el-button v-if="mode === 'my'" type="primary">
            新建挂牌
          </el-button></router-link
        >
        <div v-for="item in list" :key="item.id">
          <el-row
            ><el-col :span="8" class="gp-list-item">{{
              item.request_num ? item.request_num : item.id
            }}</el-col
            ><el-col :span="5" class="gp-list-item">{{
              item.created_time
            }}</el-col>
            <el-col :span="7" class="gp-list-item" >
              <router-link
                :to="`/trade/${item.type === '1' ? 'B' : 'A'}/${
                  mode === 'my' ? 'gp' : 'zp'
                }?id=${item.id}`"
                ><el-button>{{mode === 'my'?"编辑":"查看"}}</el-button></router-link
              >
            </el-col>
          </el-row>
        </div>
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
import { loadPublicReqList, loadMyReqList } from "./api";
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
    this.loadList();
  },
  updated() {
    this.list = [];
    this.mode = this.$route.params.mode;
    this.loadList();
  },
  methods: {
    loadList(page = 1, limit = 10) {
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
        this.totalPages = res.data.pages;
      });
    },
    getMyList(page, limit) {
      loadMyReqList(page, limit).then((res) => {
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
