import { useScrollToTop } from '../../../hooks'
import * as S from './styles'

export const AboutUs = ({ namePage }: { namePage: string }) => {
  useScrollToTop(false, '#content')

  return <S.AboutUs>{namePage}</S.AboutUs>
}
