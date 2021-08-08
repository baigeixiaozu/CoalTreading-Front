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

        <el-scrollbar height="400px">
          <p
            class="item"
            v-for="item in tableData"
            :key="item"
            @click="getExactly(item.id)"
          >
            <el-link>{{ item.title }}</el-link>
          </p>
        </el-scrollbar>
        <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
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
    const item = { title: "这是新闻", id: 1 };

    return {
      tableData: Array(20).fill(item),
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