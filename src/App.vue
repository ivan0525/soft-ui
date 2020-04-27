<template>
  <div id="app">
    <!-- <p class="some-words">今天你写代码了吗?
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
    <s-button @click="handleClick">Change</s-button>
    <div style="height:1px;background-color:#dcdfe6;margin: 20px 0;"></div>
    <s-button type="primary">Primary</s-button>
    <div style="height:1px;background-color:#dcdfe6;margin: 20px 0;"></div>
    <div style="height:1px;background-color:#dcdfe6;margin: 20px 0;"></div> -->
    <div class="content">
      <s-dragger :data="listData"></s-dragger>
    </div>
    <todo :todos="listData">
      <template #todo="{todo}">
        <span v-if="todo.isComplete">✅</span>
        {{ todo.content }}
      </template>
    </todo>
    <foo></foo>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Todo: () => import('./components/Todo'),
    Foo: () => import('./components/Foo')
  },
  data() {
    return {
      checked: true,
      listData: [
        { id: 111, content: '内容一', isComplete: true },
        { id: 222, content: '内容二', isComplete: false },
        { id: 333, content: '内容三', isComplete: true },
        { id: 444, content: '内容四', isComplete: true }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.some-words {
  font-size: 30px;
  color: royalblue;
}
.content {
  width: 400px;
}
</style>
