import { useNavigate } from 'react-router-dom'
import { useFields } from '../../Hooks'
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
import { cepMask, cepValidation, emailValidation, numberValidation, phoneMask, phoneValidation, textValidation } from '../../utils'
import * as S from './styles'

const initialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  cep: '',
  country: '',
  state: '',
  city: '',
  neighborhood: '',
  address: '',
  number: '',
}

export const Checkout = () => {
  const [orderForm] = useOrderForm()
  const navigate = useNavigate()

  const { fields, setField, validation } = useFields({
    initialValues,
    formatters: { phone: phoneMask, cep: cepMask },
    // shouldValidate: false,
    validators: {
      firstName: (value) => textValidation(value, 'Digite um nome válido'),
      lastName: (value) => textValidation(value, 'Digite um nome válido'),
      phone: phoneValidation,
      email: emailValidation,
      cep: cepValidation,
      country: (value) => textValidation(value, 'Digite um país válido'),
      state: (value) => textValidation(value, 'Digite um estado válido'),
      city: (value) => textValidation(value, 'Digite uma cidade válida'),
      neighborhood: (value) => textValidation(value, 'Digite um bairro válido'),
      address: (value) => textValidation(value, 'Digite um endereço válido'),
      number: numberValidation,
    },
  })

  return (
    <S.Container>
      <S.Title>Checkout</S.Title>

      {!!orderForm.length && (
        <S.Content>
          <S.ContentLeft>
            <FormCheckoutPersonal fields={fields} setField={setField} validation={validation} />
            <FormCheckoutDelivery fields={fields} setField={setField} validation={validation} />
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
