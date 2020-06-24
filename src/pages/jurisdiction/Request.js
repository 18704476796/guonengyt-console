import Jurisdiction from '@/apis/interface-fn/JurisdictionFn.js' // 接口调用文件
export default {
  getInfo (_this, roleId) {
    let formData = {
      roleId: roleId
    }
    Jurisdiction.findRoleControl(_this, formData)
  },
  handleChange (_this, _roleId, _menuIds) {
    let menuIdss = JSON.stringify(_menuIds)
    let formData = {
      roleId: _roleId,
      menuIds: menuIdss
    }
    Jurisdiction.saveOrUpdateRoleControl(_this, formData)
  }
}
