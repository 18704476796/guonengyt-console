<!-- 系统设置 -->
<template>
  <div :style="{height: boxHeight + 'px'}" class="box">
  <div>系统设置1</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置2</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置3</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置4</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置</div>
  <div>系统设置5</div>
  </div>
</template>

<script>
export default {
  name: 'Systemsettings',
  data () {
    return {
      boxHeight: this.$store.state.mainHeight - 76 // 76为main顶部及填充值
    }
  }
}
</script>

<style lang="stylus" scoped>
  .box
    overflow-y: auto
</style>
