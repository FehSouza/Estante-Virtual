import { useScrollToTop } from '../../../hooks'
import * as S from './styles'

export const ContactUs = ({ namePage }: { namePage: string }) => {
  useScrollToTop(false, '#content')

  return <S.ContactUs>{namePage}</S.ContactUs>
}
