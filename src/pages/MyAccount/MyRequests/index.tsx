import { useScrollToTop } from '../../../hooks'
import * as S from './styles'

export const MyRequests = ({ namePage }: { namePage: string }) => {
  useScrollToTop(false, '#content')

  return <S.MyRequests>{namePage}</S.MyRequests>
}
