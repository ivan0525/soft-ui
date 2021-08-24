<template>
  <div class="s-dragger">
    <div class="list-group">
      <div
        v-for="item in data"
        :id="item.id"
        :key="item.id"
        class="list-group-item"
        @mousedown="handleMouseDown($event)"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SDragger',
  props: {
    // 需要应用
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    handleMouseDown(e) {
      const selectedEle = e.target;
      selectedEle.classList.add('selected-item');
      selectedEle.setAttribute('draggable', true);
      selectedEle.addEventListener('dragover', function (e) {
        console.log(e);
      });
      document.addEventListener('mouseup', function (e) {
        selectedEle.setAttribute('draggable', false);
        selectedEle.classList.remove('selected-item');
      });
    },
  },
};
</script>

<style lang="less" scoped>
.s-dragger {
  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    .list-group-item {
      box-sizing: border-box;
      padding: 0.75rem 1.25rem;
      border: 1px solid rgba(0, 0, 0, 0.125);
      margin-bottom: -1px;
      cursor: move;
      background: #fff;
    }
  }
}
</style>
