<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "../stores/auth";

const auth = useAuthStore();

const schema = yup.object({
  email: yup.string().required("Введите email").email("Некорректный email"),
  password: yup.string().required("Введите пароль"),
});

const { handleSubmit, errors, defineField, meta } = useForm({
  validationSchema: schema,
  initialValues: {
    email: "",
    password: "",
  },
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");

const onSubmit = handleSubmit(async (values) => {
  const ok = await auth.login(values);
  if (ok) {
    window.location.href = "/";
  }
});
</script>

<template>
  <div class="container form-wrapper">
    <h2>Вход</h2>
    <form class="form" @submit.prevent="onSubmit" novalidate>
      <div class="form-row">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model="email"
          v-bind="emailAttrs"
          placeholder="you@example.com"
        />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>
      <div class="form-row">
        <label for="password">Пароль</label>
        <input
          id="password"
          type="password"
          v-model="password"
          v-bind="passwordAttrs"
        />
        <p v-if="errors.password" class="error">{{ errors.password }}</p>
      </div>
      <div class="form-actions">
        <button
          class="button primary"
          type="submit"
          :disabled="!meta.valid || auth.isSubmitting"
        >
          {{ auth.isSubmitting ? "Входим..." : "Войти" }}
        </button>
        <button
          class="button link"
          type="button"
          @click="$router.push('/register')"
        >
          Создать аккаунт
        </button>
      </div>
      <p v-if="auth.errorMessage" class="error global">
        {{ auth.errorMessage }}
      </p>
    </form>
  </div>
</template>

<style scoped>
.form-wrapper {
  max-width: 720px;
  padding: 24px 0 48px;
}
.form {
  display: grid;
  gap: 14px;
}
.form-row {
  display: grid;
  gap: 6px;
}
label {
  font-weight: 600;
}
input {
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
}
.error {
  color: #b91c1c;
  margin: 2px 0 0;
  font-size: 13px;
}
.error.global {
  margin-top: 8px;
}
.form-actions {
  display: flex;
  gap: 10px;
  align-items: center;
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
.button.link {
  border: none;
  background: transparent;
  color: #374151;
  text-decoration: underline;
  padding: 0;
}
</style>
