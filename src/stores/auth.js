import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isSubmitting = ref(false)
  const errorMessage = ref(null)

  async function register(payload) {
    isSubmitting.value = true
    errorMessage.value = null
    try {
      await new Promise((resolve) => setTimeout(resolve, 700))
      user.value = {
        fullName: payload.fullName,
        email: payload.email,
      }
      return true
    } catch (err) {
      errorMessage.value = 'Не удалось зарегистрироваться'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  async function login(payload) {
    isSubmitting.value = true
    errorMessage.value = null
    try {
      await new Promise((resolve) => setTimeout(resolve, 600))
      user.value = { email: payload.email }
      return true
    } catch (err) {
      errorMessage.value = 'Не удалось войти'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  function logout() {
    user.value = null
  }

  return {
    user,
    isSubmitting,
    errorMessage,
    register,
    login,
    logout,
  }
}) 