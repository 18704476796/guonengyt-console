import Solution from '@/apis/interface-fn/SolutionsFn.js' // 接口调用文件
export default {
  getInfo (_this, pageSize, currentPage, locked, searchType, searchValue) { // 解决问题初始化页面
    let formData = {
      pageSize: pageSize,
      currentPage: currentPage,
      status: locked,
      keyword: searchType,
      title: searchValue,
      menuType: 15
    }
    Solution.findSolutionsList(_this, formData, 15)
  },
  onlocked (_this, locked, id) { // 修改解决方案状态函数
    let formData = {
      status: locked,
      newsDataId: id
    }
    Solution.updateSysUserStatus(_this, formData)
  },
  onSubmit (_this) { // 新增解决方案
    _this.$refs.ruleForm.validate((valid) => {
      if (valid) { // 表单验证通过
        let formData = {
          menuType: 15,
          newsSort: _this.ruleForm.newsSort, // 排序
          status: _this.ruleForm.status, // 排序
          title: _this.ruleForm.title, // 标题
          jobDuty: _this.ruleForm.jobDuty, // 内容
          jobRequirements: _this.ruleForm.jobRequirements // 内容
        }
        Solution.saveOrUpdateSolution(_this, formData, 15)
      } else {
        return false // 表单验证不通过
      }
    })
  },
  onSubmitEdit (_this) { // 编辑保存解决方案
    let formData = {
      title: _this.formEdit.title, // 标题
      jobDuty: _this.formEdit.jobDuty, // 内容
      jobRequirements: _this.formEdit.jobRequirements, // 内容
      id: _this.formEdit.id, // 角色id
      status: _this.formEdit.status,
      menuType: 15,
      newsSort: _this.formEdit.newsSort
    }
    Solution.saveOrUpdateSolution(_this, formData, 15)
  },
  deleteUser (_this, id) { // 删除解决方案
    _this.$confirm('此操作将永久删除该条信息, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      let formData = {
        newsDataId: id // 用户帐号
      }
      Solution.deleteSysUser(_this, formData, 15)
    }).catch(() => {
      _this.$message({
        type: 'info',
        message: '已取消删除'
      })
    })
  }
}
