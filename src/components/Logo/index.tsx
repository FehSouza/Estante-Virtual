import { GiSpellBook } from 'react-icons/gi'
import * as S from './style'

export const Logo = () => {
  return (
    <S.Logo to="/">
      <GiSpellBook size={40} />
      <S.Name>Estante Virtual</S.Name>
    </S.Logo>
  )
}
