import { createReStateMethods } from '@raulpesilva/re-state'

type Search = boolean

const searchKey = 'search'
const initialValue = false as Search

export const searchOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.stopPropagation()
  dispatchSearch(true)
}

export const searchClose = () => dispatchSearch(false)

export const { useSearchSelect, dispatchSearch } = createReStateMethods(searchKey, initialValue)
