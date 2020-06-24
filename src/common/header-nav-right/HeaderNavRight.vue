<template>
  <ul class="hyb_clear">
    <li
      v-for="item of headNav"
      :key="item.id"
    >
      <el-button
        circle
        type="primary"
        :class="{iconfont:'iconfont',hyb_tsn:'hyb_tsn'}"
        @click="navClick(item.menuName, $event)"
        :title="item.menuName"
        :btn-id="item.id"
        :ref="item.ref"
        v-html="item.menuImgCode"
      >
      </el-button>
    </li>
  </ul>
</template>

<script>
import Request from './Request.js' // 接口调用文件
export default {
  name: 'PublicAsideRight',
  props: {
    headNav: Array
  },
  methods: {
    navClick (navName, e) { // 导航点击函数
      if (navName === '退出') {
        this.$confirm('您正在进行退出操作, 是否继续?', '提示', {
          confirmButtonText: '确定退出',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          })
          this.$store.dispatch('changeToken', '')
          this.$router.push('/login')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          })
        })
      } else {
        Request.headerNav(this, e.target.getAttribute('btn-id'))
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  li
    float: left
    width: 60px
    height: 60px
    text-align: center
    line-height: 60px
    color: #fff
    button
      width: 50px
      height: 50px
      font-size: 26px
</style>
