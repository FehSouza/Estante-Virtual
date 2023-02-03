import { FaApplePay, FaPaypal } from 'react-icons/fa'
import { SiMastercard, SiVisa } from 'react-icons/si'
import * as S from './styles'

export const FormCheckoutPayment = () => {
  return (
    <S.Form>
      <S.Title>Pagamento:</S.Title>

      <S.Container>
        <S.Wrapper>
          <S.Checkbox id="apple" type="checkbox" />
          <S.CheckboxFake />
          <S.Text htmlFor="apple">Apple Pay</S.Text>
          <S.Icons>
            <FaApplePay size={48} />
          </S.Icons>
        </S.Wrapper>

        <S.Wrapper>
          <S.Checkbox id="payPal" type="checkbox" />
          <S.CheckboxFake />
          <S.Text htmlFor="payPal">Pay Pal</S.Text>
          <S.Icons>
            <FaPaypal size={26} />
          </S.Icons>
        </S.Wrapper>

        <S.Wrapper>
          <S.Checkbox id="card" type="checkbox" />
          <S.CheckboxFake />
          <S.Text htmlFor="card">Cartão de débito ou crédito</S.Text>
          <S.Icons>
            <SiMastercard size={32} />
            <SiVisa size={44} />
          </S.Icons>
        </S.Wrapper>
      </S.Container>
    </S.Form>
  )
}
