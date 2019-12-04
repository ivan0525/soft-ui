<template>
  <div id="app">
    <p class="some-words">今天你写代码了吗?
      <s-divider direction="vertical"></s-divider>
      <s-icon name="loading" />
      <br>
      <s-switch v-model="checked"></s-switch>
    </p>
    <s-divider direction="horizontal"></s-divider>
    <div>
      <span>雨纷飞</span>
      <s-divider direction="vertical">11</s-divider>
      <span>雪飘零</span>
      <s-divider direction="vertical"></s-divider>
      <span>风萧萧</span>
    </div>
    <div style="height:1px;background-color:#dcdfe6;margin: 20px 0;"></div>
    <div style="height:1px;background-color:#dcdfe6;margin: 20px 0;"></div>
    <div style="height:1px;background-color:#dcdfe6;margin: 20px 0;"></div>
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
