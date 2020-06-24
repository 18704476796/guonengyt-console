import Home from '@/apis/interface-fn/HomeFn.js' // 接口调用文件
export default {
  getHomeInfo (_this) {
    Home.getHomeInfo(_this)
  }
}
