// 导入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import Login from './components/login/Login.vue'
import Home from './components/home/Home.vue'
// 创建路由实例
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})
// 导出路由
export default router
