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
    <el-table-column prop="title" label="标题" width="300"></el-table-column>
    <el-table-column label="内容">
      <template slot-scope="scope">
        <div class="tableImg" v-html="scope.row.content"></div>
      </template>
    </el-table-column>
    <el-table-column prop="" label="操作" width="200">
      <template slot-scope="scope">
        <el-button-group>
          <el-button type="primary" icon="el-icon-info" @click="lookFor(scope.row.id)">查看</el-button>
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
    },
    lookFor (id) {
      this.$emit('lookFor', id)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tableImg>>>img
    display none
    width auto
    max-width 100%
    max-height 100px
  .tableImg
    height 48px
    overflow hidden
    display -webkit-box /* 作为弹性伸缩盒子模型显示 */
    -webkit-line-clamp 2 /* 显示的行数；如果要设置2行加...则设置为2 */
    overflow hidden /*超出的文本隐藏*/
    text-overflow ellipsis /* 溢出用省略号 */
    -webkit-box-orient vertical /* 伸缩盒子的子元素排列：从上到下 */
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
