// import Vue from 'vue'
import {createWebHistory,createRouter} from "vue-router"
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

// Vue.use(VueRouter)
// 找到路由的定义 找到组件de vue文件


const routes =[
    // {
    //     path:'/',
    //     name:'home',
    //     conponent:HomeView
    // },
    {
        path:'/about',
        name:'about',
        conponent:AboutView
    },
    {
        path:'/1-1',
        name:'about',
        conponent:AboutView
    },
    {
        path:'/2-powerpeople',
        name:'powerpeople',
        component: () => import('../views/powerpeople.vue') 
    },
    {
        path:'/2-2',
        name:'zongdiguangli',
        component: () => import('../views/Zongdiguangli.vue') 
    },
    {
        path:'/zhuye',
        name:'home',
        component: () => import('../views/Home.vue') 
    }
    
    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  })
export default router
// 把获取到的数据通过调用JSON.parse()方法转换成对象


