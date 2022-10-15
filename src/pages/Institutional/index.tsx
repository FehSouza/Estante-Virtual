import { useParams } from 'react-router-dom'
import * as S from './styles'

const dictionary = {
  'sobre-nos': 'Sobre nós',
  'fale-conosco': 'Fale conosco',
  'politica-de-pagamentos': 'Política de pagamentos',
  'trocas-e-devolucoes': 'Trocas e devoluções',
  'nossas-lojas': 'Nossas lojas',
}

export const Institutional = () => {
  const params = useParams<{ institutionalName: keyof typeof dictionary }>()

  return (
    <S.Institutional>
      Institucional:{' '}
      {params.institutionalName ? dictionary[params.institutionalName] ?? params.institutionalName : 'Geral'}
    </S.Institutional>
  )
}
