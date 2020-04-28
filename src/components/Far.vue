<template>
  <div>
    Far
    <bar></bar>
  </div>
</template>

<script>
export default {
  name: 'Far',
  components: {
    Bar: () => import('./Bar')
  }
  // beforeCreate () {
  //   debugger
  // },
  // created () {
  //   debugger
  //   console.log('Far')
  // },
  // mounted () {
  //   debugger
  //   console.log('Far')
  // },
}
</script>

<style lang="scss" scoped>
</style>
