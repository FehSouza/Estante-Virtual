import { useScrollToTop } from '../../Hooks'
import * as S from './styles'

export const Home = () => {
  useScrollToTop(false, '#content')

  return <S.Home>Home</S.Home>
}
