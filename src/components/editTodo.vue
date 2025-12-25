<template>
  <div class="panel is-primary mt-5">
    <p class="panel-heading">Add todo</p>
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
      <button class="button is-primary is-outlined" @click="saveTodo">
        Save todo
      </button>
      <button class="button is-warning is-outlined ml-5" @click="cancelEdit">
        Cancel
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
    cancelEdit() {
      this.$emit("cancel-edit");
    },
    saveTodo() {
      this.$emit("save-todo", this.todo);
    },
  },
};
</script>

<style lang="scss"></style>
