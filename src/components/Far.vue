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
}
</script>

<style lang="scss" scoped>
</style>
