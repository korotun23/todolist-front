<template>
  <article
    class="panel mt-5"
    :class="todo.isDone ? 'is-success' : 'is-warning'"
    v-if="!todo.isEdit"
  >
    <p class="panel-heading">{{ todo.title }}</p>
    <div class="panel-block p-5">
      <p>{{ todo.description }}</p>
    </div>
    <div class="panel-block p-5">
      <button
        class="button is-primary is-outlined todo-list-controls"
        @click="todo.isEdit = true"
      >
        <span class="icon material-symbols-outlined todo-list-controls"
          >edit</span
        >
        <span>Edit</span>
      </button>
      <button
        v-if="!todo.isDone"
        class="button is-success is-outlined todo-list-controls ml-5 is-right"
        @click="todo.isDone = true"
      >
        <span class="icon material-symbols-outlined todo-list-controls"
          >done</span
        >
        <span>It's done !</span>
      </button>
      <button
        v-if="todo.isDone"
        class="button is-danger is-outlined todo-list-controls ml-5 is-right"
        @click="todo.isDone = false"
      >
        <span class="icon material-symbols-outlined todo-list-controls"
          >close</span
        >
        <span>It's not done !</span>
      </button>
    </div>
  </article>
  <EditTodo
    v-else="todo.isEdit"
    :todo="todo"
    @cancel-edit="todo.isEdit = false"
  />
</template>

<script>
import EditTodo from "./editTodo.vue";

export default {
  name: "Todo",
  props: {
    todo: Object,
  },
  components: {
    EditTodo,
  },
};
</script>

<style lang="scss">
.todo-list-controls {
  line-height: inherit;
}
</style>
