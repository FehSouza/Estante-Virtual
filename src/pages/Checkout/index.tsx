import { CheckoutYourOrder, FormCheckoutDelivery, FormCheckoutPayment, FormCheckoutPersonal } from '../../components'
import * as S from './styles'

export const Checkout = () => {
  return (
    <S.Container>
      <S.Title>Checkout</S.Title>
      <S.Content>
        <S.ContentLeft>
          <FormCheckoutPersonal />
          <FormCheckoutDelivery />
          <FormCheckoutPayment />
        </S.ContentLeft>

        <S.ContentRight>
          <CheckoutYourOrder />
        </S.ContentRight>
      </S.Content>
    </S.Container>
  )
}
