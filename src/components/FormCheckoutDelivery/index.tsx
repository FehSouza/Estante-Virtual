import { FormsCheckoutProps } from '../../@types'
import * as S from './styles'

export const FormCheckoutDelivery = ({ fields, setField, validation }: FormsCheckoutProps) => {
  return (
    <S.Form>
      <S.Title>Informações de entrega:</S.Title>

      <S.Container>
        <S.Wrapper>
          <S.Label htmlFor="postalCode">CEP</S.Label>
          <S.Input id="postalCode" value={fields.cep} onChange={(e) => setField('cep', e.target.value)} maxLength={9} />
          {validation.cep.error && <S.Error>{validation.cep.message}</S.Error>}
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="country">País</S.Label>
          <S.Input id="country" value={fields.country} onChange={(e) => setField('country', e.target.value)} />
          {validation.country.error && <S.Error>{validation.country.message}</S.Error>}
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="state">Estado</S.Label>
          <S.Input id="state" value={fields.state} onChange={(e) => setField('state', e.target.value)} />
          {validation.state.error && <S.Error>{validation.state.message}</S.Error>}
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="city">Cidade</S.Label>
          <S.Input id="city" value={fields.city} onChange={(e) => setField('city', e.target.value)} />
          {validation.city.error && <S.Error>{validation.city.message}</S.Error>}
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="neighborhood">Bairro</S.Label>
          <S.Input id="neighborhood" value={fields.neighborhood} onChange={(e) => setField('neighborhood', e.target.value)} />
          {validation.neighborhood.error && <S.Error>{validation.neighborhood.message}</S.Error>}
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="address">Endereço</S.Label>
          <S.Input id="address" value={fields.address} onChange={(e) => setField('address', e.target.value)} />
          {validation.address.error && <S.Error>{validation.address.message}</S.Error>}
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="number">Número</S.Label>
          <S.Input id="number" value={fields.number} onChange={(e) => setField('number', e.target.value)} />
          {validation.number.error && <S.Error>{validation.number.message}</S.Error>}
        </S.Wrapper>

        <S.Wrapper>
          <S.Label htmlFor="complement">Complemento</S.Label>
          <S.Input id="complement" value={fields.complement} onChange={(e) => setField('complement', e.target.value)} />
        </S.Wrapper>
      </S.Container>
    </S.Form>
  )
}
