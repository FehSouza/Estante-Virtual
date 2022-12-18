import { BooksResponseProps } from "../@types"
import { dispatchOrderForm, getOrderForm } from "../states"
import { customStorage } from "./customStorage"

export const miniCartDelete = (id: string) => {
  const orderForm = getOrderForm()

  const newOrderForm = orderForm.filter((itemOrderForm: BooksResponseProps) => itemOrderForm.id !== id)

  dispatchOrderForm(newOrderForm)
  customStorage.setItem('orderForm', newOrderForm)
}