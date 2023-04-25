import { FormsCheckoutProps } from '../../@types'
import * as S from './styles'

export const FormCheckoutPersonal = ({ fields, setField, validation }: FormsCheckoutProps) => {
  return (
    <S.Form>
      <S.Title>Informações pessoais:</S.Title>

      <S.Container>
        <S.Wrapper>
          <S.Label htmlFor="firstName">Primeiro nome</S.Label>
          <S.Input id="firstName" value={fields.firstName} onChange={(e) => setField('firstName', e.target.value)} />
          {validation.firstName.error && <S.Error>{validation.firstName.message}</S.Error>}
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="lastName">Último nome</S.Label>
          <S.Input id="lastName" value={fields.lastName} onChange={(e) => setField('lastName', e.target.value)} />
          {validation.lastName.error && <S.Error>{validation.lastName.message}</S.Error>}
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="phone">Telefone</S.Label>
          <S.Input id="phone" value={fields.phone} onChange={(e) => setField('phone', e.target.value)} />
          {validation.phone.error && <S.Error>{validation.phone.message}</S.Error>}
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="email">E-mail</S.Label>
          <S.Input id="email" value={fields.email} onChange={(e) => setField('email', e.target.value)} />
          {validation.email.error && <S.Error>{validation.email.message}</S.Error>}
        </S.Wrapper>
      </S.Container>
    </S.Form>
  )
}
