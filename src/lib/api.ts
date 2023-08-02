import axios from 'axios'
import { getCookie } from './jsCookie'

const token = getCookie('sm-token')
const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
})

if (token) {
  api.defaults.headers.Authorization = `Bearer ${token}`
}

export default api
