<template>
  <div class="screenBox hyb_clear">
    <div class="left">
      <el-input
        placeholder="请输入内容"
        v-model="searchValue"
        size="small"
        class="searchInput"
        style="position: relative;top: 2px;"
        @blur="search">
        <el-select v-model="searchType" slot="prepend" placeholder="请选择">
          <el-option label="角色Id" value="1"></el-option>
          <el-option label="角色名称" value="2"></el-option>
          <el-option label="角色描述" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </div>
    <div class="right">
      <div v-if="disabled">
        <el-button type="primary" icon="el-icon-user" @click="edit">编辑角色</el-button>
        <el-button type="primary" icon="el-icon-user" @click="newlyAdd">新增角色</el-button>
      </div>
      <div v-else>
        <el-button type="primary" icon="el-icon-user" @click="edit">退出编辑</el-button>
        <el-button type="success" icon="el-icon-user" @click="preservation">完成编辑</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreenBox',
  props: {
    disabled: Boolean
  },
  data () {
    return {
      disabledSub: this.disabled,
      searchType: '1', // 搜索框类型值
      searchValue: '' // 搜索框的值
    }
  },
  methods: {
    search () { // 搜索筛选
      this.$emit('search', this.searchType, this.searchValue)
    },
    edit () { // 编辑角色
      this.disabledSub = !this.disabledSub
      this.$emit('changeDisabled', this.disabledSub)
    },
    preservation () { // 保存
      this.$emit('preservation')
    },
    newlyAdd () { // 新增角色
      this.$emit('newlyAdd')
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
    .searchInput
      width: 300px
    .searchInput >>> .el-input-group__prepend
      width: 50px
    .searchInput >>> .el-input__inner
      padding: 0 6px
</style>
