import { TbConfetti } from 'react-icons/tb'
import { Navigate, useNavigate } from 'react-router-dom'
import { getDataUser } from '../../states/dataUser'
import { formatCurrency } from '../../utils'
import * as S from './styles'

export const CheckoutConfirmation = () => {
  const navigate = useNavigate()
  const data = getDataUser()

  if (!data.totalValue) return <Navigate to="/" replace />

  return (
    <S.Container>
      <S.Title>Checkout</S.Title>

      <S.Content>
        <S.TextBold>{`Parabéns ${data.firstName}!`}</S.TextBold>
        <S.TextBold>
          {`Sua compra no valor de ${formatCurrency(data.totalValue)} foi finalizada com sucesso!`}
          <TbConfetti />
        </S.TextBold>

        <S.Wrapper>
          <S.Text>Sua compra será entregue em até 5 dias úteis no seguinte endereço:</S.Text>
          <S.Text>{`${data.address}, ${data.number} ${data.complement && data.complement} - ${data.neighborhood} - ${data.city}, ${
            data.state
          } - CEP: ${data.cep}`}</S.Text>
        </S.Wrapper>

        <S.Wrapper>
          <S.EmptyBagText>Para continuar comprando, navegue pelas categorias do site ou faça uma busca pelo seu produto.</S.EmptyBagText>
          <S.EmptyBagButton onClick={() => navigate('/')}>Escolher produtos</S.EmptyBagButton>
        </S.Wrapper>
      </S.Content>
    </S.Container>
  )
}
