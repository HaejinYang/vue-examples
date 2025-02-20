<script setup lang="ts">
import TodoItem from '@/components/TodoItem.vue'
import { reactive } from 'vue'

const todos = reactive([
  { id: 1, text: '채소' },
  { id: 2, text: '치즈' },
  { id: 3, text: '기타 등' },
])
</script>

<template>
  <div>
    <ul>
      <TodoItem v-for="todo in todos" :id="todo.id" :text="todo.text" :key="todo.id" />
    </ul>
  </div>
</template>

<style scoped></style>
