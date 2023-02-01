import { FaApplePay, FaPaypal } from 'react-icons/fa'
import { SiMastercard, SiVisa } from 'react-icons/si'
import { FormCheckout, FormCheckoutPayment } from '../../components'
import * as S from './styles'

const personalInfo = [
  { label: 'Primeiro nome', id: 'firstName' },
  { label: 'Último nome', id: 'lastName' },
  { label: 'Telefone', id: 'phone' },
  { label: 'E-mail', id: 'email' },
]

const deliveryInfo = [
  { label: 'CEP', id: 'postalCode' },
  { label: 'País', id: 'country' },
  { label: 'Estado', id: 'state' },
  { label: 'Cidade', id: 'city' },
  { label: 'Bairro', id: 'neighborhood' },
  { label: 'Endereço', id: 'address' },
  { label: 'Número', id: 'number' },
  { label: 'Complemento', id: 'complement' },
]

const payment = [
  { label: 'Apple Pay', id: 'apple', icons: [<FaApplePay />] },
  { label: 'Pay Pal', id: 'payPal', icons: [<FaPaypal />] },
  { label: 'Cartão de débito u crédito', id: 'card', icons: [<SiMastercard />, <SiVisa />] },
]

export const Checkout = () => {
  return (
    <S.Container>
      <S.Title>Checkout</S.Title>
      <S.Content>
        <S.ContentLeft>
          <FormCheckout title="Informações pessoais:" form={personalInfo} />
          <FormCheckout title="Informações de entrega:" form={deliveryInfo} />
          <FormCheckoutPayment form={payment} />
        </S.ContentLeft>

        <S.ContentRight></S.ContentRight>
      </S.Content>
    </S.Container>
  )
}
