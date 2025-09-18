import axios from 'axios'

const api = axios.create({
  baseURL: 'https://example.com/api',
  timeout: 8000,
})

api.interceptors.request.use((config) => {
  // Add auth token if needed
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)

export default api 