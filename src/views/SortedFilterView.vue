<script setup lang="ts">
import { ref } from 'vue'
import GridItem from '@/components/GridItem.vue'
const search = ref('')
const head = ['name', 'power']
const body = [
  { name: 'a', power: 1 },
  { name: 'b', power: 2 },
  { name: 'c', power: 3 },
]
</script>

<template>
  Search <input type="text" v-model="search" />
  <GridItem :head="head" :body="body" :search="search" />
</template>

<style scoped></style>
