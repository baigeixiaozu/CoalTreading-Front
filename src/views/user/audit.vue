<template>
<div>
  <el-row>
  <el-col :span="6" class="grid-content bg-purple-dark title">注册请求</el-col></el-row>
  <el-card shadow="hover">
    
    <el-row
      v-for="item in reglist"
      :key="item.userId"
      @click="geteadetail(item.userId)"
      class="reg-item"
    >
      <div class="item">{{ item.comName }}</div>
      <span></span>
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
    </el-card>
 
    <el-dialog
    title="用户详细信息"
    v-model="dialogVisible"
    width="70%">

  <el-descriptions class="margin-top" title="用户基本信息" :column="3" border>
    <template #extra>
    </template>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        企业名称
      </template>
      {{detailform.comName}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        居住地
      </template>
      苏州市
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-tickets"></i>
        备注
      </template>
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-office-building"></i>
        注册地址
      </template>
      {{detailform.comAddr}}
    </el-descriptions-item>
  </el-descriptions>

  <el-descriptions class="margin-top" title="相关资质查看" :column="3" border>
    <template #extra>
    </template>
    <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
    <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
    <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
  </el-descriptions>





       <template #footer>
      <span class="dialog-footer">
      <el-button type="danger" @click="dialogVisible = false">拒绝</el-button>
      <el-button type="success" @click="dialogVisible = false">通过</el-button>
      </span>
     </template>
    </el-dialog>

 </div>
</template>

<script>
import {getreglist} from "./api.js"
import {getdetail} from "./api.js"
export default {
  data() {
    
    return {
      detailform:{},
      id:9,
      enname:"",
      reglist: [],
      dialogVisible: false,
      currentPage: 1, //初始页
      pagesize: 20, //    每页的数据
      totalPages: 1,
      totalItems: 0,
    
    };
  },
  methods:{
    handleSizeChange: function (size) {
    console.log(this.pagesize); //每页下拉显示数据
    this.pagesize = size;
    this.loadreglist(this.currentPage, size);
    },

    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      this.loadreglist(this.currentPage, this.pagesize);
    },

    loadreglist(page, limit){
        var that =this;
      getreglist(page, limit).then(res=>{
        const data = res.data;
        console.log(data);
        that.reglist=data.records;
        that.pagesize = this.totalItems = data.total;
        that.totalPages = res.pages;
      }
    ).catch(err=>{
      console.log(err)
      if(err.error){
        this.$message({
          message: err.error,
          type:"error"
        })
        this.$router.back()
      }
    })
    },
    geteadetail(id){
      var that = this;
    getdetail(id).then(res=>{
        console.log(res);
        console.log(res.data[0].legalName);
        that.detailform = res.data[0];
        
      }
    ).catch(err=>{
      console.log(err)
      if(err.error){
        this.$message({
          message: err.error,
          type:"error"
        })
        this.$router.back()
      }
    }) 
     that.dialogVisible = true
    }
  },
  created(){
    console.log("created");
    this.loadreglist(1,20);
    
  },
};
</script>
<style scoped>
.el-row {
  margin-top: 0px;
  margin-bottom: 0px;
}
.item:hover {
  color: rgb(99, 238, 248);
  cursor: pointer;
}
</style>