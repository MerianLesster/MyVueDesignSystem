<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
nav {
  padding: 1rem 0;
  margin-bottom: 2rem;
}

nav a {
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a.router-link-active {
  background-color: var(--color-background-soft);
  color: var(--color-text);
}

nav a:hover {
  background-color: var(--color-background-mute);
}
</style>
