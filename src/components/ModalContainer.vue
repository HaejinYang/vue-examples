<script setup lang="ts">
const emit = defineEmits(['cancel', 'accept'])
const props = defineProps<{
  show: boolean
}>()

const cancelModal = () => {
  emit('cancel')
}

const onAccept = () => {
  emit('accept')
}

const onCancel = () => {
  emit('cancel')
}
</script>

<template>
  <Teleport to="#app-content">
    <Transition name="modal">
      <div v-if="props.show" class="modal-container" @click="cancelModal">
        <div class="modal-item">
          <div class="modal-header">
            <slot name="header">기본 헤더</slot>
          </div>

          <div class="modal-body">
            <slot name="body">기본 바디</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">기본 푸터</slot>
          </div>

          <div class="modal-action">
            <button @click="onAccept">ok</button>
            <button @click="onCancel">cancel</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-container {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;

  .modal-item {
    min-width: 100px;
    min-height: 100px;
    background-color: white;

    & > * {
      padding: 10px;
    }

    .modal-header {
      color: var(--primary-string-color);
    }

    .modal-action {
      display: flex;
      justify-content: end;

      & > * {
        margin-left: 2px;
      }
    }
  }
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}
</style>
