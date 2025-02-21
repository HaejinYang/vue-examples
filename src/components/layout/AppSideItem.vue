<script setup lang="ts">
interface Props {
  routes: { path: string; name: string; id: number }[]
  activeRouteId: number
  subject: string
}

const props = defineProps<Props>()
const emit = defineEmits(['changeActiveRouter'])

function setActive(routerId: number) {
  emit('changeActiveRouter', routerId)
}
</script>

<template>
  <div class="side-container">
    <p>{{ subject }}</p>
    <div class="side-item" v-for="route in props.routes" :key="route.id">
      <RouterLink
        :to="route.path"
        :class="{ active: props.activeRouteId == route.id, router: true }"
        @click="setActive(route.id)"
      >
        {{ route.name }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.side-container {
  padding: 20px 20px 0px 20px;

  .side-item {
    padding-top: 5px;
  }
}

.router {
  color: var(--weak-string-color);
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:not(.active):hover {
    color: black;
  }
}

.active {
  color: var(--primary-string-color);
}
</style>
