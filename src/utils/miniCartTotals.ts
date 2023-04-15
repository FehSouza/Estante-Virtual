import { BooksResponseProps } from '../@types'

export const miniCartTotals = (orderForm: BooksResponseProps[]) => {
  const subTotalMiniCart = orderForm.reduce((acc: number, item: BooksResponseProps) => {
    const price = item.saleInfo.listPrice?.amount
    const quantity = Number(item.quantity)

    if (!price) return acc
    return acc + price * quantity
  }, 0)

  const discountMiniCart = subTotalMiniCart * 0.25

  const totalMiniCart = subTotalMiniCart - discountMiniCart

  return { subTotalMiniCart, discountMiniCart, totalMiniCart }
}
