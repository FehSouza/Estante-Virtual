import axios from 'axios'

export const ENABLE_MOCK = false

export const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes',
})
