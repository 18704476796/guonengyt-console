export default {
  changeToken (state, token) { // token存储
    state.token = token
    try {
      localStorage.token = token
    } catch (e) {}
  },
  changeNavTs (state, navTs) { // 伸缩导航横向伸缩
    state.navTs = navTs
    try {
      localStorage.navTs = navTs
    } catch (e) {}
  },
  changeNavTsIcon (state, navTsIcon) { // 伸缩导航横向伸缩图标
    state.navTsIcon = navTsIcon
    try {
      localStorage.navTsIcon = navTsIcon
    } catch (e) {}
  },
  changeHeaderLeftNav (state, headerLeftNav) { // 存储一级导航页眉导航数据，左导航
    state.headerLeftNav = headerLeftNav
  },
  changeHeaderRightNav (state, headerRightNav) { // 存储一级导航页眉导航数据，右导航
    state.headerRightNav = headerRightNav
  },
  changeHomeId (state, homeId) { // 存储一级导航首页按钮id
    state.homeId = homeId
  },
  changeDispatchId (state, dispatch) { // 存储一级导航调度管理按钮id
    state.dispatch = dispatch
  },
  changeUserId (state, userId) { // 存储一级导航用户管理按钮id
    state.userId = userId
  },
  changeSystemSettingsId (state, systemSettingsId) { // 存储一级导航系统设置按钮id
    state.systemSettingsId = systemSettingsId
  },
  changeAsideHomeNav (state, asideHomeNav) {
    state.asideHomeNav = asideHomeNav
  },
  changeAsideHomeNavBox (state, asideHomeNavBox) {
    state.asideHomeNavBox = asideHomeNavBox
  },
  changeUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  changeMainHeight (state, mainHeight) {
    state.mainHeight = mainHeight
  }
}
