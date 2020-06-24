// 权限管理接口函数
import {FIND_ROLE_CONTROL, JURISDICTION_PRESERVATION_MODIFY} from '../interface.js' // 接口调用文件
export default {
  async findRoleControl (_this, formData) { // 登录接口函数
    let res = await FIND_ROLE_CONTROL(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.roleList = data.roleList // 角色列表
      _this.roleSelection = Number(data.roleId) // 选中的角色
      _this.unauthorized = data.menuList // 所有权限（包含未拥有权限）
      _this.hasPermission = data.idList
    }
  },
  async saveOrUpdateRoleControl (_this, formData) { // 登录接口函数
    let res = await JURISDICTION_PRESERVATION_MODIFY(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        type: 'success',
        message: '操作成功！'
      })
    }
  }
}
