<!-- 服务流程 -->
<template>
  <div class="box">
    <div class="companyInfo hyb_clear">
      <div class="comButton">
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit" @click="edit(tableData[0])">编辑简介</el-button>
        </el-button-group>
      </div>
      <div class="border changeInfo">
        <div class="comImg">
          <div class="title">服务流程图：</div>
          <div class="content">
            <img :src='api + tableData[0].pictureUrl'/>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="服务流程" :visible.sync="dialogFormVisible" width="500px" :rules="ruless">
      <el-form :model="formEdit">
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./ServiceProcess.js"></script>
<style lang="stylus" scoped src="./ServiceProcess.css"></style>
