import * as S from './styles'

export const FormCheckoutDelivery = () => {
  return (
    <S.Form>
      <S.Title>Informações de entrega:</S.Title>

      <S.Container>
        <S.Wrapper>
          <S.Label htmlFor="postalCode">CEP</S.Label>
          <S.Input id="postalCode" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="country">País</S.Label>
          <S.Input id="country" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="state">Estado</S.Label>
          <S.Input id="state" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="city">Cidade</S.Label>
          <S.Input id="city" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="neighborhood">Bairro</S.Label>
          <S.Input id="neighborhood" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="address">Endereço</S.Label>
          <S.Input id="address" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="number">Número</S.Label>
          <S.Input id="number" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="complement">Complemento</S.Label>
          <S.Input id="complement" />
        </S.Wrapper>
      </S.Container>
    </S.Form>
  )
}
