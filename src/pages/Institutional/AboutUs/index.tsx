import { useScrollToTop } from '../../../hooks'
import * as S from './styles'

export const AboutUs = ({ namePage }: { namePage: string }) => {
  useScrollToTop(false, 'html')

  return <S.AboutUs>{namePage}</S.AboutUs>
}
