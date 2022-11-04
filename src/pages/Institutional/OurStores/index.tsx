import { useScrollToTop } from '../../../hooks'
import * as S from './styles'

export const OurStores = ({ namePage }: { namePage: string }) => {
  useScrollToTop(false, 'html')

  return <S.OurStores>{namePage}</S.OurStores>
}
