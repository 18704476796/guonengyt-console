// 联系我们接口函数
import {ABOUTUS_US} from '../interface.js' // 接口调用文件
export default {
  async findSolutionsList (_this, formData) { // 解决方案初始化接口
    let res = await ABOUTUS_US(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data.company)
      _this.tableData = data.company
    }
  }
}
