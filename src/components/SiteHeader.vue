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
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(10,14,23,0.9), rgba(10,14,23,0.6));
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
  font-weight: 800;
  font-size: 22px;
  letter-spacing: 0.5px;
  cursor: pointer;
  color: var(--text);
  text-shadow: 0 0 18px rgba(34,211,238,0.5), 0 0 6px rgba(167,139,250,0.45);
}
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
}
.link {
  color: var(--muted);
  text-decoration: none;
  cursor: pointer;
}
.link:hover {
  color: var(--text);
}
.button {
  cursor: pointer;
  border: 1px solid var(--border);
  background: linear-gradient(180deg, #0f182d, #0c1222);
  color: var(--text);
  padding: 8px 12px;
  border-radius: 10px;
}
.button.primary {
  background: linear-gradient(180deg, rgba(34,211,238,0.18), rgba(34,211,238,0.06));
  color: #e6fdff;
  border-color: var(--primary);
}
.button.danger {
  background: linear-gradient(180deg, rgba(239,68,68,0.2), rgba(239,68,68,0.06));
  color: #ffe8e8;
  border-color: var(--danger);
}
.tag {
  background: #0b1427;
  border: 1px solid var(--border);
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 14px;
  color: var(--muted);
}
</style>
