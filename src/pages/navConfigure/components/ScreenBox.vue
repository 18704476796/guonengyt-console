<template>
  <div class="screenBox hyb_clear">
    <div class="left">
      <!-- <el-button type="primary" icon="el-icon-edit"></el-button>
      核心内容操作 -->
    </div>
    <div class="right">
      <div v-if="disabled">
        <el-button type="primary" icon="el-icon-edit" @click="newlyAdd">新增导航</el-button>
        <el-button type="primary" icon="el-icon-edit" @click="edit">编辑导航</el-button>
      </div>
      <div v-else>
        <el-button type="success" icon="el-icon-edit" @click="preservation">保存导航</el-button>
        <el-button type="success" icon="el-icon-edit" @click="edit">退出编辑</el-button>
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
      disabledSub: this.disabled
    }
  },
  methods: {
    edit () { // 编辑函数
      this.disabledSub = !this.disabledSub
      this.$emit('changeDisabled', this.disabledSub)
    },
    preservation () { // 保存
      this.$emit('preservation')
    },
    newlyAdd () { // 新增导航函数
      this.$emit('newlyAdd')
    }
  }
}
</script>

<style lang="stylus" scoped>
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
</style>
