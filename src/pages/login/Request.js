import Login from '@/apis/interface-fn/LoginFn.js' // 接口调用文件
export default {
  loginImg (_this) { // 登录页面图片接口函数
    Login.loginImg(_this)
  },
  login (_this, formName) { // 登录接口函数
    _this.$refs[formName].validate((valid) => {
      if (valid) { // 表单验证通过
        Login.login(_this)
      } else {
        return false // 表单验证不通过
      }
    })
  }
}
