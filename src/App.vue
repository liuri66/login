<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->


<template>
  
    <!-- <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink> -->
    <div class="common-layout" >
      <!-- 头部 -->
    <el-container style="">
      <el-header style="background-color: white;align-content: center; font-size: 15px;height:70px;border: 1px solid #dddfe5" >
        <span style="font-family: PangMenZhengDao;color: #14A675;font-weight: 400;font-size: 20px;">林权调查系统</span>
        <div style="display: flex;float: right;">
          <div style="margin-right: 10px;margin-top: 4px;"><span>首页</span></div>
          <div style="margin-right: 10px;margin-top: 4px;"><el-icon ><Operation /></el-icon></div>
          <div style="margin-right: 10px;margin-top: 4px;"><el-icon><BellFilled /></el-icon></div>
          <div style="margin-right: 10px;margin-top: 4px;">
             <!-- 下拉框 -->
            <el-dropdown >
              <span class="el-dropdown-link">
                简体中文
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>繁体中文</el-dropdown-item>
                  <el-dropdown-item>英文 </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <!-- 头像 -->
          <div >
            <el-avatar size="small" :icon="UserFilled" />
          </div>
         

        </div>
      
      
      
      </el-header>
    
    </el-container> 
    <!-- 侧边栏 -->
    <el-container>
      <div class="side">
        <el-aside  style="overflow: hidden; background-color:white; ">
          
        <!-- 第一个下拉菜单 -->
       
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :default-active="$route.path" router
          
          >
            <el-sub-menu index="/home" style="padding: 0px;">
              <template #title style="padding: 0px;">
                <el-icon><Opportunity /></el-icon>
                <span style="font-family: Microsoft YaHei;color: #343843;font-weight: 400;font-size: 16px;font-style: normal;text-decoration: none;text-align: left;" >林权管理</span>
              </template>
              <el-menu-item-group >
                <el-menu-item index="/1-1">.....</el-menu-item>
                <el-menu-item index="1-2">......</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        
        <!-- 第二下拉菜单 -->
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            active-text-color="#21ab7d"
            :router="true"
          >
            <el-sub-menu index="2" style="padding: 0px;">
              <template #title style="padding: 0px;">
                <el-icon><Opportunity /></el-icon>
                <span>林权调查</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/2-powerpeople">权利人调查管理</el-menu-item>
                <el-menu-item index="2-2">宗地管理</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
          
            
        </el-aside>
      </div>
        <!-- 主体板块 -->
        <div style="border-radius: 4px;flex:1">
          <div style="background-color: #FFFFFF;border-left:1px solid #dddfe5;border-right:1px solid #dddfe5;border-left:1px solid #dddfe5;border-bottom:1px solid #dddfe5; display:flex; justify-content : space-between">
            <div style="display:flex;align-items:center"><el-icon ><ArrowLeft /></el-icon><el-icon><HomeFilled /></el-icon></div>
            <div style="display:flex;align-items:center">
              <div style="border:1px solid #dddfe5;">
              <el-icon><ArrowDown /></el-icon>
              </div>
              <div style="border:1px solid #dddfe5;">
              <el-icon><ArrowRight /></el-icon>
              </div>
            </div>
          </div>
        <el-main  >
          
          <!-- 路由放这里 -->
          <router-view></router-view>
         <!-- 接口 -->
         <div style="display: flex;align-items:center;justify-content:center;background:#FFFFFF;margin:0 250px">
              <!-- <el-table :data="tableData[0].children" style="width: 100%">
                <el-table-column prop="id" label="id" width="180" />
                <el-table-column prop="name" label="Name" width="180" /> -->
                <!-- <el-table-column prop="address" label="Address" /> -->
              <!-- </el-table> -->
            <div style="text-align:center ">
              <div>
              <img src="https://ts1.cn.mm.bing.net/th/id/R-C.6efb1b9f5909ee4ba85010773bf8f796?rik=3dXiDwAfPoJV%2bg&riu=http%3a%2f%2fimg.yipic.cn%2fthumb%2f784da902%2fbac045c0%2f9289acae%2f07982f52%2fbig_784da902bac045c09289acae07982f52.png%3fx-oss-process%3dimage%2fformat%2cwebp%2fsharpen%2c100&ehk=DVOlh90mgHWkd7Osc3HvpUOpJAe1yAnuuJ2EccqiUQQ%3d&risl=&pid=ImgRaw&r=0"
              style="height: 80px; width:80px;margin-top:20px;border-radius: 40px;" alt=""></div>
              <div >
                <span style="font-Weight: 'bold';font-size: 25px;">您好，欢迎来到田长巡管理端</span>
              </div>
              <div style="margin: 50px 0px;">
                 <div style="margin-bottom:20px;">
                  <div>
                    <el-input
                    v-model="input"
                    style="width: 240px"
                    placeholder="请输入手机号"
                    clearable
                  />
                    
                    <!-- <el-icon size="small"><CircleClose /></el-icon> -->
                  </div>
                  </div>
                  <div>
                    <el-input
                    v-model="input2"
                    style="width: 240px"
                    type="password"
                    placeholder="请输入密码"
                    show-password
                  />
                    <!-- <el-icon size="small" style=""><View /></el-icon> -->
                  </div>
                  <!-- <div style="display: flex;justify-content: space-between;margin:10px 45px ;color:#757479"> -->
                    <div style="display:flex;justify-content:center;">
                      <div style="display: flex;justify-content: space-between;color:#757479">
                        <div>
                          <el-checkbox v-model="checked2" style="color:#757479">记住密码</el-checkbox>
                        </div>
                        <div style="margin: 6px 0px 5px 27px">
                          <div style="display: flex; font-size: 14px; ">

                        
                            <span >用户注册</span>
                            <div style="width: 2px; height:10px;background:#dddfe5;margin:7px 10px 0px 10px"></div>
                            <span>修改密码</span>
                          </div>
                        </div>
                    </div>
                </div>
                  
                    
                  
                    
                </div>
                <div style="margin: 0 0 50px 0px ;">
                <div><el-button type="info" round style="width: 240px;background:#c8c8c8;border:none;color:#757479;margin: 0 0 10px 0px ;" @click="handleLogin">登录</el-button></div>
                <div style="">
                  <el-checkbox v-model="checked2"><span style="color: #343843;">我已阅读并同意</span> <span style="color: #409eff;">《用户隐私协议》</span></el-checkbox>
                </div>
              </div>
                <!-- 设置flex布局 -->
                <!-- 只需把要处理的块状元素的父元素设置display:flex,justify-content:center; 子元素就水平居中了-->
                <div style="display:flex;justify-content:center;">
                  <div style="width: 50px; height:1px;background:#dddfe5;margin:12px 10px 12px 10px;"></div>
                  <div><span style="font-size: 10px;">第三方用户登录</span></div>
                  <div style="width: 50px; height:1px;background:#dddfe5;margin:12px 10px 12px 10px"></div>
                </div>
                <div>
                  <img src="https://ts1.cn.mm.bing.net/th/id/R-C.6efb1b9f5909ee4ba85010773bf8f796?rik=3dXiDwAfPoJV%2bg&riu=http%3a%2f%2fimg.yipic.cn%2fthumb%2f784da902%2fbac045c0%2f9289acae%2f07982f52%2fbig_784da902bac045c09289acae07982f52.png%3fx-oss-process%3dimage%2fformat%2cwebp%2fsharpen%2c100&ehk=DVOlh90mgHWkd7Osc3HvpUOpJAe1yAnuuJ2EccqiUQQ%3d&risl=&pid=ImgRaw&r=0"
                  style="height: 50px; width:50px; border-radius: 25px;" alt="">
                </div>
                
              
            </div>
            
          </div>
          <div style="background:#FFFFFF;margin:0 250px;padding:20px 0px">
            <div style="background-color: #f2f2f2;border-radius:10px;font-size:10px;width:60px;margin-left: auto;  text-align:center;">V4.1.0</div>
          </div>
          
         
          
        </el-main>
      </div>
      </el-container>
    </div>
 
