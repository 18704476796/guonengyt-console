import Solution from '@/apis/interface-fn/SolutionsFn.js' // 接口调用文件
import axios from 'axios' // axios
export default {
  getInfo (_this, pageSize, currentPage, locked, searchType, searchValue) { // 解决问题初始化页面
    let formData = {
      pageSize: pageSize,
      currentPage: currentPage,
      status: locked,
      keyword: searchType,
      title: searchValue,
      menuType: 7
    }
    Solution.findSolutionsList(_this, formData, 7)
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
    Solution.lookFor(_this, formData, 7)
  },
  onSubmit (_this) { // 新增新闻动态
    let params = new FormData()
    params.append('menuType', 7)
    params.append('title', _this.ruleForm.title)
    params.append('id', 0)
    params.append('content', _this.ruleForm.content)
    params.append('status', _this.ruleForm.status)
    params.append('newsSort', _this.ruleForm.newsSort)
    params.append('pictureUrlFile', _this.img_path[0] ? _this.img_path[0].raw : '')
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': localStorage.getItem('token')
      }
    }
    axios.post('/api/news/saveOrUpNewsDataFile.htm', params, config).then(function (result) {
      const data = result.data
      const dataToObj = JSON.parse(data)
      if (dataToObj.status === '1000') {
        _this.$message({
          showClose: true,
          message: '操作完成',
          type: 'success'
        })
        let formDatas = {
          menuType: 7
        }
        Solution.findSolutionsList(_this, formDatas)
      } else {
        alert('上传失败,请联系管理员')
      }
    })
  },
  onSubmitEdit (_this) { // 编辑保存解决方案
    // _this.$refs.upload1.submit()
    let params = new FormData()
    params.append('menuType', 7)
    params.append('title', _this.formEdit.title)
    params.append('id', _this.formEdit.id)
    params.append('content', _this.formEdit.content)
    params.append('status', _this.formEdit.status)
    params.append('newsSort', _this.formEdit.newsSort)
    params.append('pictureUrlFile', _this.img_path[0] ? _this.img_path[0].raw : '')
    params.append('pictureUrl', _this.formEdit.pictureUrlPath) // 图片地址
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': localStorage.getItem('token')
      }
    }
    axios.post('/api/news/saveOrUpNewsDataFile.htm', params, config).then(function (result) {
      const data = result.data
      const dataToObj = JSON.parse(data)
      if (dataToObj.status === '1000') {
        _this.$message({
          showClose: true,
          message: '操作完成',
          type: 'success'
        })
        let formDatas = {
          menuType: 7
        }
        Solution.findSolutionsList(_this, formDatas)
      } else {
        alert('上传失败,请联系管理员')
      }
    })
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
      Solution.deleteSysUser(_this, formData, 7)
    }).catch(() => {
      _this.$message({
        type: 'info',
        message: '已取消删除'
      })
    })
  }
}
