<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    row-key="id"
    border
    :height="tableHeight + 'px'"
    class="box">
    <el-table-column prop="tel" label="电话">
    </el-table-column>
    <el-table-column prop="webId" label="地址"></el-table-column>
    <el-table-column prop="icpNumb" label="邮编"></el-table-column>
    <el-table-column prop="publicNetworkSecurity" label="技术支持"></el-table-column>
    <el-table-column prop="logoUrl" label="公司logo" :show-overflow-tooltip="true">
      <template slot-scope="scope">
        <el-popover
          placement="top-start"
          title=""
          trigger="click"
        >
          <el-image slot="reference" :src="api + scope.row.logoUrl" :alt="api + scope.row.logoUrl" style="height: 100px; width: 100px"></el-image>
          <el-image :src="api + scope.row.logoUrl" style="max-height: auto;max-width: 200px"></el-image>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column prop="backgroundUrl" label="登录背景图片" :show-overflow-tooltip="true">
      <template slot-scope="scope">
        <el-popover
          placement="top-start"
          title=""
          trigger="click"
        >
          <el-image slot="reference" :src="api + scope.row.backgroundUrl" :alt="api + scope.row.backgroundUrl" style="height: 100px; width: 100px"></el-image>
          <el-image :src="api + scope.row.backgroundUrl" style="max-height: auto;max-width: 200px"></el-image>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="名称"></el-table-column>
    <el-table-column prop="recordNumber" label="备案号"></el-table-column>
    <el-table-column prop="" label="操作" width="80">
      <template slot-scope="scope">
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row)">编辑</el-button>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Tables',
  props: {
    tableData: Array,
    tableHeight: Number
  },
  data () {
    return {
      api: '/api/'
    }
  },
  methods: {
    onlocked (locked, id) { // 修改状态
      this.$emit('onlocked', locked, id)
    },
    edit (item) { // 编辑
      this.$emit('edit', item)
    },
    deleteUser (id) { // 删除
      this.$emit('deleteUser', id)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .inputSort
    width: 30px
  .inputSort >>> input
    padding: 0 10px
    height: 30px
    line-height: 30px
  .inputAll >>> input
    padding: 0 10px
    height: 30px
    line-height: 30px
  .el-button
    padding: 8px
    font-size: 12px
  .box >>> td, .box >>> th
    padding: 6px 0
</style>
