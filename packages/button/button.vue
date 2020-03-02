<script>
export default {
  name: 'sButton',
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'default',
      validator: (val) =>
        [
          'primary',
          'success',
          'warning',
          'info',
          'danger',
          'default',
          'text'
        ].includes(val)
    },
    // 按钮图标
    icon: {
      type: String,
      default: ''
    },
    // 按钮尺寸
    size: {
      type: String,
      default: 'medium',
      validator: (val) =>
        [
          'small',
          'medium',
          'large'
        ].includes(val)
    },
    // 幽灵按钮
    plain: Boolean,
    // 圆角按钮
    round: Boolean,
    // 圆形图标按钮
    circle: Boolean,
    // 加载中
    loading: Boolean,
    // 禁用状态
    disabled: Boolean,
  },
  render() {
    const className = {
      class: [
        's-button',
        this.type && `s-button-${this.type}`,
        this.size && `s-button-${this.size}`
      ]
    }

    const slots = Object.keys(this.$slots).reduce(
      (arr, key) => arr.concat(this.$slots[key]),
      []
    )
    // 按钮点击事件
    const handleClick = () => {
      this.$emit('click')
    }

    return (
      <button type="button" {...className} onClick={handleClick}>
        {slots.length > 0 ? <span>{this.$slots.default}</span> : ''}
      </button>
    )
  }
}
</script>
<style lang="less" scoped>
@primaryActive: #40a9ff;
@primary: #1890ff;
@keyframes wave {
  from {
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  }
  to {
    box-shadow: 0 2px 0 red;
  }
}
.s-button {
  & {
    height: 32px;
    text-align: center;
    line-height: 1;
    padding: 0 15px;
    white-space: nowrap;
    font-weight: 400;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    color: rgba(0, 0, 0, 0.65);
    transition: all 0.3s;
    font-size: 14px;
    user-select: none;
    outline: 0;
    &:active,
    &:focus,
    &:hover {
      color: @primaryActive;
      border-color: currentColor;
    }
    &:focus,
    &:active {
      border-color: red;
      animation: wave 0.3s ease;
    }
  }
}
.s-button-primary {
  color: #fff;
  background-color: @primary;
  border-color: @primary;
  &:hover,
  &:active,
  &:focus {
    background-color: @primaryActive;
    border-color: @primaryActive;
    color: #fff;
  }
}
</style>
