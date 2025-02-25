<script setup lang="ts">
import TreeItem from '@/components/TreeItem.vue'
import { type TreeItem as TreeItemType } from '@/types/tree'
import { ref } from 'vue'

let id = 1
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
const lastId = ref(id);
</script>

<template>
  <div>
    <ul>
      <TreeItem :data="item" :lastId="lastId" />
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
