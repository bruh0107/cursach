<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "../stores/auth";

const auth = useAuthStore();

const schema = yup.object({
  fullName: yup.string().required("Введите ФИО").min(3, "Минимум 3 символа"),
  email: yup.string().required("Введите email").email("Некорректный email"),
  password: yup
    .string()
    .required("Введите пароль")
    .min(6, "Минимум 6 символов"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .required("Подтвердите пароль"),
});

const { handleSubmit, errors, defineField, meta } = useForm({
  validationSchema: schema,
  initialValues: {
    fullName: "",
    email: "",
    password: "",
    confirm: "",
  },
});

const [fullName, fullNameAttrs] = defineField("fullName");
const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
const [confirm, confirmAttrs] = defineField("confirm");

const onSubmit = handleSubmit(async (values) => {
  const ok = await auth.register(values);
  if (ok) {
    window.location.href = "/";
  }
});
</script>

<template>
  <div class="container form-wrapper">
    <h2>Регистрация</h2>
    <form class="form" @submit.prevent="onSubmit" novalidate>
      <div class="form-row">
        <label for="fullName">ФИО</label>
        <input
          id="fullName"
          type="text"
          v-model="fullName"
          v-bind="fullNameAttrs"
          placeholder="Иванов Иван Иванович"
        />
        <p v-if="errors.fullName" class="error">{{ errors.fullName }}</p>
      </div>
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
      <div class="form-row">
        <label for="confirm">Подтверждение пароля</label>
        <input
          id="confirm"
          type="password"
          v-model="confirm"
          v-bind="confirmAttrs"
        />
        <p v-if="errors.confirm" class="error">{{ errors.confirm }}</p>
      </div>
      <div class="form-actions">
        <button
          class="button primary"
          type="submit"
          :disabled="!meta.valid || auth.isSubmitting"
        >
          {{ auth.isSubmitting ? "Отправка..." : "Создать аккаунт" }}
        </button>
        <button
          class="button link"
          type="button"
          @click="$router.push('/login')"
        >
          У меня уже есть аккаунт
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
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 14px;
  background: #0b1222;
  color: var(--text);
}
.error {
  color: var(--danger);
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
  border: 1px solid var(--border);
  background: linear-gradient(180deg, #0f182d, #0c1222);
  padding: 10px 16px;
  border-radius: var(--radius);
  color: var(--text);
}
.button.primary {
  background: linear-gradient(180deg, rgba(34,211,238,0.18), rgba(34,211,238,0.06));
  color: #e6fdff;
  border-color: var(--primary);
}
.button.link {
  border: none;
  background: transparent;
  color: var(--muted);
  text-decoration: underline;
  padding: 0;
}
</style>
