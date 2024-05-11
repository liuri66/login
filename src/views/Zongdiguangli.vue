<template>
     <!-- 路由放这里 -->
     <!-- <router-view></router-view> -->
         
     <el-tabs type="border-card">
       <!-- 标签页 -->
         
       <el-tab-pane label="基本信息"  style="font-size: 13px;" >
         <!-- 第一排 -->
         <div style="">
        <div style="font-size: 13px;margin-left: 15px;"> 
         宗地基本信息
         <!-- 编辑图标 -->
         <!-- 弹窗 -->
           <el-icon :size="size" :color="color" plain @click="dialogFormVisible = true" >
               <Edit /> 
               <!-- 弹窗内容 -->
               <el-dialog v-model="dialogFormVisible" title="编辑宗地基本信息" width="500" style="">
                 <el-form :model="form">
                   <el-form-item label="宗地预编码" :label-width="formLabelWidth">
                     <el-input v-model="form.number" autocomplete="off" />
                   </el-form-item>
                   <el-form-item label="权利人名字" :label-width="formLabelWidth">
                     <el-input v-model="form.peopelname" autocomplete="off" />
                   </el-form-item>
                   <el-form-item label="权利人类型" :label-width="formLabelWidth">
                     <el-select v-model="form.peopeltype" placeholder="请选择">
                       <el-option label="身份证" value="shanghai" />
                       <el-option label="...." value="beijing" />
                     </el-select>
                   </el-form-item>
                   <el-form-item label="调查类型" :label-width="formLabelWidth">
                     <el-select v-model="form.surveytype" placeholder="请选择">
                       <el-option label="已启动调查" value="shanghai" />
                       <el-option label="...." value="beijing" />
                     </el-select>
                   </el-form-item>
                   <el-form-item label="地址" :label-width="formLabelWidth" style="">
                     <el-select v-model="form.address" placeholder="请选择">
                       <el-option label="Zone No.1" value="shanghai" />
                       <el-option label="Zone No.2" value="beijing" />
                     </el-select>
                     <el-select v-model="form.address" placeholder="区/县">
                       <el-option label="Zone No.1" value="shanghai" />
                       <el-option label="Zone No.2" value="beijing" />
                     </el-select>
                   </el-form-item>
                   <el-form-item label="" :label-width="formLabelWidth">
                     <el-input v-model="form.address" autocomplete="off" placeholder="具体地址" />
                   </el-form-item>
                 </el-form>
                 <template #footer>
                   <div class="dialog-footer">
                     <el-button @click="dialogFormVisible = false" style="background-color:#dbeae6;border:1px solid #dbeae6; color:#14a675">取消</el-button>
                     <el-button type="primary" @click="dialogFormVisible = false" style="background-color:#14a675;border:1px solid #14a675;">
                       确认
                     </el-button>
                   </div>
                 </template>
               </el-dialog>
               
           </el-icon>
        
        </div>
        <div style=" display: flex; margin-bottom: 2px;padding:0px;white=1656px">

        
        <el-form size="small" label-position="top"  >
         <el-form-item label="宗地预编码" style="font-size: 10px;margin-left: 15px;"> 
           <!-- 输入框 -->
           <el-input v-model="sizeForm.name" style=" width: 330px;color: rgb(236, 239, 241);background:#F5F6F8;border-color:white" />
         </el-form-item>
        </el-form>
        <el-form size="small" label-position="top"  >
         <el-form-item label="权利人名字" style="font-size: 10px;margin-left: 15px;"> 
           <el-input v-model="sizeForm.name" style="width: 330px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>
        <el-form size="small" label-position="top"  >
         <el-form-item label="权利人类型" style="font-size: 10px;margin-left: 15px;"> 
           <el-input v-model="sizeForm.name" style="width: 330px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>
        <el-form size="small" label-position="top"  >
         <el-form-item label="调查状态" style="font-size: 10px;margin-left: 15px;"> 
           <el-input v-model="sizeForm.name" style="width: 330px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>
       </div>
       <div >
         <el-form  size="small"  label-position="top" >
         <el-form-item label="坐落" style="font-size: 10px;margin-left: 15px;" > 
           <el-input v-model="sizeForm.name" style="width: 330px;" />
           
         </el-form-item>
        </el-form>
       </div>
       
       </div>
       <!-- 第二排 -->
       <div>
        <div style="font-size: 13px;margin-left: 15px;"> 权利人基本信息
         <el-icon :size="size" :color="color">
             <Edit />
           </el-icon>
         </div>
        <div style=" display: flex; margin-bottom: 2px;">

        
        <el-form size="small" label-position="top"  >
         <el-form-item label="权利人名称" style="font-size: 10px;margin-left: 15px;"> 
           <el-input v-model="sizeForm.name" style="width: 330px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>
        <el-form size="small" label-position="top"  >
         <el-form-item label="户号" style="font-size: 10px;margin-left: 15px;"> 
           <el-input v-model="sizeForm.name" style="width: 330px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>
        <el-form size="small" label-position="top"  >
         <el-form-item label="身份证种类" style="font-size: 10px;margin-left: 15px;"> 
           <el-input v-model="sizeForm.name" style="width: 330px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>
        <el-form size="small" label-position="top"  >
         <el-form-item label="证件号" style="font-size: 10px;margin-left: 15px;"> 
           <el-input v-model="sizeForm.name" style="width: 330px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>
       </div>
       <div style="display: flex;">
         <el-form  size="small"  label-position="top" >
         <el-form-item label="联系电话" style="font-size: 10px;margin-left: 15px;" > 
           <el-input v-model="sizeForm.name" style="width: 330px;" />
         </el-form-item>
        </el-form>
        <el-form size="small" label-position="top"  >
         <el-form-item label="地址" style="font-size: 10px;margin-left: 15px;"> 
           <el-input v-model="sizeForm.name" style="width: 330px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>
       </div>
       
       </div>
       <!-- 第三排 -->
       <div>
        <div style="font-size: 13px;margin-left: 15px;"> 调查信息
         <el-icon :size="size" :color="color">
             <Edit />
           </el-icon>
       </div>
        <div style=" display: flex; margin-bottom: 2px;">

        
        <el-form size="small" label-position="top"  >
         <el-form-item label="造林年度" style="font-size: 10px;margin-left: 15px"> 
           <el-input v-model="sizeForm.name" style="width: 212px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>
        <el-form size="small" label-position="top"  >
         <el-form-item label="小地名" style="font-size: 10px;margin-left: 15px;"> 
           <el-input v-model="sizeForm.name" style="width: 212px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>
        <el-form size="small" label-position="top"  >
         <el-form-item label="林班" style="font-size: 10px;margin-left: 15px;"> 
           <el-input v-model="sizeForm.name" style="width: 212px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>
        <el-form size="small" label-position="top"  >
         <el-form-item label="小斑" style="font-size: 10px;margin-left: 15px;"> 
           <el-input v-model="sizeForm.name" style="width: 212px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>
        <el-form size="small" label-position="top"  >
         <el-form-item label="面积（亩）" style="font-size: 10px;margin-left: 15px;"> 
           <el-input v-model="sizeForm.name" style="width: 212px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>
        <el-form size="small" label-position="top"  >
         <el-form-item label="起源" style="font-size: 10px;margin-left: 15px;"> 
           <el-input v-model="sizeForm.name" style="width: 212px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>

       </div>
       <div style="display: flex;">
         <el-form  size="small"  label-position="top" >
         <el-form-item label="株数" style="font-size: 10px;margin-left: 15px;" > 
           <el-input v-model="sizeForm.name" style="width: 330px;" />
         </el-form-item>
        </el-form>
        <el-form size="small" label-position="top"  >
         <el-form-item label="主要林种" style="font-size: 10px;margin-left: 15px;"> 
           <el-input v-model="sizeForm.name" style="width: 330px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>
        <el-form size="small" label-position="top"  >
         <el-form-item label="林种" style="font-size: 10px;margin-left: 15px;"> 
           <el-input v-model="sizeForm.name" style="width: 330px;color: rgb(236, 239, 241);" />
         </el-form-item>
        </el-form>
       </div>
       
       </div>
       <!-- 第四排 -->
       <div style="margin-left:15px;margin-right:15px">
       <el-table :data="tableData"  :header-cell-style="{backgroundColor:'#f5f6f8'}">
         <el-table-column prop="date" label="成员姓名" width="180"/>
         <el-table-column prop="name" label="与户主关系" width="180" />
         <el-table-column prop="address" label="身份证编号" />
         <el-table-column prop="beizhu" label="成员备注" />
           <el-table-column prop="address" label="操作">
           <el-button type="success" plain size="small" style="background-color: white;border-color:white;margin-left:-10px">编辑</el-button>
           <el-button type="info" plain size="small"  style="background-color: white;border-color:white;">删除人员</el-button>
         </el-table-column>
       </el-table>
     </div>
       </el-tab-pane>
       <el-tab-pane label="图斑" style="font-size: 13px;">Task
         <el-form  label-position="top">
         <el-form-item label="Activity name"  > 
           <el-input v-model="sizeForm.name" style="width: 200px;" />
         </el-form-item>
        </el-form>
       
       </el-tab-pane>
       <el-tab-pane label="附件" style="font-size: 13px;">Task
         <el-form  label-position="top">
         <el-form-item label="Activity name"  > 
           <el-input v-model="sizeForm.name" style="width: 200px;" />
         </el-form-item>
        </el-form>
       
       </el-tab-pane>
        <div style="display:flex;justify-content:center" >
         <!-- 新增按钮 -->
         <el-button type="success" plain  style="margin-top:20px;width:100px;border-color:white;">新增</el-button>
        </div>
     </el-tabs>
     
