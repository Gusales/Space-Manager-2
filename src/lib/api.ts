import axios from 'axios'

import { getCookie } from './jsCookie'

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
})

const token = getCookie('sm-token')

if (token) {
  api.defaults.headers.Authorizations = `Bearer ${token}`
}
