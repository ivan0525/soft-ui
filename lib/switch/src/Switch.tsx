import type { ExtractPropTypes } from 'vue';
import { defineComponent, ref, h, watch, computed } from 'vue';
import VueTypes, { func } from 'vue-types';
import { withInstall } from '../../_utils';
import './styles/index.less';

type CheckedType = boolean | string | number;

const swtichProps = {
  disabled: VueTypes.bool.def(undefined),
  activeColor: VueTypes.string.def('#409eff'),
  loading: VueTypes.bool,
  checked: VueTypes.oneOfType([VueTypes.string, VueTypes.number, VueTypes.bool]),
  checkedValue: VueTypes.oneOfType([VueTypes.string, VueTypes.number, VueTypes.bool]).def(true),
  unCheckedValue: VueTypes.oneOfType([VueTypes.string, VueTypes.number, VueTypes.bool]).def(false),
  onClick: func<(checked: CheckedType, e: Event) => void>(),
  onKeydown: func<(e: Event) => void>(),
  onMouseup: func<(e: Event) => void>(),
};

export type SwtichProps = Partial<ExtractPropTypes<typeof swtichProps>>;

const SSwitch = defineComponent({
  name: 'SSwitch',
  props: swtichProps,
  emits: ['update:checked', 'change', 'click', 'keydown', 'mouseup'],
  setup(props, { emit, expose }) {
    const switchNodeRef = ref();

    const checked = ref();
    const isChecked = computed(() => checked.value === props.checkedValue);

    watch(
      () => props.checked,
      () => {
        checked.value = props.checked;
      },
    );

    const focus = () => {
      switchNodeRef.value?.focus();
    };

    // 暴露focus方法给外面，父组件可通过ref对象调用
    expose({ focus });

    const setChecked = (checked: CheckedType, e: MouseEvent | KeyboardEvent) => {
      if (props.disabled) {
        return;
      }
      emit('update:checked', checked);
      emit('change', checked, e);
    };

    const handleClick = (e: MouseEvent) => {
      focus();
      const status = isChecked.value ? props.unCheckedValue : props.checkedValue;
      // @ts-ignore
      setChecked(status, e);
      emit('click', status, e);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setChecked(true, e);
      } else if (e.key === 'ArrowLeft') {
        setChecked(false, e);
      }
      emit('keydown', e);
    };

    const handleMouseup = (e: MouseEvent) => {
      emit('mouseup', e);
    };
    return () => (
      <button
        class={['s-switch', checked.value && 's-switch__checked']}
        type="button"
        role="switch"
        aria-checked={checked.value}
        onClick={handleClick}
        onKeydown={handleKeyDown}
        onMouseup={handleMouseup}
        ref={switchNodeRef}
      >
        <span class="s-switch__core"></span>
      </button>
    );
  },
});

export default withInstall(SSwitch);
