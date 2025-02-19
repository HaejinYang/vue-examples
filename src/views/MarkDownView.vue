<script setup lang="ts">
import { marked } from 'marked'
import { computed, ref } from 'vue'
import { debounce } from 'lodash-es'
const input = ref('# hello')
const output = computed(() => marked(input.value))
const update = debounce((e) => {
  input.value = e.target.value
}, 100)
</script>

<template>
  <div class="editor">
    <textarea class="input" :value="input" @input="update"></textarea>
    <div class="output" v-html="output"></div>
  </div>
</template>

<style scoped lang="scss">
.editor {
  display: flex;
  height: 100%;

  .input,
  .output {
    width: 50%;
    padding: 0 20px;
  }

  .input {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  .output {
    background-color: white;
  }
}

code {
  color: #f66;
}
</style>
