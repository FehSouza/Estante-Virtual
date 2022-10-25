import { useScrollToTop } from '../../../hooks'
import * as S from './styles'

export const MyData = ({ namePage }: { namePage: string }) => {
  useScrollToTop(false, '#content')

  return <S.MyData>{namePage}</S.MyData>
}
