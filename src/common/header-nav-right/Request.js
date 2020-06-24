import Home from '@/apis/interface-fn/HomeFn.js' // 接口调用文件
export default {
  headerNav (_this, navId) { // 点击页眉导航请求函数
    Home.getMenuList(_this, navId)
  }
}
