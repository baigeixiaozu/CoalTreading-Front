<template>
  <div class="news-list">
    <el-row>
      <el-col class="grid-content bg-purple-dark title">综合新闻</el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <search></search>
      </el-col>
      <el-col :span="1">
        <el-button icon="el-icon-search"></el-button>
      </el-col>
    </el-row>

    <el-row
      v-for="item in tableData"
      :key="item.id"
      @click="getExactly(item.id)"
      class="news-item"
    >
      <div class="item">{{ item.title }}</div>
      <span>{{ item.date }}</span>
    </el-row>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalItems"
      :page-count="totalPages"
      :background="true"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getNewsList } from "./api";
import search from "./search.vue";
export default {
  data() {
    return {
      currentPage: 1, //初始页
      pagesize: 15, //    每页的数据
      totalPages: 1,
      totalItems: 0,
      tableData: [],
    };
  },
  methods: {
    getExactly(id) {
      this.$router.push({ path: "/news/detail", query: { id: id } });
    },
    handleSizeChange: function (size) {
      console.log(this.pagesize); //每页下拉显示数据
      this.pagesize = size;
      this.loadNews(this.currentPage, size);
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      this.loadNews(this.currentPage, this.pagesize);
    },
    loadNews(page, limit) {
      getNewsList(page, limit).then(
        (res) => {
          const data = res.data;
          this.tableData = data.records;
          this.pagesize = this.totalItems = data.size;
          this.totalPages = data.pages;
        },
        function (error) {}
      );
    },
  },
  created() {
    this.loadNews();
  },

  components: {
    search,
  },
};
</script>
<style lang="scss" scoped>
.news-list {
  // display: flex;
  // flex-direction: column;
}
.news-item {
  justify-content: space-between;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.item:hover {
  color: rgb(99, 238, 248);
  cursor: pointer;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;

  color: rgb(219, 219, 231);
}
.bg-purple-dark {
  background: #1353c9;
}
.bg-purple {
  background: #3dce38;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 5px;
  min-height: 36px;
  color: #ffffff;
}
.grid-contents {
  border-radius: 0px;
  min-height: 36px;
  color: #ffffff;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
