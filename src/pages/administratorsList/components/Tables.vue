<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    row-key="id"
    border
    :height="tableHeight + 'px'"
    class="box">
    <el-table-column prop="locked" label="状态" width="100">
      <el-switch
        slot-scope="scope"
        v-model="scope.row.locked"
        active-color="#13ce66"
        inactive-color="#ff4949"
        :active-value="1"
        :inactive-value="0"
        active-text="启用"
        inactive-text="锁定"
        @change="onlocked(scope.row.locked, scope.row.userName)">
      </el-switch>
    </el-table-column>
    <el-table-column prop="userName" label="帐号"></el-table-column>
    <el-table-column prop="realName" label="姓名"></el-table-column>
    <el-table-column prop="phoneNum" label="手机号"></el-table-column>
    <el-table-column prop="loginTime" label="最后登录时间"></el-table-column>
    <el-table-column label="操作" width="200">
      <template slot-scope="scope">
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row.locked, scope.row.userName, scope.row.realName, scope.row.phoneNum)">编辑</el-button>
          <el-button type="primary" icon="el-icon-delete" @click="deleteUser(scope.row.userName)">注销</el-button>
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
    edit (locked, userName, realName, phoneNum) {
      this.$emit('edit', locked, userName, realName, phoneNum)
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
