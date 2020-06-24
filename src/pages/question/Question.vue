<!-- 企业能源解决方案 -->
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
      @deleteUser="deleteUser">
    </tables>
    <paging
      :totalRows="totalRows"
      :pageSize="pageSize"
      @getInfo="getInfo"
      @getInfo_current="getInfo_current">
    </paging>
    <el-drawer
      title="新增题目"
      :visible.sync="drawer"
      direction="ltr"
      size="400px"
      :before-close="handleClose"
      class="drawerBox">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px" style="padding: 0 10px;">
        <el-form-item label="状态">
          <el-switch
            slot-scope="scope"
            v-model="ruleForm.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-value=1
            inactive-value=0
            active-text="启用"
            inactive-text="停用">
          </el-switch>
        </el-form-item>
        <el-form-item label="序号" prop="newsSort">
          <el-input v-model="ruleForm.newsSort" type='number' placeholder="请输入排序" clearable autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="题目类型" label-width="80px" prop='moreAndOne'>
          <el-radio-group v-model="ruleForm.moreAndOne">
              <el-radio :label="0">单选题</el-radio>
              <el-radio :label="1">多选题</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="题目" label-width="80px" prop='title'>
          <el-input type="textarea" v-model="ruleForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="答案" label-width="80px" prop="content">
          <el-input type="textarea" v-model="ruleForm.content" autocomplete="off" placeholder='请输入答案,答案之间请用/分隔开'></el-input>
          <span class="tips">(答案之间请用/分隔)</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
    <el-dialog title="编辑问题" :visible.sync="dialogFormVisible" width="500px" :rules="ruless">
      <el-form :model="formEdit" ref="formEdit" :rules="rules">
        <el-form-item label="序号" label-width="80px">
          <el-input v-model="formEdit.newsSort" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="题目类型" label-width="80px" prop='moreAndOne'>
          <el-radio-group v-model="formEdit.moreAndOne">
              <el-radio :label="0">单选题</el-radio>
              <el-radio :label="1">多选题</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="题目" label-width="80px" prop='title'>
          <el-input type="textarea" v-model="formEdit.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="答案" label-width="80px" prop="content">
          <el-input type="textarea" v-model="formEdit.content" autocomplete="off" placeholder='请输入答案,答案之间请用/分隔开'></el-input>
          <span class="tips">(答案之间请用/分隔)</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./Question.js"></script>
<style lang="stylus" scoped src="./Question.css"></style>
