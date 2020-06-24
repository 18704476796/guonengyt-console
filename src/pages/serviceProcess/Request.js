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
      menuType: 6
    }
    Solution.findSolutionsList(_this, formData, 6)
  },
  onSubmitEdit (_this) { // 编辑保存解决方案
    let params = new FormData()
    params.append('menuType', 6)
    params.append('status', 1)
    params.append('newsSort', 0)
    params.append('id', _this.formEdit.id)
    params.append('content', '1')
    params.append('title', '服务流程')
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
          menuType: 6
        }
        Solution.findSolutionsList(_this, formDatas)
      } else {
        alert('上传失败,请联系管理员')
      }
    })
  }
}
