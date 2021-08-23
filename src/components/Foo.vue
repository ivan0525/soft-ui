<template>
  <div>
    <button @click="handleClick">I'm Foo</button>
    <button @click="handleChangeData">change Data</button>
    <div>{{ msg.msg }}</div>
    <far></far>
  </div>
</template>

<script>
import Far from './Far.vue'
import emitter from '../mixins/emitter'
export default {
  name: 'Foo',
  inject: ['msg'],
  mixins: [emitter],
  components: {
    Far
    // Far: () => import('./Far')
  },
  data () {
    return {
      message: 'Foo'
    }
  },
  created () {
    this.$on('msg-from-bar', this.showBarMsg)
  },
  // beforeCreate () {
  //   debugger
  // },
  // created () {
  //   debugger
  //   console.log('Foo')
  // },
  // mounted () {
  //   debugger
  //   console.log('Foo')
  // },
  methods: {
    handleClick () {
      this.broadcast('Bar', 'show-message', '我是Foo发过来的消息')
    },
    showBarMsg (data) {
      window.alert(data.msg)
    },
    handleChangeData () {
      console.log(this.msg)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
