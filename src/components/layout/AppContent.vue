<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app-content" class="app-content">
    <RouterView />
  </div>
</template>

<style scoped>
.app-content {
  flex-grow: 1;
  padding: 30px;
  border-left: 1px solid #cccccc;
}
</style>
