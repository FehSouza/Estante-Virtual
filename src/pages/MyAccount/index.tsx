import { useScrollToTop } from '../../hooks'
import * as S from './styles'

export const MyAccount = ({ namePage }: { namePage: string }) => {
  useScrollToTop(false, '#content')

  return <S.MyAccount>{namePage}</S.MyAccount>
}
