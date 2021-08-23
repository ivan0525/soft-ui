<template>
  <div class="s-input">
    <input
      class="s-input__inner"
      type="text"
      :value="currentValue"
      @input="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>

<script>
import emitter from "./../../src/mixins/emitter";
export default {
  name: "sInput",
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
  },
  methods: {
    handleInput(e) {
      const value = e.target.value;
      this.$emit("input", value);
      this.dispatch("SFormItem", "on-form-change", value);
    },
    handleBlur() {
      this.dispatch("SFormItem", "on-form-blur", this.currentValue);
    },
  },
};
</script>

<style lang="less">
.s-input {
  .s-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
  }
}
</style>
