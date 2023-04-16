import { useNavigate } from 'react-router-dom'
import {
  CarouselThreeSlides,
  CheckoutOrderSummary,
  CheckoutYourOrder,
  FormCheckoutDelivery,
  FormCheckoutPayment,
  FormCheckoutPersonal,
} from '../../components'
import { MOCK_OUR_SUGGESTIONS } from '../../mock'
import { useOrderForm } from '../../states/orderForm'
import * as S from './styles'

export const Checkout = () => {
  const [orderForm] = useOrderForm()
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.Title>Checkout</S.Title>

      {!!orderForm.length && (
        <S.Content>
          <S.ContentLeft>
            <FormCheckoutPersonal />
            <FormCheckoutDelivery />
            <FormCheckoutPayment />
          </S.ContentLeft>

          <S.ContentRight>
            <CheckoutYourOrder />
            <S.BuyButton>Comprar</S.BuyButton>
            <CheckoutOrderSummary />
          </S.ContentRight>
        </S.Content>
      )}

      {!orderForm.length && (
        <S.ContentEmptyBag>
          <S.EmptyBagText>Seu carrinho está vazio :(</S.EmptyBagText>
          <S.EmptyBagText>Para continuar comprando, navegue pelas categorias do site ou faça uma busca pelo seu produto.</S.EmptyBagText>
          <S.EmptyBagButton onClick={() => navigate('/')}>Escolher produtos</S.EmptyBagButton>

          <S.Shelf>
            <S.ShelfTitle>Nossas sugestões</S.ShelfTitle>
            <CarouselThreeSlides bookList={MOCK_OUR_SUGGESTIONS} />
          </S.Shelf>
        </S.ContentEmptyBag>
      )}
    </S.Container>
  )
}
