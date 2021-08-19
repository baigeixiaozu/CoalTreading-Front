<template>
<div>
    <!-- 交易审核列表 -->
    <el-container>
        <el-header>
            <h2>交易审核列表</h2>
        </el-header>
        <el-main>
            <el-row v-for="item in list" :key="item.id">
                <router-link :to="`detail/${item.type==1?'B':'A'}/${item.id}`">
                    <el-col style="color:black;">{{item.id}}</el-col>
                </router-link>
            </el-row>
            
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
import {getTradeAuditList} from '../api'

export default {
    data(){
        return  {
            list: [],
            currentPage: 1,
            totalPages: 1,
            pageSize: 10
        }
    },
    watch:{
        currentPage(newValue, oldValue){
            this.currentPage = newValue;
            this.loadList(newValue, this.pageSize)
        },
        pageSize(newValue, oldValue){
            this.pageSize = newValue;
            this.loadList(this.currentPage, newValue)
        }
    },
    created(){
        this.loadList(1, this.pageSize);
    },
    methods: {
        loadList(page, limit){
            getTradeAuditList(page, limit).then(res=>{
                console.log(res)
                this.list = res.data.rows;
                this.currentPage = res.data.current;
                this.totalPages = res.data.pages;
            })
        }
    }
}
</script>

<style>

</style>