import { getTotalsMiniCart } from '../../states/totalsMiniCart'
import { formatCurrency } from '../../utils'
import * as S from './styles'

export const CheckoutYourOrder = () => {
  const totalsMiniCart = getTotalsMiniCart()
  const delivery = 10
  const total = totalsMiniCart.total + delivery

  return (
    <S.Container>
      <S.Title>Seu pedido:</S.Title>

      <S.Wrapper>
        <S.SubTitle>Subtotal:</S.SubTitle>
        <S.Price>{formatCurrency(totalsMiniCart.total)}</S.Price>
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
