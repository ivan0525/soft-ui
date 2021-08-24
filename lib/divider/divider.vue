<template>
  <div :class="['s-divider', `s-divider__${direction}`]">
    <div
      v-if="$slots.default && direction !== 'vertical'"
      :class="['s-divider__text', `is-${contentPosition}`]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'sDivider',
  props: {
    // 分割线的方向
    direction: {
      type: String,
      default: 'horizontal',
      validator: val => ['vertical', 'horizontal'].includes(val),
    },
    // 分割线上文字的位置
    contentPosition: {
      type: String,
      default: 'center',
      validator: val => ['left', 'center', 'rignt'].includes(val),
    },
  },
};
</script>

<style lang="less" scoped>
.s-divider {
  position: relative;
  background-color: #dcdfe6;
  .s-divider__text {
    position: absolute;
    padding: 0 20px;
    font-size: 14px;
    background-color: #fff;
    color: #303133;
    &.is-center {
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
    &.is-left {
      left: 20px;
      transform: translateY(-50%);
    }
    &.is-right {
      right: 20px;
      transform: translateY(-50%);
    }
  }
}

.s-divider__horizontal {
  display: block;
  width: 100%;
  height: 1px;
  margin: 20px 0;
}

.s-divider__vertical {
  display: inline-block;
  width: 1px;
  height: 1em;
  margin: 0 8px;
  vertical-align: middle;
}
</style>
