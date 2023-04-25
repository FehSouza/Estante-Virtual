import { FieldError } from '../Hooks'

export const textValidation = (value: string, message: string): FieldError | undefined => {
  if (value.length >= 3) return
  return { error: true, message }
}

export const numberValidation = (value: string): FieldError | undefined => {
  if (value.length >= 1) return
  return { error: true, message: 'Digite um número válido' }
}

export const phoneValidation = (value: string): FieldError | undefined => {
  if (value.length === 14 || value.length === 15) return
  return { error: true, message: 'Digite um telefone válido' }
}

export const emailValidation = (value: string): FieldError | undefined => {
  if (value.includes('@') && value.includes('.com')) return
  return { error: true, message: 'Digite um e-mail válido' }
}

export const cepValidation = (value: string): FieldError | undefined => {
  if (value.length === 9) return
  return { error: true, message: 'Digite um CEP válido' }
}

export const phoneMask = (value: string) => {
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, '($1) $2')
  value = value.replace(/(\d)(\d{4})$/, '$1-$2')
  return value
}

export const cepMask = (value: string) => {
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{5})(\d)/, '$1-$2')
  return value
}
