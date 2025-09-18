<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>© {{ new Date().getFullYear() }} CyberZone</div>
      <div>
        <a class="link" href="mailto:info@cyberzone.club"
          >info@cyberzone.club</a
        >
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(10,14,23,0.2), rgba(10,14,23,0.6));
}
.footer-inner {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.link {
  color: var(--muted);
  text-decoration: none;
}
.link:hover {
  color: var(--text);
}
</style>
