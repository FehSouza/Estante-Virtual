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
import { dispatchDataUser } from '../../states/dataUser'
import { dispatchOrderForm, useOrderForm } from '../../states/orderForm'
import {
  cardCvcMask,
  cardCvcValidation,
  cardNumberMask,
  cardNumberValidation,
  cardValidityMask,
  cardValidityValidation,
  cepMask,
  cepValidation,
  customStorage,
  emailValidation,
  numberValidation,
  paymentValidation,
  phoneMask,
  phoneValidation,
  stateValidation,
  textValidation,
} from '../../utils'
import { miniCartTotals } from '../../utils/miniCartTotals'
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
  complement: '',
  payment: '',
  cardNumber: '',
  cardValidity: '',
  cardCVC: '',
}

export const Checkout = () => {
  const [orderForm] = useOrderForm()
  const navigate = useNavigate()

  const { fields, setField, validation, validate, isValid } = useFields({
    initialValues,
    formatters: { phone: phoneMask, cep: cepMask, cardNumber: cardNumberMask, cardValidity: cardValidityMask, cardCVC: cardCvcMask },
    shouldValidate: false,
    validators: {
      firstName: (value) => textValidation(value, 'Digite um nome válido'),
      lastName: (value) => textValidation(value, 'Digite um nome válido'),
      phone: phoneValidation,
      email: emailValidation,
      cep: cepValidation,
      country: (value) => textValidation(value, 'Digite um país válido'),
      state: stateValidation,
      city: (value) => textValidation(value, 'Digite uma cidade válida'),
      neighborhood: (value) => textValidation(value, 'Digite um bairro válido'),
      address: (value) => textValidation(value, 'Digite um endereço válido'),
      number: numberValidation,
      payment: paymentValidation,
      cardNumber: cardNumberValidation,
      cardValidity: cardValidityValidation,
      cardCVC: cardCvcValidation,
    },
  })

  const totals = miniCartTotals(orderForm)
  const delivery = 10
  const total = totals.totalMiniCart + delivery

  const handleBuy = () => {
    validate()

    if (!isValid) return

    dispatchDataUser({
      firstName: fields.firstName,
      address: fields.address,
      number: fields.number,
      complement: fields.complement,
      neighborhood: fields.neighborhood,
      city: fields.city,
      state: fields.state,
      cep: fields.cep,
      totalValue: total,
    })

    dispatchOrderForm([])
    customStorage.setItem('orderForm', [])
    navigate('/checkout/confirmation')
  }

  return (
    <S.Container>
      <S.Title>Checkout</S.Title>

      {!!orderForm.length && (
        <S.Content>
          <S.ContentLeft>
            <FormCheckoutPersonal fields={fields} setField={setField} validation={validation} />
            <FormCheckoutDelivery fields={fields} setField={setField} validation={validation} />
            <FormCheckoutPayment fields={fields} setField={setField} validation={validation} />
          </S.ContentLeft>

          <S.ContentRight>
            <CheckoutYourOrder />
            <S.BuyButton onClick={() => handleBuy()}>Comprar</S.BuyButton>
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
