<template>
  <div>
    <button @click="handleClick">I'm Foo</button>
    <far></far>
  </div>
</template>

<script>
import emitter from '../mixins/emitter'
export default {
  name: 'Foo',
  mixins: [emitter],
  components: {
    Far: () => import('./Far')
  },
  data() {
    return {
      message: 'Foo'
    }
  },
  methods: {
    handleClick() {
      this.broadcast('Bar', 'show-message', '我是Foo发过来的消息')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
