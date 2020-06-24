<!-- 角色管理 -->
<template>
  <div class="box">
    <screen-box
      :disabled.sync="disabled"
      @search="search"
      @changeDisabled="edit"
      @newlyAdd="newlyAdd"
      @preservation="preservation">
    </screen-box>
    <el-collapse accordion>
      <el-collapse-item v-for="item of formData" :key="item.id">
        <template slot="title">
          <span class="span color1">角色名称：{{item.roleName}}</span>
          <span class="span color2">角色Id：{{item.id}}</span>
          <span class="span color3">描述：{{item.description}}</span>
        </template>
        <div>
          <el-form :inline="true" ref="form" :model="item" label-width="80px">
            <el-row :gutter="20">
            <el-col :span="5">
              <el-form-item label="角色名称" style="width: 100%; display: flex;">
                <el-input
                  v-model="item.roleName"
                  placeholder="推荐6个字以内"
                  :disabled="disabled"
                  style="flex: 1;">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="17">
              <el-form-item label="角色描述" style="width: 100%; display: flex;">
                <el-input
                  v-model="item.description"
                  placeholder="推荐推荐简短描述,30字以内个字以内"
                  :disabled="disabled">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="2" v-if="disabled">
              <el-form-item>
                <el-button
                  type="danger"
                  @click="onDelete(item.id)"
                  class="button-delete"
                  :disabled="disabled">删除
                </el-button>
              </el-form-item>
            </el-col>
            </el-row>
          </el-form>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-drawer
      title="新增角色"
      :visible.sync="drawer"
      direction="ltr"
      size="300px"
      :before-close="handleClose">
      <el-form ref="forms" :model="form" :rules="rules" label-width="80px" style="padding: 0 10px;">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="form.roleName" placeholder="名称为必填项" clearable></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="form.description" clearable type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script src="./Role.js"></script>
<style lang="stylus" scoped src="./Role.css"></style>
