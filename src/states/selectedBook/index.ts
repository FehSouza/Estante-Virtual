import { createReStateMethods } from '@raulpesilva/re-state'

type SelectedBook = string | undefined

const selectedBookKey = 'selectedBook'
const initialValue = undefined as SelectedBook

export const { dispatchSelectedBook, useSelectedBookSelect, resetSelectedBook } = createReStateMethods(
  selectedBookKey,
  initialValue
)
