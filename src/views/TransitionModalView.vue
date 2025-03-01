<script setup lang="ts">
import ModalContainer from '@/components/ModalContainer.vue'
import { ref } from 'vue'

const isShowModal = ref(false)

const toggleModal = () => {
  isShowModal.value = !isShowModal.value
}

const onCancelModal = () => {
  isShowModal.value = false
}

const onAcceptModal = () => {
  isShowModal.value = false
}
</script>

<template>
  <div>
    <button @click="toggleModal">Show Modal</button>
  </div>

  <ModalContainer :show="isShowModal" @accept="onAcceptModal" @cancel="onCancelModal">
    <template #header> 내가 만든 헤더 </template>
    <template #body> 내가 만든 바디 </template>
  </ModalContainer>
</template>

<style scoped></style>
