// 角色管理接口函数
import {FIND_ROLE_LIST, SAVE_UPDATE_ROLE, DELETE_ROLE} from '../interface.js' // 接口调用文件
export default {
  async findRoleList (_this, formData) { // 登录接口函数
    let res = await FIND_ROLE_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.formData = data.roleList
    }
  },
  async saveOrUpdateRoleControl (_this, formData) { // 登录接口函数
    let res = await SAVE_UPDATE_ROLE(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '操作成功',
        type: 'success'
      })
      this.findRoleList(_this)
    }
  },
  async deleteRole (_this, formData) { // 登录接口函数
    let res = await DELETE_ROLE(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '角色删除成功',
        type: 'success'
      })
      this.findRoleList(_this)
    }
  }
}
