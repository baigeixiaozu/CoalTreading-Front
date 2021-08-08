<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <div class="grid-content">
        <div class="block">
          <span class="demonstration">Click 指示器触发</span>

          <el-carousel trigger="click" height="560px">
            <el-carousel-item v-for="item in picitem" :key="item">
              <img :src="item.image" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-col>

    <el-col :span="12">
      <el-card height="300px" shadow="hover">
        <el-row>
          <el-col class="grid-content bg-purple-dark">综合新闻</el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <search></search>
          </el-col>
          <el-col :span="1">
            <el-button icon="el-icon-search"></el-button>
          </el-col>
        </el-row>

        <el-scrollbar height="400px">
          <p
            
            class="item"
            v-for="item in tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            :key="item"
            @click="getExactly(item.id)"
          >
            <el-link>{{ item.title }}</el-link>
          </p>
        </el-scrollbar>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 40]"
        :page-size="pagesize"         
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
        :background="true"> </el-pagination>
      </el-card>
    </el-col>
    <el-col>
      <img src="../../assets/coaldata.png" />
    </el-col>
  </el-row>
</template>

<script>
import {getNewsList} from './api';
import search from "./search.vue";
export default {
  data() {
   

    return {
      currentPage:1, //初始页
      pagesize:15,    //    每页的数据
      tableData: [],

      picitem: [
        { image: require("../../assets/coal2.png") },

        { image: require("../../assets/coal.jpg") },
        { image: require("../../assets/coal3.jpg") },
      ],
    };
  },
  methods: {
    getExactly(id) {
    },
    handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
        }
  },
  created() {
    var that = this;
    getNewsList().then(
      function (response) {
        console.log(response)
        that.tableData = response.data;
      },
      function (error) {}
    );
  },

  components: {
    search,
  },
};
</script>
<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
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
