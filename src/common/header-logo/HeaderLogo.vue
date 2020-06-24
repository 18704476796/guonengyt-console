<template>
  <div class="div">
    <img :src="headerLogo.url" v-if="headerLogo.BooleanUrl" />
    <div v-if="headerLogo.BooleanName">{{headerLogo.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'HeaderLogo',
  props: {
    headerLogo: Object
  }
}
</script>

<style lang="stylus" scoped>
  .div
    float: left
    width: 200px
    padding: 6px 0
    font-size: 18px
    color: #fff
    line-height: 48px
    text-align: center
    img
      margin: auto
      height: 48px
</style>
