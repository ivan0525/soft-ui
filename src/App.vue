<template>
  <div id="app">
    <p class="some-words">今天你写代码了吗?
      <s-icon name="loading" />
      <br>
      <s-switch v-model="checked"></s-switch>
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      checked: true
    }
  }
}
</script>

<style lang="less" scoped>
.some-words {
  font-size: 30px;
  color: royalblue;
}
</style>
