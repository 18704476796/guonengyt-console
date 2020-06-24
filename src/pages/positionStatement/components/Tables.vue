<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    row-key="id"
    border
    :height="tableHeight + 'px'"
    class="box">
    <el-table-column prop="status" label="状态" width="100">
      <el-switch
        slot-scope="scope"
        v-model="scope.row.status"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value=1
        inactive-value=0
        active-text="启用"
        inactive-text="锁定"
        @change="onlocked(scope.row.status, scope.row.id)">
      </el-switch>
    </el-table-column>
    <el-table-column prop="title" label="岗位名称"></el-table-column>
    <el-table-column label="岗位职责">
      <template slot-scope="scope">
        <div class="tableImg" v-html="scope.row.jobDuty"></div>
      </template>
    </el-table-column>
    <el-table-column label="岗位介绍">
      <template slot-scope="scope">
        <div class="tableImg" v-html="scope.row.jobRequirements"></div>
      </template>
    </el-table-column>
    <el-table-column prop="" label="操作" width="200">
      <template slot-scope="scope">
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row)">编辑</el-button>
          <el-button type="primary" icon="el-icon-delete" @click="deleteUser(scope.row.id)">删除</el-button>
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
