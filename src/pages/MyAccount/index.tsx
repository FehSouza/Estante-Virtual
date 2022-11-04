import { useScrollToTop } from '../../hooks'
import * as S from './styles'

export const MyAccount = ({ namePage }: { namePage: string }) => {
  useScrollToTop(false, 'html')

  return <S.MyAccount>{namePage}</S.MyAccount>
}
