<script setup lang="ts">
import TreeItem from '@/components/TreeItem.vue'
import { type TreeItem as TreeItemType } from '@/types/tree'
import { ref } from 'vue'

let id = 1
const depth = ref(0)
const item = ref<TreeItemType>({
  id: id++,
  value: 'My Tree',
  children: [
    {
      id: id++,
      value: 'hello',
    },
    {
      id: id++,
      value: 'world',
    },
    {
      id: id++,
      value: 'child folder',
      children: [
        {
          id: id++,
          value: 'child folder',
          children: [
            {
              id: id++,
              value: 'hello',
            },
            {
              id: id++,
              value: 'world',
            },
          ],
        },
      ],
    },
  ],
})
</script>

<template>
  <div>
    <ul>
      <TreeItem :data="item" :depth="depth" />
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
