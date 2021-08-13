<template>
    <el-table ref="table"
    border
    stripe highlight-current-row
    :data="tableData">

     <el-table-column type="expand" width="1">
       <template slot-scope="props">
         <el-form label-position="central" inline class="demo-table-expand">
           <el-form-item label="商品名称">
             <span>{{ props.row.name }}</span>
           </el-form-item>
           <el-form-item label="所属店铺">
             <span>{{ props.row.shop }}</span>
           </el-form-item>
           <el-form-item label="商品 ID">
             <span>{{ props.row.id }}</span>
           </el-form-item>
           <el-form-item label="店铺 ID">
             <span>{{ props.row.shopId }}</span>
           </el-form-item>
           <el-form-item label="商品分类">
             <span>{{ props.row.category }}</span>
           </el-form-item>
           <el-form-item label="店铺地址">
             <span>{{ props.row.address }}</span>
           </el-form-item>
           <el-form-item label="商品描述">
             <span>{{ props.row.desc }}</span>
           </el-form-item>
         </el-form>
       </template>
     </el-table-column>
     <el-table-column
        label="商品 ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="商品名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="状态(是否已读)"
        prop="desc">
      </el-table-column>
      <el-table-column label="操作" width="200px">

        <el-button type="text" @click="toogleExpand(prop.row)">查看详情</el-button>
         <el-button type="text" @click="">标记已读</el-button>
       <template slot-scope="scope"></template>
     </el-table-column>
   </el-table>
 </template>

 <script>
   import {getMessageList} from './api'
 export default {
   data() {
     return {
       total:'',
       page:'',
       tableData: []
     };
   },
   created() {
     this.loadMsg(1,20);
   },
   mounted() {

   },
   methods: {
     toogleExpand(row) {
       let $table = this.$refs.table;
       $table.toggleRowExpansion(row)
    },
    loadMsg(page, limit) {
      getMessageList(page, limit).then(
        (res) => {
          const data = res.data;
          console.log(data.pages);
          this.tableData = data.row;
          this.page=data.pages;
          this.total = data.total;
        },
        function (error) {}
      );
    },
   }
 }
 </script>
<style>
 .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
