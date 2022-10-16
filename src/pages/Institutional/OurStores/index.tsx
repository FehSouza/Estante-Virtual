import { useScrollToTop } from '../../../Hooks'
import * as S from './styles'

export const OurStores = ({ namePage }: { namePage: string }) => {
  useScrollToTop(false, '#content')

  return <S.OurStores>{namePage}</S.OurStores>
}