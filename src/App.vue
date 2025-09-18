<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="app-container">
    <SiteHeader />
    <main class="app-main">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.app-main {
  flex: 1;
}
</style>
