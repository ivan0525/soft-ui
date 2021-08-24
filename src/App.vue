<template>
  <div>
    <s-switch v-model:checked="checked" @change="handleClick"></s-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const a = { a: 1 };
    const a1 = reactive(a);
    a1.a = 2;
    console.log(a, a1);
    const state = reactive({
      foo: 1,
      bar: 2,
    });

    const fooRef = toRef(state, 'foo');
    console.log(fooRef);
    fooRef.value++;
    console.log(state.foo); // 2

    state.foo++;
    console.log(fooRef.value); // 3
  },
});
</script>

<style lang="less">
.some-words {
  font-size: 30px;
  color: royalblue;
}
.content {
  width: 400px;
}
</style>
