let defaultToken = ''
let defaultnavTs = 0
let defaultnavTsIcon = '&#xe62c;'
try {
  if (localStorage.token) {
    defaultToken = localStorage.token // 用户token
  }
  if (localStorage.navTs) {
    defaultnavTs = localStorage.navTs // 导航横向伸缩，1为收缩，0为展开
  }
  if (localStorage.navTsIcon) {
    defaultnavTsIcon = localStorage.navTsIcon // 导航横向伸缩图标
  }
} catch (e) {}

export default {
  // localStorage
  token: defaultToken, // 用户token，字符串类型 localStorage
  navTs: defaultnavTs, // 伸缩导航按钮伸缩状态，布尔类型 localStorage
  navTsIcon: defaultnavTsIcon, // 伸缩导航按钮图标
  // 数据
  headerLeftNav: [], // 页眉导航集合,数组类型，装载对象，左导航
  headerRightNav: [], // 页眉导航集合,数组类型，装载对象，右导航
  // 数据
  homeId: '', // 页眉首页按钮id
  dispatch: '', // 页眉调度管理按钮id
  userId: '', // 页眉用户管理按钮id
  systemSettingsId: '', // 页眉系统设置按钮id
  asideHomeNav: [], // 左侧导航展示数据，数组类型，装载数组
  userInfo: {}, // 右侧内容区域数据，数组类型，装载对象类型
  rightContent: [], // 右侧内容区域页面id，数组类型
  mainHeight: '' // main内容区域高度记录，初始化即开始记录
}
