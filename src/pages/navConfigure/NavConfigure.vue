<!-- 资源管理 -->
<template>
  <div class="box">
    <screen-box
      :disabled.sync="disabled"
      @changeDisabled="edit"
      @preservation="preservation"
      @newlyAdd="newlyAdd">
    </screen-box>
    <tables :tableData="tableData" :tableHeight="tableHeight" :disabled="disabled" @onDelete="onDelete"></tables>
    <el-drawer
      title="新增导航"
      :visible.sync="drawer"
      direction="ltr"
      size="300px"
      :before-close="handleClose">
      <el-form ref="forms" :model="form" :rules="rules" label-width="80px" style="padding: 0 10px;">
        <el-form-item label="父级Id">
          <el-select v-model="form.parentId" placeholder="请选择父级Id" @change="changeParentId">
            <el-option :label="item.name" :value="item.id" v-for="item of parentElement" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="form.menuSort" clearable></el-input>
        </el-form-item>
        <el-form-item label="名称" prop="menuName">
          <el-input v-model="form.menuName" placeholder="名称为必填项" clearable></el-input>
        </el-form-item>
        <el-form-item label="图标">
          <el-input v-model="form.menuImgCode" clearable></el-input>
        </el-form-item>
        <el-form-item label="元素标记">
          <el-input v-model="form.ref" clearable></el-input>
        </el-form-item>
        <el-form-item label="指向标题">
          <el-input v-model="form.tabName" clearable></el-input>
        </el-form-item>
        <el-form-item label="指向地址">
          <el-input v-model="form.menuUrl" clearable></el-input>
        </el-form-item>
        <el-form-item label="导航方向" v-if="form.parentId === 0">
          <el-switch
            slot-scope="scope"
            v-model="form.menuType"
            active-color="#13ce66"
            inactive-color="#409EFF"
            :active-value="2"
            :inactive-value="1"
            active-text="右侧"
            inactive-text="左侧">
          </el-switch>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch
            slot-scope="scope"
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="0"
            active-text="启用"
            inactive-text="停用">
          </el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script src="./NavConfigure.js"></script>
<style lang="stylus" scoped src="./NavConfigure.css"></style>
