import Role from '@/apis/interface-fn/RoleFn.js' // 接口调用文件
export default {
  getInfo (_this, keyword, keywordValue) {
    let formData = {
      keyword: keyword,
      keywordValue: keywordValue
    }
    Role.findRoleList(_this, formData)
  },
  preservation (_this) { // 保存
    _this.$confirm('您正在进行角色保存操作，请认真检查,是否继续提交?', '警告', {
      confirmButtonText: '继续保存',
      cancelButtonText: '取消保存',
      type: 'warning',
      center: true
    }).then(() => {
      _this.$message({
        type: 'success',
        message: '您正在进行保存操作！'
      })
      let formDataBox = JSON.stringify(_this.formData)
      let formData = {
        tableData: formDataBox
      }
      Role.saveOrUpdateRoleControl(_this, formData)
      _this.disabled = true
    }).catch(() => {
      _this.$message({
        type: 'info',
        message: '已取消操作'
      })
    })
  },
  onSubmit (_this) { // 创建角色函数
    _this.formBox = []
    _this.formBox.push(_this.form)
    let tableDataBox = JSON.stringify(_this.formBox)
    let formData = {
      tableData: tableDataBox
    }
    Role.saveOrUpdateRoleControl(_this, formData)
  },
  onDelete (_this, Id) { // 删除角色
    _this.$confirm('您正在进行角色删除操作，请认真检查,是否继续提交?', '警告', {
      confirmButtonText: '继续删除',
      cancelButtonText: '取消删除',
      type: 'warning',
      center: true
    }).then(() => {
      _this.$message({
        type: 'success',
        message: '您正在进行删除操作！'
      })
      let formData = {
        roleId: Id
      }
      Role.deleteRole(_this, formData)
    }).catch(() => {
      _this.$message({
        type: 'info',
        message: '已取消操作'
      })
    })
  }
}
