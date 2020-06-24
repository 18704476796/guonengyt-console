<!-- 管理员管理 -->
<template>
  <div class="box">
    <screen-box
      @changeStatusValue="changeStatusValue"
      @search="search"
      @administratorsAdd="administratorsAdd"
      @changeCheckType='changeCheckType'>
    </screen-box>
    <tables
      :tableData="tableData"
      :tableHeight="tableHeight"
      @onlocked="onlocked"
      @lookFor="lookFor"
      @deleteUser="deleteUser">
    </tables>
    <paging
      :totalRows="totalRows"
      :pageSize="pageSize"
      @getInfo="getInfo"
      @getInfo_current="getInfo_current">
    </paging>
    <el-dialog title="查看详情" :visible.sync="dialogFormVisible" width="700px" :rules="ruless">
      <div class="checkTable border">
        <div class="border-bottom">
          <label class="border-right">姓名</label>
          <span>{{ruleForm.realName}}</span>
        </div>
        <div class="border-bottom">
          <label class="border-right">电话</label>
          <span>{{ruleForm.phoneNum}}</span>
        </div>
        <div class="border-bottom">
          <label class="border-right">邮箱</label>
          <span>{{ruleForm.email}}</span>
        </div>
        <div class="border-bottom">
          <label class="border-right">内容</label>
          <span>{{ruleForm.about}}</span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./JionUser.js"></script>
<style lang="stylus" scoped src="./JionUser.css"></style>
