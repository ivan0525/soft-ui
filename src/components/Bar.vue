<template>
  <div>
    bar
  </div>
</template>

<script>
export default {
  name: 'Bar',
  created() {
    this.$on('show-message', this.handleShowMessage)
  },
  methods: {
    handleShowMessage(msg) {
      window.alert(msg)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
