// home页面初始化及导航接口
import {GET_INDEX, GET_MENULIST} from '../interface.js' // 接口调用文件
export default {
  async getHomeInfo (_this) { // 登录成功首页初始化调用页眉logo、left及right导航数据接口
    let res = await GET_INDEX()
    const data = res.data
    switch (data.status) {
      case '1000':
        console.log(res.data)
        _this.headerLogo = data.data.headerLogo
        _this.$store.dispatch('changeHeaderLeftNav', data.data.headNavLeft)
        _this.$store.dispatch('changeHeaderRightNav', data.data.headNavRight)
        for (let i = 0; i < data.data.headNavRight.length; i++) {
          if (data.data.headNavRight[i].menuName === '主页') {
            _this.$store.dispatch('changeHomeId', data.data.headNavRight[i].id)
          } else if (data.data.headNavRight[i].menuName === '调度管理') {
            _this.$store.dispatch('changeDispatchId', data.data.headNavRight[i].id)
          } else if (data.data.headNavRight[i].menuName === '用户管理') {
            _this.$store.dispatch('changeUserId', data.data.headNavRight[i].id)
          } else if (data.data.headNavRight[i].menuName === '系统设置') {
            _this.$store.dispatch('changeSystemSettingsId', data.data.headNavRight[i].id)
          }
        }
        this.getMenuList(_this, _this.$store.state.homeId)
        break
      case '1001':
      case '1002':
        _this.$store.dispatch('changeToken', '')
        _this.$router.push('/login')
        _this.$message({showClose: true, message: '身份失效，请重新登录', type: 'error'})
        break
      case '1006':
        _this.$message({showClose: true, message: '程序错误，请联系管理员。（错误原因：服务器未收到token）', type: 'error'})
        break
      default:
        _this.$message({showClose: true, message: '程序初始化错误，请联系网站管理员。', type: 'error'})
        break
    }
  },
  async getMenuList (_this, _menuId) { // 登录成功首页初始化调用页眉logo、left及right导航数据接口
    const formData = { // 请求数据
      menuId: _menuId // 初始化显示主页id
    }
    let res = await GET_MENULIST(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$store.dispatch('changeAsideHomeNav', data.data.asideHomeNav)
      _this.$store.dispatch('changeUserInfo', data.data.userInfo)
    }
  }
}
