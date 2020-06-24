<template>
  <el-pagination
    background
    layout="prev, pager, next,jumper,->,sizes,total"
    :page-sizes="[10, 20, 30, 50,100,200,300]"
    :total="totalRows"
    class="paging"
    :page-size="pageSize"
    @size-change="getInfo"
    @current-change="getInfo_current">
  </el-pagination>
</template>

<script>
export default {
  name: 'Paging',
  props: {
    totalRows: Number,
    pageSize: Number
  },
  methods: {
    getInfo (size) { // 改变每页显示条数触发
      this.$emit('getInfo', size)
    },
    getInfo_current (size) { // 改变页面页码触发
      this.$emit('getInfo_current', size)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .paging
    padding-top: 10px
  .paging >>> .el-pager li
    height: 26px !important
    line-height: 26px !important
  .paging >>> button, .paging >>> span:not([class*=suffix])
    height: 26px !important
    line-height: 26px !important
</style>
