<script setup lang="ts">
import { ref } from 'vue'

const id = ref(0)

const basicRoutes = [
  { path: '/hellovue', name: '안녕 Vue', id: id.value++ },
  { path: '/markdown', name: 'Markdown 편집기', id: id.value++ },
  { path: '/markdown', name: 'Markdown 편집기', id: id.value++ },
  { path: '/markdown', name: 'Markdown 편집기', id: id.value++ },
]

const practiveRoutes = [
  { path: '/markdown', name: 'Markdown 편집기', id: id.value++ },
  { path: '/markdown', name: 'Markdown 편집기', id: id.value++ },
  { path: '/markdown', name: 'Markdown 편집기', id: id.value++ },
  { path: '/markdown', name: 'Markdown 편집기', id: id.value++ },
]

const activeRouterId = ref(-1)
const setActive = (id: number) => {
  activeRouterId.value = id
}
</script>

<template>
  <div class="side">
    <hr class="horizontal-line" />
    <div class="side-container">
      <p>기초</p>
      <div class="side-item" v-for="route in basicRoutes" :key="route.id">
        <RouterLink
          :to="route.path"
          :class="{ active: activeRouterId == route.id, router: true }"
          @click="setActive(route.id)"
        >
          {{ route.name }}
        </RouterLink>
      </div>
    </div>

    <div class="side-container">
      <p>실습</p>
      <div class="side-item" v-for="route in practiveRoutes" :key="route.id">
        <RouterLink
          :to="route.path"
          :class="{ active: activeRouterId == route.id, router: true }"
          @click="setActive(route.id)"
        >
          {{ route.name }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.side {
  width: 250px;

  .side-container {
    padding: 20px 20px 0px 20px;

    .side-item {
      padding-top: 5px;
    }
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

.horizontal-line {
  border-top: 1px solid var(--weak-line-color);
  margin: 40px 20px 0 20px;
}
</style>
