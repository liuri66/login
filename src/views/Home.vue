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
        <el-main style="display: flex;align-items:center;justify-content:center;">
          
          <!-- 路由放这里 -->
          <router-view></router-view>
         <!-- 接口 -->
          <!-- / 代表根目录，慎用
            …/ 代表上一级目录
            …/…/ 代表上两级目录
            /… 代表下级目录
            /…/… 代表下两级目录 -->
222
        </el-main>
      </div>
      </el-container>
    </div>
  
  </template>
  
  <script  setup>
  import { onMounted, reactive, ref } from 'vue'
  // import axios from "axios";
  // import { ElMessage } from 'element-plus'
  // import { savatoken,gettoken,removetoken } from "./api/indextwo.js";
  // const checked4 = ref(false)
  // onMounted(()=>{
  //   // 请求地址
  //   axios.post("https://app.apifox.com/project/4467073/login",{mobile:123456789101, password:123456}).then(res=>{
  //     console.log("postRes",res);
  //   })
  // })
  // 在setup函数中定义双向绑定的数据值
  // const data =reactive({
  // mobile: '',
  //   password: ''
  // })
  // 获取token
  // const a = gettoken()
  // console.log(a);
  // if (a) {
  //     // 弹出框
  //     ElMessage({
  //     message: '获取token成功',
  //     type: 'success',
  //   });
  // } else {
  //    // 弹出框
  //    ElMessage({
  //     message: '请登录',
  //     type: 'success',
  //   });
  // }
  
  
  // const login = () => {
  // // post方法获得后端接口 token存在数据中code: 0, data: "3445345dffdgdfgdfgdfgdfg", msg: "ok"
  // axios.post('https://mock.apifox.com/m1/4467073-4113341-default/login', {
  //   mobile: data.mobile,
  //   password: data.password
  // }).then((res) => {
  //   console.log('登录成功');
  //   // 输出接口的信息 res.data.data是token信息
  //   // console.log(res.data.data);
  //   //调用index文件中声明的方法保存token
  //   // savatoken(res.data.data);
    
  //   // 弹出框
  //   ElMessage({
  //     message: '登录成功',
  //     type: 'success',
  //   });
  //   // this.$router.push('/A')
  //   console.log(data);
  // })
  // }
  // 清除token
  // const c =()=>{
  //   // 调用函数
  //   removetoken();
  // }
  
  
  // const input = ref(true)
  // const input2 = ref(true)
  // const checked2 = ref(false)
  // export default {
  //       name: 'Login',
  //        data() {
  //            return {
  //                input: '',
  //                input2: ''
  //            }
  //        },
  //        methods: {
  //            login() {
  //                   console.log(this.input)
  //                   console.log(this.input2)
  //            }
  //        }
  //    }
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
  // 连接到接口数据
  const tableData = ref([])
  // 定义一个方法，
  // const laod = async () => {
  // try {
  //   let {data} = await axios("https://artemis.gxzrzyjc.com/milestone-admin/sys/region/region")
  //   tableData.value= data.data
  //   console.log(tableData.value)
  
  // } catch (error) {
  //   console.log(error)
  // }
  // }
  // laod();
  
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
  <style  scoped>
  .el-input .el-input__wrapper {
  border:none;
  border-bottom:1px solid #dcdfe6;
  box-shadow:none;
  }
  /deep/ .el-input__wrapper {
    background-color: transparent;
  }
  /deep/.el-input__inner {
    border: 0px;
    box-shadow: 0 0 0 0px;
  }
  .AA{
  background-image: url('img/bg.png');
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
  
  
  /deep/ .el-checkbox.el-checkbox--large .el-checkbox__label  {
    color: #757479;
    font-weight: 700;
    font-size: 32px;
  }
  /* 记住密码选框的位置 */
  /deep/ .el-checkbox.el-checkbox--large .el-checkbox__inner {
    width: 35px;
    height: 35px;
    border-radius: 2px;
    border: 2px solid #707070;
    
  }
  /* 输入框文字大小 */
  ::v-deep .el-input__inner::placeholder {
  
    color: #C8C8C8;
    font-family: PingFang SC;
    font-weight: 400;
    font-size:25px;
  }
  
  /* 增加clearable图标的大小 */
  .el-input__suffix .el-input__clear {
  font-size: 20px; /* 修改为你想要的大小 */
  }
  /*登录文字 */
  /deep/ .el-button>span{
    color: #757479;
    font-weight: 700;
    font-size: 39px;
  }
  /deep/.el-checkbox__inner {
    width: 38px;
    height: 38px;
    border-radius: 2px;
    border: 2px solid #707070;
  }
  /*输入框高度*/
  /deep/.el-input--large .el-input__inner {
    --el-input-inner-height: 50px;
  }
  
  </style>2