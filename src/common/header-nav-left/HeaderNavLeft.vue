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
        @click="navClick(item.menuName, item.ref,$event)"
        :title="item.menuName"
        :ref="item.ref"
        v-html="item.menuImgCode"
      >
      </el-button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PublicAsideLeft',
  props: {
    headNav: Array
  },
  watch: {
    headNav () {
      console.log(this.$store.state.navTsIcon)
      this.$nextTick(function () {
        this.$refs.telescopic[0].$el.innerHTML = this.$store.state.navTsIcon
      })
    }
  },
  methods: {
    navClick (navName, navRef, e) { // 导航点击函数
      if (navName === '伸缩') {
        if (parseInt(this.$store.state.navTs) === 1) {
          this.$store.dispatch('changeNavTs', 0)
          e.target.innerHTML = '&#xe62c;'
          this.$store.dispatch('changeNavTsIcon', '&#xe62c;')
        } else {
          this.$store.dispatch('changeNavTs', 1)
          e.target.innerHTML = '&#xe62b;'
          this.$store.dispatch('changeNavTsIcon', '&#xe62b;')
        }
      } else if (navName === '前台') {
        window.open('http://www.benshijy.com', '_blank')
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
