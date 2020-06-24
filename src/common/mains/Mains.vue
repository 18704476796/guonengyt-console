<template>
  <el-tabs v-model="tabsVal" type="card" closable @tab-remove="removeTab">
    <el-tab-pane
      v-for="item of list"
      :key="item.name"
      :label="item.title"
      :name="item.name"
      class="tabs">
      <!-- 组件 -->
      <component :is="item.content" @change-tab-remove="removeName"></component>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'Mains',
  props: {
    userInfo: Object
  },
  data () {
    return {
      tabsVal: '',
      list: []
    }
  },
  watch: {
    userInfo: function (e) {
      for (let i = 0; i < this.list.length; i++) {
        if (e.tabName === this.list[i].name) {
          this.tabsVal = e.tabName
          return
        }
      }
      if (!(e.tabName === null || e.tabName === undefined || e.tabName === '' || e.menuUrl === null || e.menuUrl === undefined || e.menuUrl === '')) {
        this.tabsVal = e.tabName
        this.list.push({
          title: e.tabName,
          name: e.tabName,
          content: resolve => require(['@/pages/' + e.menuUrl + '.vue'], resolve)
        })
      }
    }
  },
  methods: {
    removeTab (targetName) {
      if (this.list.length !== 1) {
        let tabs = this.list
        let activeName = this.tabsVal
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }
        this.tabsVal = activeName
        this.list = tabs.filter(tab => tab.name !== targetName)
      } else {
        this.$message({
          showClose: true,
          message: '拒绝您的删除请求，必须保留一张选项卡，',
          type: 'error'
        })
      }
    },
    removeName (name) { // 点取消访问时关闭当前选项卡
      this.removeTab(name)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