</template>
<script  setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
import { reactive, ref } from 'vue'

// const size = ref('default')


const sizeForm = reactive({
  name: '',
})
// 第四排数据
const tableData = [
  {
    date: '张三',
    name: '户主',
    address: '123456789101',
    beizhu:"-",
  },
  {
    date: '李四',
    name: '户主',
    address: '123456789101',
    beizhu:"-",
  },
  {
    date: '王五',
    name: '户主',
    address: '123456789101',
    beizhu:"-",
  },

]
const size= 15
const color='grey'
// 下拉框
import { ArrowDown } from '@element-plus/icons-vue'
// 头像
import { UserFilled } from '@element-plus/icons-vue'
 function add() {
  alert('2222')
  
 }

const dialogFormVisible = ref(false)
const formLabelWidth = '100px'
const form = reactive({
  name: '',
  address: '',
  surveytype: '',
  peopeltype: '',
  delivery: false,
  type: [],
  peopelname: '',
  desc: '',
})


    




</script>
<style >
.el-menu{
  border-right: none !important;;
}
/* 下拉框 */
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
/* 下拉框选中背景颜色变化 */
.el-menu-item.is-active {
  background-color: #edf8f4!important;
  text-color:#21ab7d;
}
/* 头像 */

/* 输入框颜色 */
.el-input--small .el-input__wrapper {
  /* 取消el-input的阴影 */
  box-shadow:none;
  background:#F5F6F8;
    
}
/* .el-table__body, .el-table__footer, .el-table__header{
  background-color:#f5f6f8;
} */
/* .side{
  width: 216px;
  height: 1268px;
  top: 71px;
  left: 0px;
} */
.el-aside{
  height: 100vh; /* 设置高度为200px */
}

.el-dialog__header.show-close {
  border-bottom:1px solid #dddfe5;
  margin-bottom:20px
}
</style>