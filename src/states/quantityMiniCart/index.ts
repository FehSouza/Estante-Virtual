import { createReStateMethods } from '@raulpesilva/re-state'

const quantityMiniCartKey = 'quantityMiniCart'
const initialValue = 0

export const { useQuantityMiniCart, dispatchQuantityMiniCart, getQuantityMiniCart } = createReStateMethods(quantityMiniCartKey, initialValue)
