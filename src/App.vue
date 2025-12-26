<template>
  <Header />
  <Navbar />
  <router-view />
</template>

<script>
import Header from "./components/header.vue";
import Navbar from "./components/navbar.vue";

export default {
  name: "App",
  components: {
    Header,
    Navbar,
  },
};
</script>

<style lang="scss">
.todo-list-controls .icon {
  line-height: inherit;
}
</style>
