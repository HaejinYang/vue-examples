<script setup lang="ts">
import AppContent from './AppContent.vue'
import AppSide from './AppSide.vue'
</script>

<template>
  <div class="app-body">
    <AppSide />
    <AppContent />
  </div>
</template>

<style scoped>
.app-body {
  display: flex;
  height: calc(100vh - 70px);
}
</style>
