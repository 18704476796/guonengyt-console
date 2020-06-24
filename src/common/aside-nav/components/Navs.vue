<template>
  <div>
    <el-submenu v-for="item of asideNav" :key="item.id" :index="item.menuUrl" v-if="item.menuList !== undefined && item.menuList.length > 0 ">
      <template slot="title">
        <i class="iconfont" v-html="item.menuImgCode"></i>
        <span slot="title">{{item.menuName}}</span>
      </template>
      <navs :asideNav="item.menuList"></navs>
    </el-submenu>
    <el-menu-item v-else :index="item.menuUrl" @click="hrefUrlClick(item.menuName, item.menuUrl, item.ref)">
      <i class="iconfont" v-html="item.menuImgCode"></i>
      <span slot="title">{{item.menuName}}</span>
    </el-menu-item>
  </div>
</template>

<script>
import Navs from './Navs'
export default {
  name: 'Navs',
  components: {
    Navs
  },
  props: {
    asideNav: Array
  },
  methods: {
    hrefUrlClick: function (_name, _url, _ref) {
      let userInfo = {
        tabName: _name,
        menuUrl: _url,
        ref: _ref
      }
      this.$store.dispatch('changeUserInfo', userInfo)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
