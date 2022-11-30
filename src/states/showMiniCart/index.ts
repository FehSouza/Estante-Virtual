import { createReStateMethods } from '@raulpesilva/re-state'

const showMiniCartKey = 'showMiniCart'
const initialValue = false

export const { useShowMiniCartSelect, dispatchShowMiniCart } = createReStateMethods(showMiniCartKey, initialValue)
