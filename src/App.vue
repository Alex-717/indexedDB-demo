<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

  <!-- <button class="btn" @click="addItem('Person')">addItem</button>
  <button class="btn" @click="updateItem('Person', 2)">updateItem</button>
  <button class="btn" @click="deeteItem('Person', 3)">deeteItem</button>
  <button class="btn" @click="getAll('Person')">getAll</button>
  <button class="btn" @click="getItem('Person', 1)">getAll</button> -->

</template>

<style scoped>
.btn {
  display: block;
}
.btn + .btn {
  margin-top: 10px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
