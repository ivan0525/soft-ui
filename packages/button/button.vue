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
  render () {
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

    return (
      <button {...className}>
        {slots.length > 0 ? <span>{this.$slots.default}</span> : ''}
      </button>
    )
  }
}
</script>
