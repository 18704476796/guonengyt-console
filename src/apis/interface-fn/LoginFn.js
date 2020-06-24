// 登录页面接口函数
import {LOGIN, LOGIN_IMG} from '../interface.js' // 接口调用文件
export default {
  async loginImg (_this) { // 登录页面图片接口函数
    let res = await LOGIN_IMG()
    const data = res.data
    _this.loginBack = data.company[0].backgroundUrl
    _this.loginLogo = data.company[0].logoUrl
    console.log(data)
    // 临时注释。注释原因，服务器数据库暂时无图片
    // switch (data.status) {
    //   case '1000':
    //     _this.loginBack = data.backgroundUrl
    //     _this.loginLogo = data.logoUrl
    //     break
    //   default:
    //     _this.$message({showClose: true, message: '登录页面图片未知错误，请联系网站管理员。', type: 'error'})
    //     break
    // }
  },
  async login (_this) { // 登录接口函数
    const formData = { // 请求数据
      userName: _this.loginForm.user,
      password: _this.loginForm.password
    }
    let res = await LOGIN(formData)
    const data = res.data
    switch (data.status) {
      case '1000':
        _this.$store.dispatch('changeToken', data.token)
        _this.$router.push('/')
        break
      case '1001':
        _this.$message({showClose: true, message: '您的验证码不正确，请重新输入', type: 'error'})
        break
      case '1002':
      case '1003':
        _this.$message({showClose: true, message: '您的帐号或密码不正确，请重新输入', type: 'error'})
        break
      case '1004':
        _this.$message({showClose: true, message: '该用户已锁定，请联系管理员', type: 'error'})
        break
      case '1005':
        _this.$message({showClose: true, message: '该用户已注销', type: 'error'})
        break
      case '1006':
        _this.$message({showClose: true, message: '帐号与密码为必填项', type: 'error'})
        break
      default:
        _this.$message({showClose: true, message: '登录验证未知错误，请联系网站管理员。', type: 'error'})
        break
    }
  }
}
