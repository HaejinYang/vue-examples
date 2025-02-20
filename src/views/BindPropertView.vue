<script setup lang="ts">
import { ref } from 'vue'
const message = ref('이 글에 호버링하면, 동적으로 바인드된 타이틀 볼 수 있음')
const title = ref('hover me!')
const isShowRedColor = ref(true)
const color = ref('green');

function toggleColor() {
  console.log(this)
  isShowRedColor.value = !isShowRedColor.value
}

function changeColor() {
  if (color.value == 'green') {
    color.value = 'blue';
  }
  else {
    color.value = 'green';
  }
}
</script>

<template>
  <p :title="title">{{ message }}</p>
  <p :class="{ color: isShowRedColor }" @click="toggleColor">빨간색이지만, 토글하면 어떻게 될까?</p>
  <p :style="{ color: color}" @click="changeColor"> 이 글은 초록색이지만, 누르면 파란색으로 바뀝니다.</p>
</template>

<style scoped>
.color {
  color: red;
}
</style>
