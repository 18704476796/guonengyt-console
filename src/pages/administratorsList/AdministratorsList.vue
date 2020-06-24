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
      @edit="edit"
      @deleteUser="deleteUser">
    </tables>
    <paging
      :totalRows="totalRows"
      :pageSize="pageSize"
      @getInfo="getInfo"
      @getInfo_current="getInfo_current">
    </paging>
    <el-drawer
      title="新增管理员"
      :visible.sync="drawer"
      direction="ltr"
      size="300px"
      :before-close="handleClose"
      class="drawerBox">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px" style="padding: 0 10px;">
        <el-form-item label="状态">
          <el-switch
            slot-scope="scope"
            v-model="ruleForm.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="0"
            active-text="启用"
            inactive-text="停用">
          </el-switch>
        </el-form-item>
        <el-form-item label="帐号" prop="roleName">
          <el-input v-model="ruleForm.roleName" placeholder="帐号为必填项" clearable autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" clearable autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" clearable autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="roleUser">
          <el-input v-model="ruleForm.roleUser" placeholder="请输入姓名" clearable></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="roleTel">
          <el-input v-model="ruleForm.roleTel" placeholder="请输入手机号" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
    <el-dialog title="编辑管理员" :visible.sync="dialogFormVisible" width="500px" :rules="ruless">
      <el-form :model="formEdit">
        <el-form-item label="帐号" label-width="80px">
          <el-input v-model="formEdit.userName" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名" label-width="80px">
          <el-input v-model="formEdit.realName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" label-width="80px">
          <el-input v-model="formEdit.phoneNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px">
          <el-input type="password" v-model="formEdit.pass" placeholder="如不需重置密码请勿填写" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" label-width="80px">
          <el-input type="password" v-model="ruleForm.checkPass" placeholder="如不需重置密码请勿填写" clearable autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./AdministratorsList.js"></script>
<style lang="stylus" scoped src="./AdministratorsList.css"></style>
