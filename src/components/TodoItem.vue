<script setup lang="ts">
const props = defineProps<{ id: number; text: string }>()
</script>

<template>
  <li>{{ props.id }} {{ props.text }}</li>
</template>

<style scoped></style>
