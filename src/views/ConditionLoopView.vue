<script setup lang="ts">
import { reactive, ref } from 'vue'

const list = reactive([1, 2, 3])
const currentNumber = ref(4)
const isShowList = ref(true)
function toggleList() {
  isShowList.value = !isShowList.value
}

function addNumber() {
  list.push(currentNumber.value++)
}

function popNumber() {
  list.pop()
}

function reverseList() {
  list.reverse()
}
</script>

<template>
  <button @click="toggleList">리스트 토글</button>
  <button @click="addNumber">숫자 추가하기</button>
  <button @click="popNumber">숫자 제거하기</button>
  <button @click="reverseList">리스트 뒤집기</button>
  <div v-if="list.length == 0">리스트가 비어있음</div>
  <div v-else>
    <div v-if="isShowList">
      <ul>
        <li v-for="(e, index) in list" :key="index">
          {{ e }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>리스트는 비어있지 않음. 숨겨져있지만...</p>
    </div>
  </div>
</template>

<style scoped></style>
