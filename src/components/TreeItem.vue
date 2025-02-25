<script setup lang="ts">
import type { TreeItem as TreeItemType } from '@/types/tree'
import TreeItem from '@/components/TreeItem.vue'
import { ref } from 'vue'
const props = defineProps<{
  data: TreeItemType
  lastId: number
}>()

const isOpen = ref(true)
const hasChild = ref(props.data.children != null)
const lastId = ref(props.lastId)
const data = ref(props.data)

const toggle = () => {
  isOpen.value = !isOpen.value
}
const addItem = () => {
  const newItem: TreeItemType = {
    id: lastId.value++,
    value: 'new Stuff',
  }

  if (data.value.children == null) {
    data.value.children = []
  }
  data.value.children.push(newItem)
}
</script>

<template>
  <li class="item" :style="{ marginLeft: '2rem' }">
    <div>
      <span @click="toggle" :class="{ hasChild: hasChild }">
        {{ data.value }}
        <template v-if="hasChild"> [{{ isOpen ? '-' : '+' }}] </template>
      </span>
    </div>
    <ul>
      <div v-show="isOpen">
        <TreeItem v-for="item in data.children" :key="item.id" :data="item" :last-id="lastId" />
        <li v-if="hasChild" :style="{ marginLeft: '2rem' }" @click="addItem">+</li>
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
