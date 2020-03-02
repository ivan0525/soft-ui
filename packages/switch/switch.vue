<script>
export default {
  name: 'sSwitch',
  props: {
    disabled: Boolean,
    activeColor: {
      type: String,
      default: '#409eff'
    }
  },
  data() {
    return {
      isChecked: false
    }
  },
  methods: {
    handleChange() {
      if (!this.disabled) {
        this.isChecked = !this.isChecked
        this.$emit('input', this.isChecked)
        this.$emit('change', this.isChecked)
      }
    }
  },
  render() {
    const className = {
      class: [
        's-switch',
        this.isChecked && 's-switch__checked'
      ]
    }
    return (
      <button {...className} onClick={this.handleChange}>
        <span class="s-switch__core"></span>
      </button>
    )
  }
}
</script>
<style lang="less" scoped>
.s-switch {
  position: relative;
  width: 44px;
  height: 22px;
  padding: 0;
  border: none;
  outline: none;
  border: 1px solid transparent;
  border-radius: 100px;
  transition: background-color 0.3s;
  background-color: #dcdfe6;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    transition: 0.3s;
    background-color: #fff;
  }
  &:active {
    &::before {
      width: 24px;
    }
  }
  &.s-switch__checked {
    background-color: #409eff;
    &::before {
      left: 100%;
      margin-left: -3px;
      transform: translateX(-100%);
    }
  }
}
</style>
