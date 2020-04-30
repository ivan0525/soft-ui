<template>
  <div class="s-form-item"></div>
</template>

<script>
import emitter from "../../src/mixins/emitter";
export default {
  name: "sFormItem",
  mixins: [emitter],
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
    },
  },
  // 组件销毁前，将从实例从Form的缓存中移除
  beforeDestroy() {
    this.dispatch("iForm", "on-field-item-remove", this);
  },
  mounted() {
    // 如果没有传入prop，就不需要校验
    if (this.prop) {
      this.dispatch("iForm", "on-field-item-add", this);
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
