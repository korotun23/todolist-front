<template>
  <article class="panel is-primary mt-5">
    <p class="panel-heading">{{ todo.title }}</p>
    <div class="panel-block p-5">
      <p>{{ todo.description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: Object,
  },
};
</script>

<style lang="scss"></style>
