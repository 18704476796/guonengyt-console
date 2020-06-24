// 解决方案接口函数
import {FIND_NEWS_DATA, SAVE_UPDATA_NEWS_DATA, DEL_NEWS_DATA_BYID, UP_NEWS_DATA_STATUS_BY_ID, NEWS_DATA_DETAILS_BY_ID} from '../interface.js' // 接口调用文件
export default {
  async findSolutionsList (_this, formData) { // 解决方案初始化接口
    let res = await FIND_NEWS_DATA(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data.newDataPage.data)
      _this.tableData = data.newDataPage.data
      console.log(_this.tableData)
      _this.totalRows = data.newDataPage.totalRows // 总条数
      _this.pageSize = data.newDataPage.pageSize // 每页显示条数
    }
  },
  async updateSysUserStatus (_this, formData, menuType) { // 修改解决方案状态接口
    let res = await UP_NEWS_DATA_STATUS_BY_ID(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        showClose: true,
        message: '状态值修改成功',
        type: 'success'
      })
    }
  },
  async lookFor (_this, formData) { // 查看免费体验用户详情
    let res = await NEWS_DATA_DETAILS_BY_ID(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.ruleForm = data.newsData
      _this.questionList = data.answerProblemList
    }
  },
  async saveOrUpdateSolution (_this, formData, menuType) { // 新增或修改解决方案接口
    let res = await SAVE_UPDATA_NEWS_DATA(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '操作成功',
        type: 'success'
      })
      if (menuType !== null && menuType !== undefined && menuType !== '') {
        let formDatas = {
          menuType: menuType
        }
        this.findSolutionsList(_this, formDatas)
      } else {
        this.findSolutionsList(_this)
      }
    }
  },
  async deleteSysUser (_this, formData, menuType) { // 删除解决方案接口
    let res = await DEL_NEWS_DATA_BYID(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '删除成功',
        type: 'success'
      })
    }
    if (menuType !== null && menuType !== undefined && menuType !== '') {
      let formDatas = {
        menuType: menuType
      }
      this.findSolutionsList(_this, formDatas)
    } else {
      this.findSolutionsList(_this)
    }
  }
}
