import { useScrollToTop } from '../../../hooks'
import * as S from './styles'

export const PaymentPolicy = ({ namePage }: { namePage: string }) => {
  useScrollToTop(false, 'html')

  return <S.PaymentPolicy>{namePage}</S.PaymentPolicy>
}
