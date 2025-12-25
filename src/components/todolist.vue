<template>
  <div class="container is-max-tablet mt-5">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <Todo :todo="todo" @cancel-edit="cancelEdit(todo)" />
      </li>
    </ul>
    <EditTodo
      v-if="isNewTodo"
      :todo="newTodo"
      @cancel-edit="isNewTodo = false"
      @save-todo="saveTodo"
    />
    <button
      class="button is-primary is-outlined mt-5 todo-list-controls"
      @click="isNewTodo = true"
    >
      <span class="icon material-symbols-outlined">add_circle</span>
      <span>Add todo</span>
    </button>
  </div>
</template>

<script>
import Todo from "./todo.vue";
import EditTodo from "./editTodo.vue";

export default {
  name: "TodoList",
  components: {
    Todo,
    EditTodo,
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
      isNewTodo: false,
      newTodo: {
        title: "",
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        isDone: false,
        isNew: true,
        isEdit: false,
        id: 0,
      },
    };
  },
  methods: {
    cancelEdit(todo) {
      todo.isEdit = false;
    },
    saveTodo(todo) {
      todo.id = this.todos.length + 1;
      todo.isNew = false;
      this.todos.push(todo);
      this.isNewTodo = false;
      this.clearNewTodo();
    },
    clearNewTodo() {
      this.newTodo = {
        title: "",
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        isDone: false,
        isNew: true,
        isEdit: false,
        id: 0,
      };
    },
  },
};
</script>

<style lang="scss"></style>
