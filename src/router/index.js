import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/pages/home/Home.vue'], resolve),
      meta: {
        requireAuth: true // 判断是否需要登录
      }
    },
    { // 账号: 13944829902, 密码: 123456
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/pages/login/Login.vue'], resolve)
    }
  ]
})
