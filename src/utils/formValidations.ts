import { FormsCheckoutProps } from '../@types'
import { FieldError, FiledValidator } from '../Hooks'

export const textValidation = (value: string, message: string): FieldError | undefined => {
  if (value.length >= 3) return
  return { error: true, message }
}

export const stateValidation = (value: string): FieldError | undefined => {
  if (value.length >= 2) return
  return { error: true, message: 'Digite um estado válido' }
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

export const paymentValidation = (value: string): FieldError | undefined => {
  if (value) return
  return { error: true, message: 'Selecione um método de pagamento' }
}

export const cardNumberValidation: FiledValidator<FormsCheckoutProps['fields'], 'cardNumber'> = (value, fields) => {
  if (fields.payment !== 'card') return
  if (value.length === 19) return
  return { error: true, message: 'Digite um número de cartão válido' }
}

export const cardValidityValidation: FiledValidator<FormsCheckoutProps['fields'], 'cardValidity'> = (value, fields) => {
  if (fields.payment !== 'card') return

  const date = new Date()
  const monthNow = date.getMonth() + 1
  const yearNow = String(date.getFullYear()).slice(-2)

  const [monthValue, yearValue] = value.split('/')

  if (Number(yearValue) > Number(yearNow) && Number(monthValue) <= 12) return
  if (Number(yearValue) === Number(yearNow) && Number(monthValue) <= 12 && Number(monthNow) <= Number(monthValue)) return

  return { error: true, message: 'Digite uma data válida' }
}

export const cardCvcValidation: FiledValidator<FormsCheckoutProps['fields'], 'cardCVC'> = (value, fields) => {
  if (fields.payment !== 'card') return

  if (value.length === 3) return
  return { error: true, message: 'Digite um CVC válido' }
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

export const cardNumberMask = (value: string) => {
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{4})(\d)/, '$1 $2')
  value = value.replace(/(\d{4})(\d)/, '$1 $2')
  value = value.replace(/(\d{4})(\d)/, '$1 $2')
  value = value.replace(/(\d{4})\d+?$/, '$1')
  return value
}

export const cardValidityMask = (value: string) => {
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, '$1/$2')
  return value
}

export const cardCvcMask = (value: string) => {
  value = value.replace(/\D/g, '')
  return value
}
