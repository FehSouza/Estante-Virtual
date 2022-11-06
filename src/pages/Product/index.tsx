import { useParams } from 'react-router-dom'
import * as S from './styles'

export const Product = () => {
  const params = useParams()

  return <S.Container>{params.idBook}</S.Container>
}
