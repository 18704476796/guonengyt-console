<!-- 权限管理 -->
<template>
  <div class="box">
    <el-row :gutter="50" :style="{height: tableHeight + 'px'}">
      <el-col :span="6" style="height: 100%;">
        <div style="height: 100%;">
          <h3 class="titleH3">选择角色</h3>
          <ul :style="{height: roleHeight + 'px', overflow: 'auto'}">
            <li v-for="item of roleList" :key="item.id">
              <el-radio v-model="roleSelection" :label="item.id" border @change="onRoleSelection" style="width: 100%;">
                {{item.roleName}}
              </el-radio>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="18" style="height: 100%;">
        <el-transfer
          filterable
          :filter-method="filterMethod"
          filter-placeholder="请输入要搜索的权限"
          v-model="hasPermission"
          :data="unauthorized"
          :titles="['未拥有权限', '已拥有权限']"
          ref="transfer"
          @change="handleChange">
        </el-transfer>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./Jurisdiction.js"></script>
<style lang="stylus" scoped src="./Jurisdiction.css"></style>
