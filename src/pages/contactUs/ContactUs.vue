<!-- 联系我们 -->
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
    <el-dialog title="编辑新闻动态" :visible.sync="dialogFormVisible" width="500px">
      <el-form ref="formEdit" :model="formEdit" :rules="rules">
        <el-form-item label="电话" label-width="80px" prop="tel">
          <el-input v-model="formEdit.tel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" label-width="80px" prop='webId'>
          <el-input v-model="formEdit.webId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮编" label-width="80px" prop="icpNumb">
          <el-input type='number' v-model="formEdit.icpNumb" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="技术支持" label-width="80px" prop="publicNetworkSecurity">
          <el-input v-model="formEdit.publicNetworkSecurity" autocomplete="off"></el-input>
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
        <el-form-item label="背景图片" label-width="80px">
          <el-upload
            class="upload-demo"
            ref="upload"
            :action="upload_url"
            :on-change="back_path_file"
            accept=".jpg,.jpeg,.png"
            :auto-upload="false"
            list-type="picture"
            :file-list="back_path"
            :limit="1"
          >
            <el-button size="small" type="primary" @click="clearUploadedImage('upload')">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="名称" label-width="80px" prop="name">
          <el-input v-model="formEdit.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备案号" label-width="80px" prop="recordNumber">
          <el-input v-model="formEdit.recordNumber" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./ContactUs.js"></script>
<style lang="stylus" scoped src="./ContactUs.css"></style>
