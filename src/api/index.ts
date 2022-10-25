import axios from 'axios'

export const ENABLE_MOCK = true

export const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes',
})
