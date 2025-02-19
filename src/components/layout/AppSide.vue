<script setup lang="ts"></script>

<template>
  <div class="side">
    <RouterLink to="/markdown" class="link">markdown</RouterLink>
    <RouterLink to="/" class="link">123</RouterLink>
    <RouterLink to="/" class="link">123</RouterLink>
    <RouterLink to="/" class="link">123</RouterLink>
  </div>
</template>

<style scoped>
.side {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  background-color: antiquewhite;
  padding-top: 5px;
}
.link {
  color: black;
  padding: 5px;
}
</style>