</template>

<script  setup>
import { onMounted, reactive, ref } from 'vue'
import axios from "axios";
// onMounted(()=>{
//   // 请求地址
//   axios.post("https://app.apifox.com/project/4467073/login",{mobile:123456789101, password:123456}).then(res=>{
//     console.log("postRes",res);
//   })

// })
const handleLogin = () => {

axios.post('https://app.apifox.com/project/4467073/login', {
    mobile: '18600001111',
    password: '123456'
  }).then(() => {
    console.log('登录成功')
  })
}

const input = ref(true)
const input2 = ref(true)
const checked2 = ref(false)
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Message,
} from '@element-plus/icons-vue'
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

// const size = ref('default')


const sizeForm = reactive({
  name: '',
})
const tableData = ref([])
// 定义一个方法，
const laod = async () => {
  try {
    let {data} = await axios("https://artemis.gxzrzyjc.com/milestone-admin/sys/region/region")
    tableData.value= data.data
    console.log(tableData.value)

  } catch (error) {
    console.log(error)
  }
}
laod()

// 第四排数据 单引号
// const tableData = [
//   {
//     date: '张三',
//     name: '户主',
//     address: '123456789101',
//     beizhu:"-",
//   },
//   {
//     date: '李四',
//     name: '户主', 
//     address: '123101',
//     beizhu:"-",
//   },
//   {
//     date: '王五',
//     name: '户主',
//     address: '123456789101',
//     beizhu:"-",
//   },
// ]
const size= 15
const color='grey'
// 下拉框
import { ArrowDown } from '@element-plus/icons-vue'
// 头像
import { UserFilled } from '@element-plus/icons-vue'

 function add() {
  console.log('2222')
  
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
.el-input .el-input__wrapper {
  border:none;
  border-bottom:1px solid #dcdfe6;
  box-shadow:none;
}

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
  background-color: #edf8f4 !important;
  
  color:#21ab7d;
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