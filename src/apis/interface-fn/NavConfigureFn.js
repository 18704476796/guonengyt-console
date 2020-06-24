// 资源管理页面接口函数
import {FIND_MENUALL, SAVE_UPDATE_MENU, DELETE_MENU} from '../interface.js' // 接口调用文件
export default {
  async findMenuAll (_this) { // 资源管理表格数据
    let res = await FIND_MENUALL()
    const data = res.data
    if (data.status === '1000') {
      console.log(data.parentMenuList)
      _this.tableData = data.parentMenuList
    }
  },
  async saveOrUpdateMenu (_this, FormData) { // 资源管理新增，修改，保存数据
    let res = await SAVE_UPDATE_MENU(FormData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '操作成功',
        type: 'success'
      })
      this.findMenuAll(_this)
    }
  },
  async deleteMenu (_this, FormData) { // 资源管理删除数据
    let res = await DELETE_MENU(FormData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '资源成功删除',
        type: 'success'
      })
      this.findMenuAll(_this)
    }
  }
}
