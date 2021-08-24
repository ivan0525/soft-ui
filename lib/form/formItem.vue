<template>
  <div
    class="s-form-item"
    :class="{
      'is-required': isRequired,
      'is-error': validateState === 'error',
    }"
  >
    <label v-if="label" class="s-form-item__label">{{ label }}</label>
    <div class="s-form-item__content">
      <slot></slot>
      <div class="s-form-item__error">{{ validateMessage }}</div>
    </div>
  </div>
</template>

<script>
import emitter from '../../src/mixins/emitter';
import AsyncValidator from 'async-validator';
export default {
  name: 'SFormItem',
  mixins: [emitter],
  inject: ['SForm'],
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      isRequired: false, // 是否为必填
      validateState: '', // 校验状态
      validateMessage: '',
    };
  },
  computed: {
    // 从SForm的model中动态得到当前表单组件的数据
    fieldValue() {
      return this.SForm.model[this.prop];
    },
  },
  // 组件销毁前，将从实例从Form的缓存中移除
  beforeDestroy() {
    this.dispatch('SForm', 'on-field-item-remove', this);
  },
  // 组件挂载时，将实例缓存到Form中
  mounted() {
    // 如果没有传入prop，就不需要校验
    if (this.prop) {
      this.dispatch('SForm', 'on-field-item-add', this);
      // 设置初始值，以便在重置时恢复默认值
      this.initialValue = this.fieldValue;
      this.setRules();
    }
  },
  methods: {
    setRules() {
      let rules = this.getRules();
      if (rules.length) {
        rules.every(rule => {
          // 如果当前校验规则中有必填项，则将其标出
          this.isRequired = rule.required;
        });
      }
      // 监听来自表单组件中派发的自定义事件
      this.$on('on-form-change', this.onFieldChange);
      this.$on('on-form-blur', this.onFieldBlur);
    },

    // 从SForm的rules中，获取当前SFormItem的校验规则
    getRules() {
      let formRules = this.SForm.rules;
      formRules = formRules ? formRules[this.prop] : [];
      // 如果formRules是一个对象，需要将其放入一个数组中
      return [].concat(formRules || []);
    },

    // 只支持blur和change，所以过滤出符合要求的校验规则
    getFilteredRules(trigger) {
      const rules = this.getRules();
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
    },

    // 校验数据
    validate(trigger, callback = function () {}) {
      let rules = this.getFilteredRules(trigger);
      if (!rules || rules.length === 0) {
        return true;
      }
      // 设置状态为校验中
      this.validateState = 'validating';
      // 以下为 async-validator 库的调用方法
      let descriptor = {};
      descriptor[this.prop] = rules;
      const validator = new AsyncValidator(descriptor);
      let model = {};
      model[this.prop] = this.fieldValue;
      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error';
        this.validateMessage = errors ? errors[0].message : '';
        callback(this.validateMessage);
      });
    },

    // 重置数据
    resetField() {
      this.validateMessage = '';
      this.validateState = '';
      this.SForm.model[this.prop] = this.initialValue;
    },
    onFieldBlur() {
      this.validate('blur');
    },

    onFieldChange() {
      this.validate('change');
    },
  },
};
</script>

<style lang="less">
.s-form-item {
  margin-bottom: 22px;
  &.is-required::before {
    content: '*';
    margin-right: 4px;
    color: red;
  }
  &.is-error {
    .s-input__inner {
      border-color: red;
    }
  }
  .s-form-item__content {
    position: relative;
    .s-form-item__error {
      position: absolute;
      top: 100%;
      left: 0;
      padding-top: 4px;
      line-height: 1;
      font-size: 12px;
      color: red;
    }
  }
}
</style>
