<script setup lang="ts">
import { ref, watch } from 'vue'

const text = ref('')
const isChecked = ref(false)
const checkedNames = ref([])
const picked = ref('')
const selected = ref('')
const multipleSelected = ref([])
watch(checkedNames, (newNames, oldNames) => {
  console.log(newNames)
})
</script>

<template>
  <h1>Text Input</h1>
  <input type="text" placeholder="Edit me" :value="text" @input="(e) => (text = e.target?.value)" />
  <p>{{ text }}</p>

  <h1>Checkbox</h1>
  <input type="checkbox" v-model="isChecked" />
  <span>Checked: {{ isChecked }}</span>

  <h1>Multi Checkbox</h1>
  <input type="checkbox" value="Jack" v-model="checkedNames" />
  <span> Jack </span>

  <input type="checkbox" value="John" v-model="checkedNames" />
  <span> John </span>

  <input type="checkbox" value="Mike" v-model="checkedNames" />
  <span> Mike </span>

  <p>체크한 이름: {{ checkedNames }}</p>

  <h1>Radio</h1>
  <input id="one" type="radio" value="One" v-model="picked" />
  <label for="one"> One</label> <br />
  <input id="two" type="radio" value="Two" v-model="picked" />
  <label for="two"> Two</label>
  <p>Picked: {{ picked }}</p>

  <h1>Select</h1>
  <select v-model="selected">
    <option disabled>선택해주세요</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
  <p>selected: {{ selected }}</p>

  <h1>Multi Select</h1>
  <select multiple v-model="multipleSelected">
    <option disabled>선택해주세요</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
  <p>selected: {{ multipleSelected }}</p>
</template>
<style scoped></style>
