<!-- 标准版版 -->
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
    <el-dialog title="标准版" :visible.sync="dialogFormVisible" width="500px" :rules="ruless">
      <el-form :model="formEdit" ref="formEdit" :rules="rules">
        <el-form-item label="版本类型" label-width="80px" prop="title">
          <el-input v-model="formEdit.title" autocomplete="off" v-if='!formEdit.title'></el-input>
          <el-input v-model="formEdit.title" autocomplete="off" disabled v-if='formEdit.title'></el-input>
        </el-form-item>
        <el-form-item label="上传图片" label-width="80px">
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
        <el-form-item label="内容" label-width="80px">
          <el-input type="textarea" v-model="formEdit.content" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./StandardVersion.js"></script>
<style lang="stylus" scoped src="./StandardVersion.css"></style>
