import { BooksResponseProps } from '../@types'
import { getOrderForm } from '../states'

const orderForm = getOrderForm()

export const subTotalOrderForm = orderForm.reduce((acc: number, item: BooksResponseProps) => {
  const price = item.saleInfo.listPrice?.amount
  const quantity = Number(item.quantity)

  if (!price) return acc
  return acc + price * quantity
}, 0)

export const discountsOrderForm = subTotalOrderForm * 0.25

export const totalOrderForm = subTotalOrderForm - discountsOrderForm
