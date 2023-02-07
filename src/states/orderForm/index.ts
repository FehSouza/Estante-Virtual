import { createReStateMethods } from '@raulpesilva/re-state'
import { customStorage } from '../../utils'

const orderFormKey = 'orderForm'

const storage = customStorage.getItem('orderForm')

const initialValue = storage ?? []

export const { useOrderForm, useOrderFormSelect, dispatchOrderForm, getOrderForm } = createReStateMethods(orderFormKey, initialValue)
