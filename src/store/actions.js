export default {
  changeToken (ctx, token) { // 存储用户token
    ctx.commit('changeToken', token)
  },
  changeNavTs (ctx, navTs) { // 存储伸缩导航按钮展开收缩状态
  // debugger debug断点
    ctx.commit('changeNavTs', navTs)
  },
  changeNavTsIcon (ctx, navTsIcon) { // 存储伸缩导航按钮展开收缩状态图标
    ctx.commit('changeNavTsIcon', navTsIcon)
  },
  changeHeaderLeftNav (ctx, headerLeftNav) { // 存储页眉导航数据，左导航
    ctx.commit('changeHeaderLeftNav', headerLeftNav)
  },
  changeHeaderRightNav (ctx, headerRightNav) { // 存储页眉导航数据，右导航
    ctx.commit('changeHeaderRightNav', headerRightNav)
  },
  changeHomeId (ctx, homeId) { // 存储一级导航首页按钮id
    ctx.commit('changeHomeId', homeId)
  },
  changeDispatchId (ctx, dispatch) { // 存储一级导航调度管理按钮id
    ctx.commit('changeDispatchId', dispatch)
  },
  changeUserId (ctx, userId) { // 存储一级导航用户管理按钮id
    ctx.commit('changeUserId', userId)
  },
  changeSystemSettingsId (ctx, systemSettingsId) { // 存储一级导航系统设置按钮id
    ctx.commit('changeSystemSettingsId', systemSettingsId)
  },
  changeAsideHomeNav (ctx, asideHomeNav) {
    ctx.commit('changeAsideHomeNav', asideHomeNav)
  },
  changeAsideHomeNavBox (ctx, asideHomeNavBox) {
    ctx.commit('changeAsideHomeNavBox', asideHomeNavBox)
  },
  changeUserInfo (ctx, userInfo) {
    ctx.commit('changeUserInfo', userInfo)
  },
  changeMainHeight (ctx, mainHeight) {
    ctx.commit('changeMainHeight', mainHeight)
  }
}
