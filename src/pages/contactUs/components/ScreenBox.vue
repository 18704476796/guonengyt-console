<template>
  <div class="screenBox hyb_clear">
    <div class="left">
    </div>
    <div class="right">
      <el-button type="primary" icon="el-icon-user" @click="driverAdd">新建信息</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreenBox',
  data () {
    return {
      statusOptions: [{
        value: 'null',
        label: '全部状态'
      }, {
        value: '1',
        label: '启用状态'
      }, {
        value: '0',
        label: '锁定状态'
      }],
      statusValue: 'null',
      searchType: '1', // 搜索框类型值
      searchValue: '' // 搜索框的值
    }
  },
  methods: {
    changeStatusValue (locked) { // 状态筛选函数
      let Val = null
      if (locked !== 'null') {
        Val = locked
      }
      this.$emit('changeStatusValue', Val)
    },
    search () { // 搜索筛选
      this.$emit('search', this.searchType, this.searchValue)
    },
    driverAdd () { // 新增司机用户
      this.$emit('driverAdd')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .floatLeft
    float: left
  .screenBox
    background: #F5F7FA
    border-radius: 3px
    padding: 6px
    margin-bottom: 10px
    .left
      float: left
    .right
      float: right
    button
      font-size: 12px
      padding: 8px 10px
    .statusSelect
      width: 110px
      margin-right: 10px
    .searchInput
      width: 200px
    .searchInput >>> .el-input-group__prepend
      width: 22px
    .searchInput >>> .el-input__inner
      padding: 0 6px
</style>
