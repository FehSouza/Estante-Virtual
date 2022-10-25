import { useScrollToTop } from '../../hooks'
import * as S from './styles'

export const Institutional = ({ namePage }: { namePage: string }) => {
  useScrollToTop(false, '#content')

  return <S.Institutional>{namePage}</S.Institutional>
}
