<!-- 合作伙伴 -->
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
      title="新增合作伙伴"
      :visible.sync="drawer"
      direction="ltr"
      size="400px"
      :before-close="handleClose"
      class="drawerBox">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px" style="padding: 0 10px;">
        <el-form-item label="序号" prop="newsSort">
          <el-input v-model="ruleForm.newsSort" type='number' placeholder="请输入排序" clearable autocomplete="off"></el-input>
        </el-form-item>
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
        <el-form-item label="公司名称" label-width="80px" prop='title'>
          <el-input v-model="ruleForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司logo" label-width="80px">
          <el-upload
            class="upload-demo"
            ref="upload1"
            :action="upload_url"
            :on-change="img_path_file"
            accept=".jpg,.jpeg,.png"
            :auto-upload="false"
            list-type="picture"
            :file-list="img_path"
            :limit="1"
          >
            <el-button size="small" type="primary" @click="clearUploadedImage('upload1')">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
    <el-dialog title="编辑合作伙伴" :visible.sync="dialogFormVisible" width="500px" :rules="ruless">
      <el-form :model="formEdit" ref="formEdit" :rules="rules">
        <el-form-item label="序号" label-width="80px">
          <el-input v-model="formEdit.newsSort" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司名称" label-width="80px" prop='title'>
          <el-input v-model="formEdit.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司logo" label-width="80px">
          <el-upload
            class="upload-demo"
            ref="upload1"
            :action="upload_url"
            :on-change="img_path_file"
            accept=".jpg,.jpeg,.png"
            :auto-upload="false"
            list-type="picture"
            :file-list="img_path"
            :limit="1"
          >
            <el-button size="small" type="primary" @click="clearUploadedImage('upload1')">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./Partner.js"></script>
<style lang="stylus" scoped src="./Partner.css"></style>
