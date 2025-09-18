<script setup>
import { useAuthStore } from "../stores/auth";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const auth = useAuthStore();

const isLoggedIn = computed(() => Boolean(auth.user));

function goTo(path) {
  router.push(path);
}
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <div class="brand" @click="goTo('/')">CyberZone</div>
      <nav class="nav">
        <a class="link" @click.prevent="goTo('/')" href="/">Главная</a>
        <template v-if="!isLoggedIn">
          <a class="link" @click.prevent="goTo('/register')" href="/register"
            >Регистрация</a
          >
          <a
            class="button primary"
            @click.prevent="goTo('/login')"
            href="/login"
            >Войти</a
          >
        </template>
        <template v-else>
          <span class="tag">{{ auth.user.fullName || auth.user.email }}</span>
          <button class="button danger" @click="auth.logout()">Выйти</button>
        </template>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
}
.header-inner {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand {
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
}
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
}
.link {
  color: #374151;
  text-decoration: none;
  cursor: pointer;
}
.link:hover {
  text-decoration: underline;
}
.button {
  cursor: pointer;
  border: 1px solid #d1d5db;
  background: #fff;
  padding: 6px 12px;
  border-radius: 6px;
}
.button.primary {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}
.button.danger {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}
.tag {
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
