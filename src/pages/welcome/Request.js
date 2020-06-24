import Welcome from '@/apis/interface-fn/WelcomeFn.js' // 接口调用文件
export default {
  getWelcomeInfo (_this) {
    Welcome.getWelcomeInfo(_this)
  }
}
