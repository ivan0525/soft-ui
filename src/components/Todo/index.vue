<template>
  <ul class="todo-list">
    <li
      class="todo-list-item"
      v-for="todo in todos"
      :key="todo.id"
    >
      <slot
        name="todo"
        :todo="todo"
      >
        {{ todo.content }}
      </slot>

    </li>
  </ul>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todos: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="less" scoped>
.todo-list {
  padding: 0;
  .todo-list-item {
    border: 1px solid #e5e5e5;
    margin-bottom: -1px;
    padding: 0.55rem 1.25rem;
    list-style: none;
  }
}
</style>
