import { createReStateMethods } from '@raulpesilva/re-state'

const totalsMiniCart = 'totalsMiniCart'
const initialValue = { subTotal: 0, discount: 0, total: 0 }

export const { useTotalsMiniCart, dispatchTotalsMiniCart, getTotalsMiniCart } = createReStateMethods(totalsMiniCart, initialValue)
