// 乘客管理接口函数
import {FIND_SYS_USER_LIST, UPDATE_SYS_USER_STATUS, SAVE_UPDATE_SYS_USER, DELETE_SYS_USER, EXPERIENCE_DETAILS, SYS_USER_DETAILS_ID} from '../interface.js' // 接口调用文件

export default {
  async findSysUserList (_this, formData) { // 乘客用户管理初始化接口
    let res = await FIND_SYS_USER_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.tableData = data.userList.data
      _this.totalRows = data.userList.totalRows // 总条数
      _this.pageSize = data.userList.pageSize // 每页显示条数
    }
  },
  async lookFor (_this, formData) { // 查看免费体验用户详情
    let res = await EXPERIENCE_DETAILS(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.ruleForm = data.sysUserExperienceList[0]
      _this.questionList = data.answerProblemList
    }
  },
  async lookForJoinUser (_this, formData) { // 查看加入我们用户详情
    let res = await SYS_USER_DETAILS_ID(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.ruleForm = data.sysUserJoinUsList[0]
    }
  },
  async updateSysUserStatus (_this, formData, userId) { // 修改用户状态接口
    let res = await UPDATE_SYS_USER_STATUS(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        showClose: true,
        message: '状态值修改成功',
        type: 'success'
      })
      if (userId !== null && userId !== undefined && userId !== '') {
        let formDatas = {
          roleId: userId
        }
        this.findSysUserList(_this, formDatas)
      } else {
        this.findSysUserList(_this)
      }
    }
  },
  async saveOrUpdateSysUser (_this, formData, userId) { // 新增或修改用户信息接口
    let res = await SAVE_UPDATE_SYS_USER(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '操作成功',
        type: 'success'
      })
      if (userId !== null && userId !== undefined && userId !== '') {
        let formDatas = {
          roleId: userId
        }
        this.findSysUserList(_this, formDatas)
      } else {
        this.findSysUserList(_this)
      }
    } if (data.status === '1004') {
      _this.$message({
        message: '用户名已存在',
        type: 'error'
      })
    }
  },
  async deleteSysUser (_this, formData, userId) { // 删除用户信息接口
    let res = await DELETE_SYS_USER(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '删除成功',
        type: 'success'
      })
      if (userId !== null && userId !== undefined && userId !== '') {
        let formDatas = {
          roleId: userId
        }
        this.findSysUserList(_this, formDatas)
      } else {
        this.findSysUserList(_this)
      }
    }
  }
  // async checkType (_this, formData) { // 实名认证审核方式接口
  //   let res = await UPDATE_SYS_USER_CHECK_TYPE(formData)
  //   const data = res.data
  //   if (data.status === '1000') {
  //     console.log('修改成功')
  //   }
  // },
  // async lookUser (_this, formData) { // 查看实名认详情接口
  //   let res = await GET_SYS_USER_APPROVAL(formData)
  //   const data = res.data
  //   if (data.status === '1000') {
  //     _this.sysUserApproval = data.sysUserApproval
  //   }
  // },
  // async changeCheckType (_this, formData) { // 修改审核状态接口
  //   let res = await UPDATE_SYS_USER_APPROVAL_STATUS(formData)
  //   const data = res.data
  //   console.log(data)
  //   if (data.status === '1000') {
  //     _this.$message({
  //       message: '修改成功成功',
  //       type: 'success'
  //     })
  //   } else {
  //     _this.$message({
  //       message: '审核失败,请联系管理员'
  //     })
  //   }
  //   this.lookUser(_this)
  // }
}
