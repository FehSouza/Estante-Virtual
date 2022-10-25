import { useScrollToTop } from '../../hooks'
import * as S from './styles'

export const NotFound = () => {
  useScrollToTop(false, '#content')

  return <S.NotFound>Página não encontrada</S.NotFound>
}
