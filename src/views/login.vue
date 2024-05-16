
<template>
  
    <!-- <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink> -->
    <div class="common-layout" >
    <!-- 侧边栏 -->
    <el-container>
        <!-- 主体板块 -->
        <el-main style="display: flex;align-items:center;justify-content:center;">
          <!-- 路由放这里 -->
          <router-view></router-view>
         <!-- 接口 -->
          <!-- / 代表根目录，慎用
            …/ 代表上一级目录
            …/…/ 代表上两级目录
            /… 代表下级目录
            /…/… 代表下两级目录 -->
          <div class="AA" style=" display: flex;align-items:center;justify-content:center;width:1536px; position: relative; ">
              <!-- <el-table :data="tableData[0].children" style="width: 100%">
                <el-table-column prop="id" label="id" width="180" />
                <el-table-column prop="name" label="Name" width="180" /> -->
                <!-- <el-table-column prop="address" label="Address" /> -->
              <!-- </el-table> -->
            <div style="text-align:center; ">
              <div>
              <img src="./img/-s-LOGO.png"
              style="height: 180px; width:180px;margin-top:253px;border-radius: 40px;" alt=""></div>
              <div style="margin-top: 50px;">
                <span style="font-weight: 900;font-size: 70px;">您好，欢迎来到田长巡管理端</span>
              </div>
              <div style="width:800px ;margin: 130px 368px;">
                <div style="margin: 50px 0px;">
                  <el-input
                    size="large"
                    v-model="data.mobile"
                    style="width: 800px;height:80px"
                    placeholder="请输入手机号"
                    clearable
                  />
                </div>
                <div>
                  <el-input
                  size="large"
                    v-model="data.password"
                    style="width: 800px;height:80px"
                    type="password"
                    placeholder="请输入密码"
                    show-password
                  />
                </div>
                
                  <!-- <div style="display: flex;justify-content: space-between;margin:10px 45px ;color:#757479"> -->
                    <div style=" ">
                      <div style="display: flex; color: #757479;
                        font-weight: 700;
                        font-size: 32px;
                        font-style: normal;margin-top:50px">
                        <div style="justify-content: flex-start;
                        display: flex;">
                          <el-checkbox v-model="checked4" label="记住密码" size="large" />
                        </div>
                        
                          <div style="flex:1;           
                          justify-content: flex-end;
                          display: flex; margin-left:300px">
                          <div><span >用户注册</span></div>
                          <div><span @click="c">清除缓存</span></div>
                              <div style="width: 1px;
                              height: 31px;
                              
                              background-color: #757479;margin:10px 32px 0px 32px"></div>
                              <div><span>修改密码</span></div>
                              
                            </div>
                        
                     </div>
                   </div>
                  
                    
                  
                    
               
                <div style="margin-top:190px ">
                  <div><el-button type="info" round style="width: 800px;height: 120px;background-color: #C8C8C8;border-radius: 60px;color:#757479; border:none;" @click="login">登录</el-button></div>
                  <div style="margin-top: 45px">
                    <el-checkbox v-model="checked2"><span style="color: #2D8DD3;
                      font-weight: 400;
                      font-size: 32px;">我已阅读并同意</span> <span style="color: #121214;font-weight: 400;
                      font-size: 32px;">《用户隐私协议》</span></el-checkbox>
                  </div>
                </div>
                <!-- 设置flex布局 -->
                <!-- 只需把要处理的块状元素的父元素设置display:flex,justify-content:center; 子元素就水平居中了-->
                <div style="margin-top:205px">
                  <!-- style="position: absolute;top:50%;left:50%;" -->
                 
                    <div style="display:flex;justify-content:center;">
                      <div style="width: 180px;
                      height: 2px;
                      background-color: #EEEEEE;margin:23px 57px 23px 10px
                      "></div>
                      <div><span style="font-family: PingFang SC;
                        color: #757479;
                        font-weight: 400;
                        font-size: 32px;">第三方用户登录</span></div>
                      <div style="width: 180px;
                      height: 2px;
                      background-color: #EEEEEE;margin:23px 10px 23px 57px"></div>
                    </div>
                    <div style="margin-top: 50px;">
                      <img src="./img/log_icon_wechat.png"
                      style="height: 100px; width:100px; border-radius: 25px;" alt="">
                    </div>
                  
                </div>
            </div>
            <!-- 用z_index固定 -->
            <div style="background:#FFFFFF;width:1536px; position: absolute;
            bottom: 0px;
            right: 0;border-radius:10px;font-size:10px;width:60px;  text-align:center;background-color: #f2f2f2;">
              V4.1.0
            </div>
          </div>
          </div>
          
          
         
          
        </el-main>
   
      </el-container>
</div>
  
  </template>
  
  <script  setup>
  import { onMounted, reactive, ref } from 'vue'
  import axios from "axios";
  import { ElMessage } from 'element-plus'
  import { savatoken,gettoken,removetoken } from "./api/indextwo.js";
  const checked4 = ref(false)
  // onMounted(()=>{
  //   // 请求地址
  //   axios.post("https://app.apifox.com/project/4467073/login",{mobile:123456789101, password:123456}).then(res=>{
  //     console.log("postRes",res);
  //   })
  // })
  // 在setup函数中定义双向绑定的数据值
  const data =reactive({
  mobile: '',
    password: ''
  })
  // 获取token
  const a = gettoken()
  console.log(a);
  if (a) {
      // 弹出框
      ElMessage({
      message: '获取token成功',
      type: 'success',
    });
  } else {
     // 弹出框
     ElMessage({
      message: '请登录',
      type: 'success',
    });
  }
  
  
  const login = () => {
  // post方法获得后端接口 token存在数据中code: 0, data: "3445345dffdgdfgdfgdfgdfg", msg: "ok"
  axios.post('https://mock.apifox.com/m1/4467073-4113341-default/login', {
    mobile: data.mobile,
    password: data.password
  }).then((res) => {
    console.log('登录成功');
    // 输出接口的信息 res.data.data是token信息
    // console.log(res.data.data);
    //调用index文件中声明的函数 保存token
    savatoken(res.data.data);
    
    // 弹出框
    ElMessage({
      message: '登录成功',
      type: 'success',
    });
    // this.$router.push('/A')
    console.log(data);
  })
  }
  // 清除token
  const c =()=>{
    // 调用函数
    removetoken();
  }
  
  
  const input = ref(true)
  const input2 = ref(true)
  const checked2 = ref(false)
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
  const laod = async () => {
  try {
    let {data} = await axios("https://artemis.gxzrzyjc.com/milestone-admin/sys/region/region")
    tableData.value= data.data
    console.log(tableData.value)
  
  } catch (error) {
    console.log(error)
  }
  }
  laod();
  
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