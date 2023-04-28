import { createReStateMethods } from '@raulpesilva/re-state'

type DataUser = {
  firstName: string
  address: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  cep: string
  totalValue: number
}

const dataUserKey = 'dataUser'

const initialValue = {
  firstName: '',
  address: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
  cep: '',
  totalValue: 0,
} as DataUser

export const { dispatchDataUser, useDataUser, getDataUser } = createReStateMethods(dataUserKey, initialValue)
