<!-- home架构 -->
<template>
  <el-container style="height: 100%;">
    <el-header>
      <header-logo :headerLogo='headerLogo'></header-logo>
      <div class="left"><header-nav-left :headNav='headNavLeft'></header-nav-left></div>
      <div class="right"><header-nav-right :headNav='headNavRight'></header-nav-right></div>
    </el-header>
    <el-container>
      <el-aside style="width: auto">
        <aside-nav :asideNav="asideHomeNav"></aside-nav>
      </el-aside>
      <el-main ref="main">
        <mains :userInfo="userInfo"></mains>
      </el-main>
    </el-container>
    <el-footer style="height: 26px;">
      <footerbox></footerbox>
    </el-footer>
  </el-container>
</template>

<script src="./Home.js"></script>
<style lang="stylus" scoped src="./Home.css"></style>
