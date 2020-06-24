import NavConfigure from '@/apis/interface-fn/NavConfigureFn.js' // 接口调用文件
export default {
  findMenuAll (_this) { // 读取资源管理表格数据
    _this.$confirm('非专业人员操作将导致不可预知的风险, 是否继续?', '警告', {
      confirmButtonText: '确定继续',
      cancelButtonText: '怕了怕了',
      type: 'warning',
      center: true
    }).then(() => {
      _this.$message({
        type: 'success',
        message: '您正在进行核心内容操作，请谨慎操作！'
      })
    }).catch(() => {
      _this.$message({
        type: 'info',
        message: '您已取消访问'
      })
      _this.$emit('change-tab-remove', '资源管理')
    })
    NavConfigure.findMenuAll(_this) // 调用资源管理数据接口
  },
  preservation (_this) { // 保存
    _this.$confirm('您正在进行核心内容保存操作，请认真检查,是否继续提交?', '警告', {
      confirmButtonText: '继续编辑',
      cancelButtonText: '取消编辑',
      type: 'warning',
      center: true
    }).then(() => {
      _this.$message({
        type: 'success',
        message: '您正在进行保存操作！'
      })
      let tableDataBox = JSON.stringify(_this.tableData)
      let formData = {
        tableData: tableDataBox
      }
      NavConfigure.saveOrUpdateMenu(_this, formData)
      _this.disabled = true
    }).catch(() => {
      _this.$message({
        type: 'info',
        message: '已取消操作'
      })
    })
  },
  onSubmit (_this) { // 创建资源管理导航函数
    _this.$refs.forms.validate((valid) => {
      if (valid) { // 表单验证通过
        _this.formBox = []
        _this.formBox.push(_this.form)
        let tableDataBox = JSON.stringify(_this.formBox)
        let formData = {
          tableData: tableDataBox
        }
        NavConfigure.saveOrUpdateMenu(_this, formData)
      } else {
        return false // 表单验证不通过
      }
    })
  },
  onDelete (_this, Id) { // 删除导航菜单
    _this.$confirm('您正在进行资源菜单删除操作，请认真检查,是否继续提交?', '警告', {
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
        menuId: Id
      }
      NavConfigure.deleteMenu(_this, formData)
    }).catch(() => {
      _this.$message({
        type: 'info',
        message: '已取消操作'
      })
    })
  },
  newlyAdd (e) { // 新增导航函数
    e.parentElement = [{id: 0, name: '无父级'}]
    for (let i = 0; i < e.tableData.length; i++) { // 遍历导航列表内的id及名称赋值给新增导航的父级id供选择
      let objData = {}
      objData.id = e.tableData[i].id
      objData.name = e.tableData[i].menuName
      e.parentElement.push(objData)
      for (let j = 0; j < e.tableData[i].menuList.length; j++) {
        let objData = {}
        objData.id = e.tableData[i].menuList[j].id
        objData.name = e.tableData[i].menuList[j].menuName
        e.parentElement.push(objData)
      }
    }
    e.drawer = true
  },
  changeParentId (_this) { // 根据是否增添子级导航来控制导航方向选项卡的现实隐藏
    if (_this.form.parentId === 0) {
      _this.form.menuType = 1
    } else {
      _this.form.menuType = 0
    }
  }
}
