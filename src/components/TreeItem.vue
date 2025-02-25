<script setup lang="ts">
import type { TreeItem as TreeItemType } from '@/types/tree'
import TreeItem from '@/components/TreeItem.vue'
import { ref } from 'vue'
const props = defineProps<{
  data: TreeItemType
  depth: number
}>()

const isOpen = ref(true)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <li class="item" :style="{ marginLeft: '2rem' }">
    <div>
      <span @click="toggle" :class="{ hasChild: props.data.children != null }">
        {{ props.data.value }}
        <template v-if="props.data.children != null"> [{{ isOpen ? '-' : '+' }}] </template>
      </span>
    </div>
    <ul>
      <div v-show="isOpen">
        <TreeItem
          v-for="item in props.data.children"
          :key="item.id"
          :data="item"
          :depth="props.depth + 4"
        />
      </div>
    </ul>
  </li>
</template>

<style lang="scss" scoped>
.hasChild {
  font-weight: bold;
}
.item {
  cursor: pointer;
}
</style>
