<script setup lang="ts">
import { ref, watchEffect } from 'vue'
interface Response {
  html_url: string
  sha: string
  author: {
    login: string
    html_url: string
  }

  commit: {
    message: string
    committer: {
      date: string
    }
  }
}

const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`
const branches = ['main', 'v2-compat']
const selectedBranchIndex = ref(0)
const currentBranch = ref(branches[selectedBranchIndex.value])
const commits = ref<Response | null>(null)

watchEffect(async () => {
  currentBranch.value = branches[selectedBranchIndex.value]
  const url = `${API_URL}${currentBranch.value}`
  commits.value = (await (await fetch(url)).json()) as Response
  console.log(commits.value)
})
</script>

<template>
  <h1>Latest Vue Core Commits</h1>
  <input id="main" type="radio" value="0" v-model="selectedBranchIndex" />
  <label for="main"> main </label>
  <input id="v2-compat" type="radio" value="1" v-model="selectedBranchIndex" />
  <label for="v2-compat"> v2- compat</label>
  <br />
  <span>vuejs/vue@{{ branches[selectedBranchIndex] }}</span>
  <ul>
    <li v-for="(c, index) in commits" :key="index">
      <a :href="c.html_url"> {{ c.sha.slice(0, 7) }} </a>
      - {{ c.commit.message }} <br />
      by <a :href="c.author.html_url"> {{ c.author.login }}</a> at
      <span class="date"> {{ new Date(c.commit.committer.date).toDateString() }}</span>
    </li>
  </ul>
</template>

<style scoped>
li {
  padding-top: 10px;
}
a {
  color: var(--primary-string-color);
  text-decoration: none;
}

.date {
  font-weight: bold;
}
</style>
