<script setup lang="ts">
import { ref } from 'vue'
const message = ref('Hello World!')

const reverseMessage = () => {
  message.value = message.value.split('').reverse().join('')
}

const appendChar = (char: string) => {
  message.value = message.value + char
}

const alertMessage = () => {
  alert('다른 창으로 이동할 수 없어요.')
}
</script>

<template>
  <h1>{{ message }}</h1>
  <div>
    <button @click="reverseMessage">메시지 뒤집기</button>
  </div>
  <div>
    <button @click="appendChar('!')">"!" 추가하기</button>
  </div>
  <div>
    <a href="https://vuejs.org" @click.prevent="alertMessage">123</a>
  </div>
</template>

<style scoped></style>
