import axios from 'axios'

export const ENABLE_MOCK = false

const baseURL = process.env.REACT_APP_BASE_URL

export const api = axios.create({ baseURL })
