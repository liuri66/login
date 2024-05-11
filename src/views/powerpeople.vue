<template>
    <div style="background-color:white;">
        
        <div style="margin:0px 0px 20px 15px ;display:flex;align-items:center">
            <span >权利人名称</span> <el-input v-model="input" style="width: 280px;margin-right:50px"  placeholder="请输入" />
            <span>联系方式</span> <el-input v-model="input" style="width: 280px;margin-right:50px" placeholder="请输入" />
            <span>身份证号</span> <el-input v-model="input" style="width: 280px;margin-right:50px" placeholder="请输入" />
            <el-button type="success" style="background-color:#e4f4ef;color:#14a675;width: 100px;">查询</el-button>
            <el-icon style="margin-left:50px"><Delete /></el-icon><span style="margin-left:10px">清除条件</span>
        </div>
        <div >
            <div style="margin:20px 0px 20px 15px">
                <el-button  style="background-color:#14a675;color:#e4f4ef "><el-icon><Plus /></el-icon>导入人员</el-button>
                <el-button  style="background-color:#e4f4ef;color:#14a675">补充条件</el-button>
                <el-button  style="background-color:#e4f4ef;color:#14a675">批量下发图斑</el-button>
            </div>
           <div style="margin:0px 15px">
            <!-- {backgroundColor:'#f5f6f8'}设置表格头颜色 -->
            <el-table
            ref="multipleTableRef"
            :data="tableData"
            style="width: 100%"
            @selection-change="handleSelectionChange"
            :header-cell-style="{backgroundColor:'#f5f6f8'}"
          >
            <el-table-column type="selection" width="55"  />
            <el-table-column label="序号" width="120">
              <template #default="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="权利人名称" width="180" />
                <el-table-column prop="address" label="联系电话" />
                <el-table-column prop="huhao" label="户号" />
                <el-table-column prop="chuanjianren" label="创建人" />
                <el-table-column prop="chuanjianshijian" label="创建时间" />
            <el-table-column prop="address" label="操作">
                <el-button type="success" plain size="small" style="background-color: white;border-color:white;margin-left:-10px">下发图斑</el-button>
                <el-button type="info" plain size="small"  style="background-color: white;border-color:white;">删除人员</el-button>
              </el-table-column>
          </el-table>
          <!-- 分页 -->
          <div style="display:flex; justify-content : space-between;">
            <div style="margin:10px 10px 10px 15px">
                <span>共688项数据</span>
            </div>
            <div style="border-color:#f5f6f8;display:flex;">
                <el-pagination :background="white" style="border:#f5f6f8;" layout="prev, pager, next, jumper" :total="1000"   />
                <span class="el-pagination__jump ">页</span>
            </div>
           
          </div>
         
          
        </div>
        </div>
    
    </div>
   
   
</template>

<!-- 不屑setup表格的数据出不来 -->
<script lang="ts" setup>
import { ref } from 'vue'





import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

const tableData = [
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'

  },
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'
  },
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'
  },
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'
  },
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'
  },
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'
  },
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'
  },
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'
  },
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'
  },
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'
  },
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'
  },
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'
  },
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'
  },
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'
  },
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'
  },
  {
    date: '1',
    name: '张三',
    address: '123456789101',
    huhao:'4511254698356',
    chuanjianren:'张晓明',
    chuanjianshijian:'2024-5-1'
  },

]
</script>




<style>
.el-button{
    border-style: none; /* 移除默认边框 */
    /*去除点击的黑边 */
    outline: none !important; 
}
.el-pager li.is-active {
    background-color:green;
    color:white
}
.el-pager li{
    border:red
}
</style>