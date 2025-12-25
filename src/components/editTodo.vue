<template>
  <div class="panel is-primary mt-5">
    <p class="panel-heading">{{ todo.isNew ? "Add todo" : "Edit todo" }}</p>
    <div class="panel-block p-5">
      <input
        type="text"
        v-model="todo.title"
        class="input is-outlined"
        placeholder="Title"
      />
    </div>
    <div class="panel-block p-5">
      <textarea
        v-model="todo.description"
        class="textarea is-outlined"
        placeholder="Description"
      ></textarea>
    </div>
    <div class="panel-block p-5">
      <button
        v-if="todo.isNew"
        class="button is-primary is-outlined mr-5 todo-list-controls"
        @click="saveTodo"
      >
        <span class="icon material-symbols-outlined mr-2">save</span>
        Save
      </button>
      <button
        class="button is-warning is-outlined todo-list-controls"
        @click="closeEdit"
      >
        <span class="icon material-symbols-outlined mr-2">close</span>
        Close
      </button>
      <button
        v-if="!todo.isNew"
        class="button is-danger is-outlined todo-list-controls ml-5"
        @click="deleteTodo"
      >
        <span class="icon material-symbols-outlined mr-2">delete</span>
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditTodo",
  data() {
    return {};
  },
  props: ["todo"],
  methods: {
    closeEdit() {
      this.$emit("cancel-edit");
    },
    saveTodo() {
      this.$emit("save-todo", this.todo);
    },
    deleteTodo() {
      this.$emit("delete-todo", this.todo);
    },
  },
};
</script>

<style lang="scss"></style>
