<template>
  <Header />
  <Navbar />
  <TodoList />
</template>

<script>
import Header from "./components/header.vue";
import Navbar from "./components/navbar.vue";
import TodoList from "./components/todolist.vue";

export default {
  name: "App",
  components: {
    Header,
    Navbar,
    TodoList,
  },
};
</script>

<style lang="scss"></style>
