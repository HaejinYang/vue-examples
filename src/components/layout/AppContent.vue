<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-content">
    <RouterView />
  </div>
</template>

<style scoped>
.app-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: floralwhite;
}
</style>
