<template>
  <div class="screenBox hyb_clear">
    <div class="left">
      <!-- <el-select
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
      </el-select> -->
      <el-input
        placeholder="请输入内容"
        v-model="searchValue"
        size="small"
        class="searchInput"
        style="position: relative;top: 2px;"
        @blur="search">
        <el-select v-model="searchType" slot="prepend" placeholder="请选择">
          <!-- <el-option label="帐号" value="1"></el-option> -->
          <el-option label="姓名" value="2"></el-option>
          <el-option label="手机号" value="4"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </div>
    <div class="right">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreenBox',
  data () {
    return {
      checkTypeName: '请选择实名认证方式',
      checkType: null,
      checkTypeList: [
        {
          id: 1,
          name: '自动审核'
        },
        {
          id: 2,
          name: '人工审核'
        }
      ],
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
      departmentValue: 'null',
      jobValue: 'null',
      searchType: '2', // 搜索框类型值
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
    administratorsAdd () { // 新增管理员
      this.$emit('administratorsAdd')
    },
    changeCheckType (data) { //
      // 处理点击时不选的错误
      if (typeof data === 'object') {
        return
      }
      // 取选择方式并赋值
      this.checkTypeName = data.split('-')[0]
      this.checkType = data.split('-')[1]
      this.$emit('changeCheckType', this.checkType)
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
      .switchButton
        width 100px
        background #409EFF
    button
      font-size: 12px
      padding: 8px 10px
    .statusSelect
      width: 110px
      margin-right: 10px
    .searchInput
      width: 200px
    .searchInput >>> .el-input-group__prepend
      width: 32px
    .searchInput >>> .el-input__inner
      padding: 0 6px
 .el-dropdown-link {
     cursor: pointer;
     color: #409EFF;
   }
   .el-icon-arrow-down {
     font-size: 12px;
   }
</style>
