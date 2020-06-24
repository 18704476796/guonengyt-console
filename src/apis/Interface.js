// 数据接口
import req from './http.js'
export const LOGIN = params => req('post', '/user/validateLogin.htm', params) // 登录验证接口
export const LOGIN_IMG = params => req('get', '/company/aboutusUs.htm', params) // 登录页面背景图片接口
export const GET_INDEX = params => req('post', '/user/getIndex.htm', params) // 登录成功后，程序初始化接口
export const GET_MENULIST = params => req('post', '/user/getMenuList.htm', params) // 左侧导航数据接口
export const PERSON_CENTER = params => req('post', '/user/getPersonCenter.htm', params) // 欢迎页面内个人信息接口
export const FIND_MENUALL = params => req('post', '/menu/findMenuAll.htm', params) // 资源管理数据接口
export const SAVE_UPDATE_MENU = params => req('post', '/menu/saveOrUpdateMenu.htm', params) // 资源管理新增、修改、保存导航数据接口
export const DELETE_MENU = params => req('post', '/menu/deleteMenu.htm', params) // 资源管理删除导航数据接口
export const FIND_ROLE_CONTROL = params => req('post', '/role/findRoleControl.htm', params) // 权限管理,角色权限切换数据接口
export const JURISDICTION_PRESERVATION_MODIFY = params => req('post', '/role/saveOrUpdateRoleControl.htm', params) // 权限管理，权限变化更新接口
export const FIND_ROLE_LIST = params => req('post', '/role/findRoleList.htm', params) // 角色管理数据接口
export const SAVE_UPDATE_ROLE = params => req('post', '/role/saveOrUpdateRole.htm', params) // 角色管理保存角色信息数据接口
export const DELETE_ROLE = params => req('post', '/role/deleteRole.htm', params) // 角色管理删除角色数据接口
export const FIND_SYS_USER_LIST = params => req('post', '/sysUser/findSysUserList.htm', params) // 用户管理数据接口
export const UPDATE_SYS_USER_STATUS = params => req('post', '/sysUser/updateSysUserStatus.htm', params) // 用户管理修改用户状态数据接口
export const SAVE_UPDATE_SYS_USER = params => req('post', '/sysUser/saveOrUpdateSysUser.htm', params) // 创建用户数据接口
export const DELETE_SYS_USER = params => req('post', '/sysUser/deleteSysUser.htm', params) // 用户管理数据接口
export const FIND_NEWS_DATA = params => req('post', '/news/findNewsData.htm', params) // 解决方案查询接口
export const SAVE_UPDATA_NEWS_DATA = params => req('post', '/news/saveOrUpNewsData.htm', params) // 解决方新增和修改接口
export const DEL_NEWS_DATA_BYID = params => req('post', '/news/delNewsDataById.htm', params) // 解决方删除接口
export const UP_NEWS_DATA_STATUS_BY_ID = params => req('post', '/news/upNewsDataStatusById.htm', params) // 解决方删除接口
export const ABOUTUS_US = params => req('post', '/company/aboutusUs.htm', params) // 联系我们查询接口
export const EXPERIENCE_DETAILS = params => req('post', '/sysUser/experienceDetails.htm', params) // 查看免费体验用户详情
export const SYS_USER_DETAILS_ID = params => req('post', '/sysUser/sysUserDetailsById.htm', params) // 查看加入我们用户详情
export const NEWS_DATA_DETAILS_BY_ID = params => req('post', '/news/newsDataDetailsById.htm', params) // 根据id查询新闻数据详情
// 这里使用了箭头函数，转换一下写法：/
// export const LOGIN = function(req) {
//   return req('post', '/user/validateLogin.htm', params)
// }
