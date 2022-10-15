import { useParams } from 'react-router-dom'
import * as S from './styles'

const dictionary = {
  dados: 'Meus dados',
  pedidos: 'Meus pedidos',
}

export const MyAccount = () => {
  const params = useParams<{ myAccountName: keyof typeof dictionary }>()

  return (
    <S.MyAccount>
      Minha conta: {params.myAccountName ? dictionary[params.myAccountName] ?? params.myAccountName : 'Geral'}
    </S.MyAccount>
  )
}
