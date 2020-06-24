<template>
  <div class="screenBox hyb_clear">
    <div class="left">
      <el-select
        v-model="statusValue"
        size="small"
        placeholder="请选择"
        class="statusSelect"
        @change="changeStatusValue">
        <el-option
          v-for="item in statusOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input
        placeholder="请输入内容"
        v-model="searchValue"
        size="small"
        class="searchInput"
        style="position: relative;top: 2px;"
        @blur="search">
        <el-select v-model="searchType" slot="prepend" placeholder="请选择">
          <el-option label="标题" value="1"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </div>
    <div class="right">
      <el-button type="primary" icon="el-icon-user" @click="driverAdd">新建新闻动态</el-button>
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
