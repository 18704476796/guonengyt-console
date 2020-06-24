import Solution from '@/apis/interface-fn/SolutionsFn.js' // 接口调用文件
export default {
  getInfo (_this, pageSize, currentPage, locked, searchType, searchValue) { // 解决问题初始化页面
    let formData = {
      pageSize: pageSize,
      currentPage: currentPage,
      status: locked,
      keyword: searchType,
      title: searchValue,
      menuType: 5
    }
    Solution.findSolutionsList(_this, formData, 5)
  },
  onlocked (_this, locked, id) { // 修改解决方案状态函数
    let formData = {
      status: locked,
      newsDataId: id
    }
    Solution.updateSysUserStatus(_this, formData)
  },
  lookFor (_this, id) { // 查看免费体验用户详情
    let formData = {
      newsDataId: id
    }
    Solution.lookFor(_this, formData, 5)
  },
  onSubmit (_this) { // 新增客户案例
    _this.$refs.ruleForm.validate((valid) => {
      if (valid) { // 表单验证通过
        let formData = {
          menuType: 5,
          newsSort: _this.ruleForm.newsSort, // 排序
          status: _this.ruleForm.status, // 排序
          title: _this.ruleForm.title, // 标题
          content: _this.ruleForm.content // 内容
        }
        Solution.saveOrUpdateSolution(_this, formData, 5)
      } else {
        return false // 表单验证不通过
      }
    })
  },
  onSubmitEdit (_this) { // 编辑客户案例
    let formData = {
      title: _this.formEdit.title, // 标题
      content: _this.formEdit.content, // 内容
      id: _this.formEdit.id, // 角色id
      status: _this.formEdit.status,
      menuType: 5,
      newsSort: _this.formEdit.newsSort
    }
    Solution.saveOrUpdateSolution(_this, formData, 5)
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
      Solution.deleteSysUser(_this, formData, 5)
    }).catch(() => {
      _this.$message({
        type: 'info',
        message: '已取消删除'
      })
    })
  }
}
