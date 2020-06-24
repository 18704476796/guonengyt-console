// 城市管理接口函数
import {FIND_ORDERS_LIST, FIND_ORDERS_DETAILY} from '../interface.js' // 接口调用文件
export default {
  async getInfo (_this, formData) { // 订单列表初始化接口
    let res = await FIND_ORDERS_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.tableData = data.orderList.data
      _this.totalRows = data.orderList.totalRows // 总条数
      _this.pageSize = data.orderList.pageSize // 每页显示条数
    }
  },
  async LookOrderList (_this, formData) { // 订单详情接口
    let res = await FIND_ORDERS_DETAILY(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.orderDate = data.orderDetaily
      let rentType = _this.orderDate.rentType
      if (rentType === 1) {
        _this.rentType = '拼车'
      } else if (rentType === 2) {
        _this.rentType = '包车'
      }
      let rideType = _this.orderDate.rideType
      if (rideType === 1) {
        _this.rideType = '本人乘坐'
      } else if (rideType === 2) {
        _this.rideType = '代人叫车'
      }
      let status = _this.orderDate.status
      if (status === 0) {
        _this.Pstatus = '进行中'
      } else if (status === 1) {
        _this.Pstatus = '已完成'
      } else if (status === 2) {
        _this.Pstatus = '已取消'
      }
      let driverStatus = _this.orderDate.driverStatus
      if (driverStatus === 0) {
        _this.driverStatus = '待出发'
      } else if (driverStatus === 1) {
        _this.driverStatus = '已出发'
      } else if (driverStatus === 2) {
        _this.driverStatus = '已完成'
      }
    }
  }
}
