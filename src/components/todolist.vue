<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <Todo :todo="todo" />
    </li>
  </ul>
  <button class="button is-primary is-outlined mt-5 todo-list-controls">
    <span class="icon material-symbols-outlined">add_circle</span>
    <span>Add todo</span>
  </button>
</template>

<script>
import Todo from "./todo.vue";

export default {
  name: "TodoList",
  components: {
    Todo,
  },
  data() {
    return {
      todos: [
        {
          title: "Todo 1",
          description: "Description 1",
          createdAt: new Date(),
          updatedAt: new Date(),
          isDone: false,
          isNew: false,
          isEdit: false,
          id: 1,
        },
        {
          title: "Todo 2",
          description: "Description 2",
          createdAt: new Date(),
          updatedAt: new Date(),
          isDone: false,
          isNew: false,
          isEdit: false,
          id: 2,
        },
        {
          title: "Todo 3",
          description: "Description 3",
          createdAt: new Date(),
          updatedAt: new Date(),
          isDone: false,
          isNew: false,
          isEdit: false,
          id: 3,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.todo-list-controls .icon {
  line-height: inherit;
}
</style>
