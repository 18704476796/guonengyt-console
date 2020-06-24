<!-- 高校能源解决方案 -->
<template>
  <div class="box">
    <screen-box
      @changeStatusValue="changeStatusValue"
      @search="search"
      @driverAdd="driverAdd">
    </screen-box>
    <tables
      :tableData="tableData"
      :tableHeight="tableHeight"
      :disabled="disabled"
      @onlocked="onlocked"
      @edit="edit"
      @deleteUser="deleteUser"
      @lookFor='lookFor'>
    </tables>
    <paging
      :totalRows="totalRows"
      :pageSize="pageSize"
      @getInfo="getInfo"
      @getInfo_current="getInfo_current">
    </paging>
    <el-drawer
      title="新增解决方案"
      :visible.sync="drawer"
      direction="ltr"
      size="740px"
      :before-close="handleClose"
      class="drawerBox">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" style="padding: 0 10px;">
        <el-form-item label="状态" label-width="60px">
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
        <el-form-item label="序号" prop="newsSort" label-width="60px">
          <el-input v-model="ruleForm.newsSort" type='number' placeholder="请输入排序" clearable autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="标题" label-width="60px" prop='title'>
          <el-input v-model="ruleForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <div>请编辑内容：</div>
          <editor-bar v-model="ruleForm.content" :isClear="isClear"></editor-bar>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
    <el-dialog title="编辑解决方案" :visible.sync="dialogFormVisible" width="740px" :rules="ruless">
      <el-form :model="formEdit" ref="formEdit" :rules="rules">
        <el-form-item label="序号" label-width="60px">
          <el-input v-model="formEdit.newsSort" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="标题" label-width="60px" prop='title'>
          <el-input v-model="formEdit.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <div>请编辑内容：</div>
          <editor-bar v-model="formEdit.content" :isClear="isClear"></editor-bar>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitEdit">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogDetail">
      <div class="detailTitle">{{ruleForm.title}}</div>
      <div class="detailText" v-html="ruleForm.content"></div>
    </el-dialog>
  </div>
</template>

<script src="./SchoolSolution.js"></script>
<style lang="stylus" scoped src="./SchoolSolution.css"></style>
