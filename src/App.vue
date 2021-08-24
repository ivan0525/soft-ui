<template>
  <div>
    <s-switch v-model:checked="checked" @change="handleClick"></s-switch>
    <!-- <p class="some-words">今天你写代码了吗?
      <s-divider direction="vertical"></s-divider>
      <s-icon name="loading" />
      <br>
      <s-switch v-model="checked"></s-switch>
    </p>
    <s-divider direction="horizontal"></s-divider>
    <div>
      <span>雨纷飞</span>
      <s-divider direction="vertical">11</s-divider>
      <span>雪飘零</span>
      <s-divider direction="vertical"></s-divider>
      <span>风萧萧</span>
    </div>
    <s-button @click="handleClick">Change</s-button>
    <div style="height:1px;background-color:#dcdfe6;margin: 20px 0;"></div>
    <s-button type="primary">Primary</s-button>
    <div style="height:1px;background-color:#dcdfe6;margin: 20px 0;"></div>
    <div style="height:1px;background-color:#dcdfe6;margin: 20px 0;"></div>
    <div class="content">
      <s-dragger :data="listData"></s-dragger>
    </div>
    <todo :todos="listData">
      <template #todo="{todo}">
        <span v-if="todo.isComplete">✅</span>
        {{ todo.content }}
      </template>
    </todo> -->
    <s-input v-model="text"></s-input>
    <!-- <s-form :model="personInfo" :rules="rules" label-width="90px">
      <s-form-item label="姓名：" prop="name">
        <s-input v-model="personInfo.name"></s-input>
      </s-form-item>
      <s-form-item label="年龄：" prop="age">
        <s-input></s-input>
      </s-form-item>
    </s-form> -->
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  provide () {
    return { msg: this.$data };
  },
  data () {
    return {
      checked: false,
      msg: 'app',
      text: '1',
      personInfo: {
        name: '',
        age: '',
      },
      rules: {
        name: [{ required: true, message: '请填写姓名', trigger: 'blur' }],
      },
      listData: [
        { id: 111, content: '内容一', isComplete: true },
        { id: 222, content: '内容二', isComplete: false },
        { id: 333, content: '内容三', isComplete: true },
        { id: 444, content: '内容四', isComplete: true },
      ],
    };
  },
  mounted () {
    setTimeout(() => {
      this.msg = 'asdjklf';
      console.log(this.msg);
    }, 3000);
  },
  methods: {
    handleClick (val, e) {
      console.log(val, e);
    },
  },
};
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
