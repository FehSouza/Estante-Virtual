import * as S from './styles'

export const FormCheckoutPaymentCard = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
        <S.Input id="cardNumber" />
      </S.Wrapper>

      <S.Wrapper>
        <S.Label htmlFor="validity">Validade</S.Label>
        <S.Input id="validity" />
      </S.Wrapper>

      <S.Wrapper>
        <S.Label htmlFor="CVC">CVC</S.Label>
        <S.Input id="CVC" />
      </S.Wrapper>
    </S.Container>
  )
}
