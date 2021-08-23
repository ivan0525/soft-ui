<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "SForm",
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
    labelWidth: {
      type: String,
    },
  },
  provide() {
    return {
      SForm: this,
    };
  },
  data() {
    return {
      fields: [],
    };
  },
  created() {
    this.$on("on-field-item-add", (field) => {
      this.fields.push(field);
    });
    this.$on("on-field-item-remove", (field) => {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1);
      }
    });
  },
  methods: {
    // 公开方法：重置全部数据
    resetFields() {
      this.fields.forEach((field) => {
        field.resetField();
      });
    },
  },
};
</script>

<style lang="less"></style>
