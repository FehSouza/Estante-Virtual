import { useScrollToTop } from '../../../Hooks'
import * as S from './styles'

export const ExchangesAndReturns = ({ namePage }: { namePage: string }) => {
  useScrollToTop(false, '#content')

  return <S.ExchangesAndReturns>{namePage}</S.ExchangesAndReturns>
}
