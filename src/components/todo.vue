<template>
  <article class="panel is-primary mt-5" v-if="!todo.isEdit">
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
