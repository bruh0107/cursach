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
  border-top: 1px solid #e5e7eb;
  background: #fafafa;
}
.footer-inner {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.link {
  color: #374151;
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
</style>
