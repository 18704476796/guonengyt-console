<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    row-key="id"
    border
    :height="tableHeight + 'px'"
    class="box">
    <el-table-column prop="title" label="标题"></el-table-column>
    <el-table-column prop="pictureUrl" label="图片" :show-overflow-tooltip="true">
      <template slot-scope="scope">
        <el-popover
          placement="top-start"
          title=""
          trigger="click"
        >
          <el-image slot="reference" :src="api + scope.row.pictureUrl" :alt="api + scope.row.pictureUrl" style="max-height: 100px; max-width: 150px"></el-image>
          <el-image :src="api + scope.row.pictureUrl" style="max-height: 400px;max-width: 400px"></el-image>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column prop="content" label="内容"></el-table-column>
    <el-table-column prop="" label="操作" width="100">
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
