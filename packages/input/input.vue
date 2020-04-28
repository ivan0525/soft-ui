<template>
  <div class="s-input">
    <input
      type="text"
      :value="currentValue"
      @input="handleInput"
      @blur="handleBlur"
    >
  </div>
</template>

<script>
export default {
  name: 'sInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  methods: {
    handleInput (e) {
      const value = e.target.value
      this.$emit('input')
    },
    handleBlur (e) {
    },
    handleChage (e) {
      const value = e.target.value
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
