import ContanctUs from '@/apis/interface-fn/ContanctUsFn.js' // 接口调用文件
import axios from 'axios' // axios
export default {
  getInfo (_this, pageSize, currentPage, locked, searchType, searchValue) { // 解决问题初始化页面
    let formData = {
    }
    ContanctUs.findSolutionsList(_this, formData)
  },
  onSubmit (_this) { // 新增新闻动态
    let params = new FormData()
    params.append('menuType', 7)
    params.append('title', _this.ruleForm.title)
    params.append('id', 0)
    params.append('content', _this.ruleForm.content)
    params.append('newsDataStatus', _this.ruleForm.status)
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
        ContanctUs.findSolutionsList(_this, formDatas)
      } else {
        alert('上传失败,请联系管理员')
      }
    })
  },
  onSubmitEdit (_this) { // 编辑保存解决方案
    let params = new FormData()
    params.append('tel', _this.formEdit.tel)
    params.append('id', _this.formEdit.id)
    params.append('webId', _this.formEdit.webId)
    params.append('icpNumb', _this.formEdit.icpNumb)
    params.append('publicNetworkSecurity', _this.formEdit.publicNetworkSecurity)
    params.append('pictureUrlFile', _this.img_path[0] ? _this.img_path[0].raw : '')
    params.append('backgroundUrlFile', _this.back_path[0] ? _this.back_path[0].raw : '')
    params.append('name', _this.formEdit.name)
    params.append('recordNumber', _this.formEdit.recordNumber)
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': localStorage.getItem('token')
      }
    }
    axios.post('/api/company/saveOrUpNewsData.htm', params, config).then(function (result) {
      const data = result.data
      const dataToObj = JSON.parse(data)
      if (dataToObj.status === '1000') {
        _this.$message({
          showClose: true,
          message: '操作完成',
          type: 'success'
        })
        ContanctUs.findSolutionsList(_this)
      } else {
        alert('上传失败,请联系管理员')
      }
    })
  }
}
