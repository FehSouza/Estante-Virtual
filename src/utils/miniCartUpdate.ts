import { BooksResponseProps } from '../@types';
import { dispatchOrderForm, getOrderForm } from '../states';
import { customStorage } from './customStorage';

export const miniCartUpdate = ({ id, operator }: { id: string; operator: string }) => {
  const orderForm = getOrderForm()

  const newOrderForm = orderForm.map((itemOrderForm: BooksResponseProps) => {
    const quantity = Number(itemOrderForm.quantity)

    if (itemOrderForm.id !== id || (itemOrderForm.id === id && operator === 'minus' && quantity === 1)) {
      return itemOrderForm
    }

    return { ...itemOrderForm, quantity: operator === 'plus' ? quantity + 1 : quantity - 1 }
  })

  dispatchOrderForm(newOrderForm)
  customStorage.setItem('orderForm', newOrderForm)
}
