import { useScrollToTop } from '../../hooks'
import * as S from './styles'

export const NotFound = () => {
  useScrollToTop(false, 'html')

  return <S.NotFound>Página não encontrada</S.NotFound>
}
