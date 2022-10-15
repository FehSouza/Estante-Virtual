import { GiBookshelf } from 'react-icons/gi'
import * as S from './style'

export const Logo = () => {
  return (
    <S.Logo to="/">
      <GiBookshelf />
      <S.Name>Estante Virtual</S.Name>
    </S.Logo>
  )
}
