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
  background: linear-gradient(135deg, #1f2937, #111827);
  color: #fff;
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
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 16px;
  background: #fff;
}
.card-header {
  font-weight: 600;
  margin-bottom: 8px;
}
.button {
  cursor: pointer;
  border: 1px solid #d1d5db;
  background: #fff;
  padding: 10px 16px;
  border-radius: 8px;
}
.button.primary {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}
.desc {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}
.row {
  display: grid;
  grid-template-columns: 180px 1fr;
  border-top: 1px solid #e5e7eb;
}
.row:first-child {
  border-top: none;
}
.label {
  background: #f9fafb;
  padding: 10px 12px;
  font-weight: 600;
}
.val {
  padding: 10px 12px;
}
@media (max-width: 800px) {
  .cards {
    grid-template-columns: 1fr;
  }
  .row {
    grid-template-columns: 1fr;
  }
  .label {
    border-bottom: 1px solid #e5e7eb;
  }
}
</style>
