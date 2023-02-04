import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaApplePay, FaPaypal } from 'react-icons/fa'
import { SiMastercard, SiVisa } from 'react-icons/si'
import * as S from './styles'

export const FormCheckoutPayment = () => {
  const [checked, setChecked] = useState('')

  const appleVerify = checked === 'apple'
  const payPalVerify = checked === 'payPal'
  const cardVerify = checked === 'card'

  const handleCheck = (id: string) => setChecked(id)

  return (
    <S.Form>
      <S.Title>Pagamento:</S.Title>

      <S.Container>
        <S.Wrapper onClick={() => handleCheck('apple')}>
          <S.Radio hidden name="payment_method" type="radio" id="apple" checked={appleVerify} />
          <S.RadioFake checked={appleVerify}>
            <AnimatePresence>{appleVerify && <S.RadioFakeInt />}</AnimatePresence>
          </S.RadioFake>
          <S.Label htmlFor="apple">Apple Pay</S.Label>
          <S.Icons>
            <FaApplePay size={48} />
          </S.Icons>
        </S.Wrapper>

        <S.Wrapper onClick={() => handleCheck('payPal')}>
          <S.Radio hidden name="payment_method" type="radio" id="payPal" checked={payPalVerify} />
          <S.RadioFake checked={payPalVerify}>
            <AnimatePresence>{payPalVerify && <S.RadioFakeInt />}</AnimatePresence>
          </S.RadioFake>
          <S.Label htmlFor="payPal">Pay Pal</S.Label>
          <S.Icons>
            <FaPaypal size={26} />
          </S.Icons>
        </S.Wrapper>

        <S.Wrapper onClick={() => handleCheck('card')}>
          <S.Radio hidden name="payment_method" type="radio" id="card" checked={cardVerify} />
          <S.RadioFake checked={cardVerify}>
            <AnimatePresence>{cardVerify && <S.RadioFakeInt />}</AnimatePresence>
          </S.RadioFake>
          <S.Label htmlFor="card">Cartão de débito ou crédito</S.Label>
          <S.Icons>
            <SiMastercard size={32} />
            <SiVisa size={44} />
          </S.Icons>
        </S.Wrapper>
      </S.Container>
    </S.Form>
  )
}
