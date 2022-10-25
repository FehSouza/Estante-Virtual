import { useScrollToTop } from '../../../hooks'
import * as S from './styles'

export const PaymentPolicy = ({ namePage }: { namePage: string }) => {
  useScrollToTop(false, '#content')

  return <S.PaymentPolicy>{namePage}</S.PaymentPolicy>
}
