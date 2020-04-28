<template>
  <div>
    bar
    <button @click="handleClick">dispatch Foo</button>
  </div>
</template>

<script>
import emitter from '../mixins/emitter'
export default {
  name: 'Bar',
  mixins: [emitter],
  created () {
    console.log('Bar')
    this.$on('show-message', this.handleShowMessage)
  },
  mounted () {
    console.log('Bar123123213123')
  },
  methods: {
    handleShowMessage (msg) {
      window.alert(msg)
    },
    handleClick () {
      this.dispatch('Foo', 'msg-from-bar', { msg: 'this is bar' })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
