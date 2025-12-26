<template>
  <nav class="navbar is-primary has-background-primary-light">
    <div class="container">
      <div class="navbar-start">
        <router-link :to="{ name: 'TodoList' }" class="navbar-item"
          ><span class="icon material-symbols-outlined">list</span
          >Tasks</router-link
        >
        <a href="" class="navbar-item">
          <span class="icon material-symbols-outlined">export_notes</span>
          Export</a
        >
      </div>
      <div class="navbar-end">
        <router-link :to="{ name: 'About' }" class="navbar-item">
          <span class="icon material-symbols-outlined">info</span
          >About</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script></script>

<style lang="scss"></style>
