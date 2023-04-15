import { getOrderForm } from '../../states'
import { formatCurrency } from '../../utils'
import { miniCartTotals } from '../../utils/miniCartTotals'
import * as S from './styles'

export const CheckoutYourOrder = () => {
  const orderForm = getOrderForm()

  const totals = miniCartTotals(orderForm)

  const delivery = 10
  const total = totals.totalMiniCart + delivery

  return (
    <S.Container>
      <S.Title>Seu pedido:</S.Title>

      <S.Wrapper>
        <S.SubTitle>Subtotal:</S.SubTitle>
        <S.Price>{formatCurrency(totals.totalMiniCart)}</S.Price>
      </S.Wrapper>

      <S.Wrapper>
        <S.SubTitle>Entrega:</S.SubTitle>
        <S.Price>{formatCurrency(delivery)}</S.Price>
      </S.Wrapper>

      <S.Hr />

      <S.Wrapper>
        <S.SubTitle>Total:</S.SubTitle>
        <S.Price>{formatCurrency(total)}</S.Price>
      </S.Wrapper>
    </S.Container>
  )
}
