import Passenger from '@/apis/interface-fn/PassengerFn.js' // 接口调用文件
export default {
  getInfo (_this, pageSize, currentPage, locked, searchType, searchValue) { // 管理员用户管理初始化
    let formData = {
      pageSize: pageSize,
      currentPage: currentPage,
      locked: locked,
      keyword: searchType,
      keywordValue: searchValue,
      roleId: 1
    }
    Passenger.findSysUserList(_this, formData)
  },
  onlocked (_this, locked, userName) { // 修改用户状态函数
    let formData = {
      locked: locked,
      userName: userName
    }
    Passenger.updateSysUserStatus(_this, formData, 1)
  },
  onSubmit (_this) { // 创建管理员函数
    _this.$refs.ruleForm.validate((valid) => {
      if (valid) { // 表单验证通过
        let formData = {
          saveOrUpdateStatus: 'save', // 新增用户的状态
          userName: _this.ruleForm.roleName, // 帐号
          realName: _this.ruleForm.roleUser, // 姓名
          password: _this.ruleForm.pass, // 密码
          confirmPassword: _this.ruleForm.checkPass, // 确认密码
          phoneNum: _this.ruleForm.roleTel, // 手机号
          locked: _this.ruleForm.status, // 用户状态
          roleId: 1 // 角色id
        }
        Passenger.saveOrUpdateSysUser(_this, formData, 1)
      } else {
        return false // 表单验证不通过
      }
    })
  },
  onSubmitEdit (_this) { // 编辑保存乘客用户函数
    let formData = {
      saveOrUpdateStatus: 'update', // 编辑用户状态
      userName: _this.formEdit.userName, // 帐号
      realName: _this.formEdit.realName, // 姓名
      password: _this.formEdit.pass, // 密码
      confirmPassword: _this.formEdit.checkPass, // 确认密码
      phoneNum: _this.formEdit.phoneNum, // 手机号
      locked: _this.formEdit.locked, // 用户状态
      roleId: 1 // 角色id
    }
    Passenger.saveOrUpdateSysUser(_this, formData, 1)
  },
  deleteUser (_this, userName) { // 删除乘客用户函数
    let formData = {
      userName: userName // 用户帐号
    }
    Passenger.deleteSysUser(_this, formData, 1)
  },
  changeCheckType (_this, checkType) {
    let formData = {
      checkType: checkType
    }
    Passenger.checkType(_this, formData)
  }
}
