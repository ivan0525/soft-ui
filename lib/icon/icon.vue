<template>
  <i class="s-icon">
    <svg :class="{ 's-icon--loading': name === 'loading' }" aria-hidden="true">
      <use :xlink:href="`#i-${name}`"></use>
    </svg>
  </i>
</template>
<script>
import './svg';
export default {
  name: 'SIcon',
  props: {
    name: String,
  },
};
</script>
<style lang="less" scoped>
.s-icon {
  display: inline-block;
  font-size: inherit;
  vertical-align: -0.125em;
  line-height: 0;
  text-rendering: optimizeLegibility;
  color: inherit;
  svg {
    display: inline-block;
    width: 1em;
    height: 1em;
    fill: currentcolor;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .s-icon--loading {
    animation: spin 1s infinite linear;
  }
}
</style>
