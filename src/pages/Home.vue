<script setup></script>

<template>
  <div class="home">
    <section class="banner">
      <div class="container">
        <h1>CyberZone — компьютерный клуб</h1>
        <p>Топовое железо, быстрый интернет и киберспортивная атмосфера.</p>
        <button class="button primary" @click="$router.push('/register')">
          Зарегистрироваться →
        </button>
      </div>
    </section>

    <section class="promos">
      <div class="container">
        <h2>Акции</h2>
        <div class="cards">
          <div class="card" v-for="n in 3" :key="n">
            <div class="card-header">Скидка {{ n * 10 }}%</div>
            <p>
              Специальное предложение для новых игроков. Успей воспользоваться!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="contacts" id="contacts">
      <div class="container">
        <h2>Контакты</h2>
        <div class="desc">
          <div class="row">
            <span class="label">Адрес</span
            ><span class="val">г. Москва, ул. Киберспортсменов, 7</span>
          </div>
          <div class="row">
            <span class="label">Телефон</span
            ><span class="val">+7 (900) 123-45-67</span>
          </div>
          <div class="row">
            <span class="label">Email</span
            ><span class="val">info@cyberzone.club</span>
          </div>
          <div class="row">
            <span class="label">Часы работы</span
            ><span class="val">Круглосуточно</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
}
.banner {
  background: radial-gradient(800px 400px at 80% 0%, rgba(167,139,250,0.25), transparent 55%),
    radial-gradient(600px 320px at 0% 0%, rgba(34,211,238,0.22), transparent 60%),
    linear-gradient(135deg, #0f1524, #0b1222);
  color: var(--text);
  padding: 60px 0;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
}
.promos {
  padding: 32px 0;
}
.contacts {
  padding: 32px 0 48px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.card {
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 16px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.0));
  transition: transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.card-header {
  font-weight: 600;
  margin-bottom: 8px;
}
.button {
  cursor: pointer;
  border: 1px solid var(--border);
  background: linear-gradient(180deg, #0f182d, #0c1222);
  padding: 10px 16px;
  border-radius: var(--radius);
}
.button.primary {
  background: linear-gradient(180deg, rgba(34,211,238,0.18), rgba(34,211,238,0.06));
  color: #e6fdff;
  border-color: var(--primary);
}
.desc {
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
}
.row {
  display: grid;
  grid-template-columns: 180px 1fr;
  border-top: 1px solid var(--border);
}
.row:first-child {
  border-top: none;
}
.label {
  background: #0b1427;
  padding: 10px 12px;
  font-weight: 600;
}
.val {
  padding: 10px 12px;
}
.card:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--ring);
}
@media (max-width: 800px) {
  .cards {
    grid-template-columns: 1fr;
  }
  .row {
    grid-template-columns: 1fr;
  }
  .label {
    border-bottom: 1px solid var(--border);
  }
}
</style>
