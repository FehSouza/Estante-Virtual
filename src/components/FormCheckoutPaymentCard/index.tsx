import { FormsCheckoutProps } from '../../@types'
import * as S from './styles'

export const FormCheckoutPaymentCard = ({ fields, setField, validation }: FormsCheckoutProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
        <S.Input value={fields.cardNumber} id="cardNumber" onChange={(e) => setField('cardNumber', e.target.value)} />
        {validation.cardNumber.error && <S.Error>{validation.cardNumber.message}</S.Error>}
      </S.Wrapper>

      <S.Wrapper>
        <S.Label htmlFor="validity">Validade</S.Label>
        <S.Input value={fields.cardValidity} id="validity" onChange={(e) => setField('cardValidity', e.target.value)} maxLength={5} />
        {validation.cardValidity.error && <S.Error>{validation.cardValidity.message}</S.Error>}
      </S.Wrapper>

      <S.Wrapper>
        <S.Label htmlFor="CVC">CVC</S.Label>
        <S.Input value={fields.cardCVC} id="CVC" onChange={(e) => setField('cardCVC', e.target.value)} maxLength={3} />
        {validation.cardCVC.error && <S.Error>{validation.cardCVC.message}</S.Error>}
      </S.Wrapper>
    </S.Container>
  )
}
