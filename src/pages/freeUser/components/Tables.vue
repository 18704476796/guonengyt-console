<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    row-key="id"
    border
    :height="tableHeight + 'px'"
    class="box">
    <el-table-column prop="realName" label="姓名"></el-table-column>
    <el-table-column prop="phoneNum" label="联系方式"></el-table-column>
    <el-table-column prop="unitName" label="公司名称"></el-table-column>
    <el-table-column prop="createTime" label="体验时间"></el-table-column>
    <el-table-column label="操作" width="200">
      <template slot-scope="scope">
        <el-button-group>
          <el-button type="primary" icon="el-icon-info" @click="lookFor(scope.row.id)">查看</el-button>
          <el-button type="primary" icon="el-icon-delete" @click="deleteUser(scope.row.userName)">删除</el-button>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// 最后登录时间、帐号、昵称、姓名、部门、职务、密码
export default {
  name: 'Tables',
  props: {
    tableData: Array,
    tableHeight: Number
  },
  methods: {
    onlocked (locked, userName) {
      this.$emit('onlocked', locked, userName)
    },
    lookFor (id) {
      this.$emit('lookFor', id)
    },
    deleteUser (userName) {
      this.$emit('deleteUser', userName)
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
