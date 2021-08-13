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

  <el-descriptions class="margin-top" title="用户基本信息" :column="2" border>
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
        企业联系电话
      </template>
      {{detailform.comContact}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        注册地址
      </template>
      {{detailform.comAddr}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-tickets"></i>
        企业介绍
      </template>
      {{detailform.comIntro}}
    </el-descriptions-item>
     <el-descriptions-item>
      <template #label>
        <i class="el-icon-office-building"></i>
        邮政编码
      </template>
      {{detailform.comZip}}
      </el-descriptions-item>
       <el-descriptions-item>
      <template #label>
        <i class="el-icon-office-building"></i>
       传真
      </template>
      {{detailform.fax}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-office-building"></i>
       注册资金
      </template>
      {{detailform.registeredCapital}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        煤炭存放地点
      </template>
      {{detailform.coalStoreSite}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-office-building"></i>
       煤炭数量
      </template>
      {{detailform.coalQuantity}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-office-building"></i>
       煤炭质量
      </template>
      {{detailform.coalQulity}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-office-building"></i>
       运输方式
      </template>
      {{detailform.coalTransport}}
    </el-descriptions-item>
  </el-descriptions>

  <el-descriptions class="margin-top" title="相关资质查看" :column="1" border>
    <el-descriptions-item label="法人名称">{{detailform.legalName}}</el-descriptions-item>
    <el-descriptions-item label="法人身份证号码">{{detailform.legalId}}</el-descriptions-item>
    <el-descriptions-item label="法人身份证文件">
  <el-upload
  :file-list="fileList[0]"
  action=""
  @click="downloadpic(detailform.userId,detailform.legalIdFile,0)"
 >
</el-upload>
  </el-descriptions-item>
    <el-descriptions-item label="煤炭经营许可证编号">{{detailform.manageLicenseId}}</el-descriptions-item>
    <el-descriptions-item label="煤炭经营许可证文件">
<el-upload
  :file-list="fileList[1]"
  action=""
  @click="downloadpic(detailform.userId,detailform.manageLicenseFile,0)"
 >
</el-upload>
    </el-descriptions-item>
    <el-descriptions-item label="企业营业执照号">{{detailform.businessLicenseId}}</el-descriptions-item>
    <el-descriptions-item label="企业营业执照文件">
<el-upload
  :file-list="fileList[2]"
  action=""
  @click="downloadpic(detailform.userId,detailform.businessLicenseFile,0)"
 >
</el-upload>      
    </el-descriptions-item>
    <el-descriptions-item label="组织机构代码">{{detailform.oibCode}}</el-descriptions-item>
    <el-descriptions-item label="组织机构代码证">
<el-upload
  :file-list="fileList[3]"
  action=""
  @click="downloadpic(detailform.userId,detailform.oibCodeFile,0)"
 >
</el-upload>
    </el-descriptions-item>
    <el-descriptions-item label="税务登记证代码">{{detailform.trCert}}</el-descriptions-item>
    <el-descriptions-item label="税务登记证文件">
<el-upload
  :file-list="fileList[4]"
  action=""
  @click="downloadpic(detailform.userId,detailform.trCertFile,0)"
 >
</el-upload>
    </el-descriptions-item>
  </el-descriptions>
    
<h3>审核意见</h3>      
<el-input
  type="textarea"
  placeholder="请输入内容"
  v-model="auditopinion"
  maxlength="100"
  :rows="6"
  show-word-limit
>
</el-input>
    
       <template #footer>
      <span class="dialog-footer">
      <el-button type="danger" @click="pass(detailform.userId)">拒绝</el-button>
      <el-button type="success" @click="notpass(detailform.userId)">通过</el-button>
      </span>
     </template>
    </el-dialog>

 </div>
</template>

<script>
import { h } from 'vue';
import {getreglist} from "./api.js"
import {getdetail} from "./api.js"
import {downloadpicfile} from "./api.js"
import {getpass} from "./api.js"
import {getnotpass} from "./api.js"
import {subauditopinion} from "./api.js"
export default {
  data() {
    
    return {
      fileList:[ [{name: '法人身份证.jpeg', url: ''}],
                 [{name: '煤炭经营许可证.jpeg', url: ''}],
                 [{name: '企业营业执照.jpeg', url: ''}],
                 [{name: '组织机构代码证.jpeg', url: ''}],
                 [{name: '税务登记证.jpeg', url: ''}]],
      detailform:{},
      auditopinion:"",
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
    downloadpic(id,file,num){
      
       downloadpicfile(id,file).then(res=>{
        console.log(res);
        this.fileList[num].url=res.url;
        this.$msgbox({
          title: '详情',
          message: h('div', null, [
            h('h3', null, this.detailform.legalName),
            h('img', { 
              style:{ verticalAlign:"middle" },
              attrs:{
               src:require(this.fileList[num].url)
              }
            },)
          ]),
          confirmButtonText: '确定'
        }).then();
    
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
    pass(id){
      this.dialogVisible = false
      getpass(id)
      subauditopinion(id,this.auditopinion)
      },
    notpass(id){
      this.dialogVisible = false
      getnotpass(id)
      subauditopinion(id,this.auditopinion)
      },
    geteadetail(id){
      var that = this;
    getdetail(id).then(res=>{
        console.log(res);
        console.log(res.data[0].legalName);
        that.detailform = res.data[0];
        that.fileList[0].name=that.detailform.legalIdFile
        that.fileList[1].name=that.detailform.manageLicenseFile
        that.fileList[2].name=that.detailform.businessLicenseFile
        that.fileList[3].name=that.detailform.oibCode
        that.fileList[4].name=that.detailform.trCertFile
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
