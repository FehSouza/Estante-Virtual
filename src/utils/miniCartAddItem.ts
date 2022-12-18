import { BooksResponseProps } from '../@types'
import { dispatchOrderForm, getOrderForm } from '../states'

interface PropsMiniCartAddItem {
  bookDetails?: BooksResponseProps
  quantity: number | string
}

export const miniCartAddItem = ({ bookDetails, quantity }: PropsMiniCartAddItem) => {
  const quantityNumber = Number(quantity)

  const item = { ...bookDetails, quantity: quantityNumber }

  const storage = getOrderForm()

  if (storage) {
    const newStorage = storage.map((itemStorage: BooksResponseProps) => {
      if (itemStorage.id === item.id) return { ...itemStorage, quantity: Number(itemStorage.quantity) + quantityNumber }
      return itemStorage
    })

    if (JSON.stringify(storage) === JSON.stringify(newStorage)) return dispatchOrderForm([...storage, item])
    return dispatchOrderForm([...newStorage])
  } else {
    dispatchOrderForm([item])
  }
}
