<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <h3 class="title">{{ $t('global.copyright') }}</h3>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div>
    <p>
      <RouterLink to="/login">登录 </RouterLink>
      <RouterLink to="/">首页 </RouterLink>
      <RouterLink to="/dashboard">dashboard </RouterLink>
      <RouterLink to="/401">401 </RouterLink>
      <RouterLink to="/403">403 </RouterLink>
      <RouterLink to="/404">404 </RouterLink>
      <RouterLink to="/500">500 </RouterLink>
    </p>
    <RouterView />
  </div>
</template>

<style scoped>
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
