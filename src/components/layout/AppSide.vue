<script setup lang="ts">
import { ref } from 'vue'
import AppSideItem from './AppSideItem.vue'

const id = ref(0)

const basicRoutes = [
  { path: '/hello-vue', name: '안녕 Vue', id: id.value++ },
  { path: '/input-handle', name: '사용자 입력 핸들링', id: id.value++ },
  { path: '/bind-property', name: '속성 바인딩', id: id.value++ },
  { path: '/condition-loop', name: '조건문과 반복문', id: id.value++ },
  { path: '/form-bind', name: '폼(form) 바인딩', id: id.value++ },
  { path: '/simple-component', name: '단순한 컴포넌트', id: id.value++ },
]

const practiceRoutes = [
  { path: '/markdown', name: 'Markdown 편집기', id: id.value++ },
  { path: '/fetch-data', name: '데이터 가져오기', id: id.value++ },
  { path: '/sorted-filtered-grid', name: '정렬과 필터가 있는 그리드', id: id.value++ },
  { path: '/tree', name: '트리 뷰', id: id.value++ },
]

const activeRouterId = ref(-1)
function onChangeActiveRouter(routerId: number) {
  activeRouterId.value = routerId
}
</script>

<template>
  <div class="side">
    <hr class="horizontal-line" />
    <AppSideItem
      @change-active-router="onChangeActiveRouter"
      :routes="basicRoutes"
      subject="기초"
      :active-route-id="activeRouterId"
    />

    <AppSideItem
      @change-active-router="onChangeActiveRouter"
      :routes="practiceRoutes"
      subject="실습"
      :active-route-id="activeRouterId"
    />
  </div>
</template>

<style scoped>
.side {
  width: 250px;
}

.horizontal-line {
  border-top: 1px solid var(--weak-line-color);
  margin: 40px 20px 0 20px;
}
</style>
