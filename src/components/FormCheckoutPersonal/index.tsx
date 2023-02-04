import * as S from './styles'

export const FormCheckoutPersonal = () => {
  return (
    <S.Form>
      <S.Title>Informações pessoais:</S.Title>

      <S.Container>
        <S.Wrapper>
          <S.Label htmlFor="firstName">Primeiro nome</S.Label>
          <S.Input id="firstName" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="lastName">Último nome</S.Label>
          <S.Input id="lastName" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="phone">Telefone</S.Label>
          <S.Input id="phone" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="email">E-mail</S.Label>
          <S.Input id="email" />
        </S.Wrapper>
      </S.Container>
    </S.Form>
  )
}
