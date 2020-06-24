<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    row-key="id"
    border
    default-expand-all
    :tree-props="{children: 'menuList', hasChildren: 'hasChildren'}"
    :height="tableHeight + 'px'"
    class="box">
    <el-table-column label="排序" width="120">
      <el-input
        slot-scope="scope"
        placeholder="空/NULL"
        v-model="scope.row.menuSort"
        :disabled="disabled"
        class="inputSort">
      </el-input>
    </el-table-column>
    <el-table-column prop="menuName" label="名称" width="120">
      <el-input
        slot-scope="scope"
        placeholder="空/NULL"
        v-model="scope.row.menuName"
        :disabled="disabled"
        class="inputAll">
      </el-input>
    </el-table-column>
    <el-table-column prop="id" label="导航Id" width="100"></el-table-column>
    <el-table-column prop="parentId" label="父级id" width="80">
      <el-input
        slot-scope="scope"
        placeholder="空/NULL"
        v-model="scope.row.parentId"
        :disabled="disabled"
        class="inputAll">
      </el-input>
    </el-table-column>
    <el-table-column prop="menuImgCode" label="图标" width="120">
      <el-input
        slot-scope="scope"
        placeholder="空/NULL"
        v-model="scope.row.menuImgCode"
        :disabled="disabled"
        class="inputAll">
      </el-input>
    </el-table-column>
    <el-table-column prop="ref" label="元素标记" width="120">
      <el-input
        slot-scope="scope"
        placeholder="空/NULL"
        v-model="scope.row.ref"
        :disabled="disabled"
        class="inputAll">
      </el-input>
    </el-table-column>
    <el-table-column prop="tabName" label="指向标题" width="120">
      <el-input
        slot-scope="scope"
        placeholder="空/NULL"
        v-model="scope.row.tabName"
        :disabled="disabled"
        class="inputAll">
      </el-input>
    </el-table-column>
    <el-table-column prop="menuUrl" label="指向地址">
      <el-input
        slot-scope="scope"
        placeholder="空/NULL"
        v-model="scope.row.menuUrl"
        :disabled="disabled"
        class="inputAll">
      </el-input>
    </el-table-column>
    <el-table-column prop="menuType" label="导航方向" width="100">
      <el-tag type="info" slot-scope="scope" v-if="scope.row.menuType === 0">禁用</el-tag>
      <el-switch
        v-else
        slot-scope="scope"
        v-model="scope.row.menuType"
        active-color="#13ce66"
        inactive-color="#409EFF"
        :active-value="2"
        :inactive-value="1"
        active-text="右侧"
        inactive-text="左侧"
        :disabled="disabled">
      </el-switch>
    </el-table-column>
    <el-table-column prop="status" label="状态" width="100">
      <el-switch
        slot-scope="scope"
        v-model="scope.row.status"
        active-color="#13ce66"
        inactive-color="#ff4949"
        :active-value="1"
        :inactive-value="0"
        active-text="启用"
        inactive-text="停用"
        :disabled="disabled">
      </el-switch>
    </el-table-column>
    <el-table-column prop="id" label="操作" width="60">
      <el-button type="danger" icon="el-icon-delete" circle slot-scope="scope" :disabled="disabled" @click="onDelete(scope.row.id)"></el-button>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Tables',
  props: {
    tableData: Array,
    tableHeight: Number,
    disabled: Boolean
  },
  methods: {
    onDelete (Id) { // 删除函数
      this.$emit('onDelete', Id)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .inputSort
    width: 30px
  .inputSort >>> input
    padding: 0 10px
    height: 30px
    line-height: 30px
  .inputAll >>> input
    padding: 0 10px
    height: 30px
    line-height: 30px
  .box >>> td, .box >>> th
    padding: 6px 0
</style>
