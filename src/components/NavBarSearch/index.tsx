import { BsSearch } from 'react-icons/bs'
import * as S from './styles'

interface PropsNavBarSearch {
  handleSearch: () => void
}

export const NavBarSearch = ({ handleSearch }: PropsNavBarSearch) => {
  return (
    <S.NavBarSearch>
      <S.Input placeholder="O que você está buscando?"></S.Input>
      <S.Search onClick={handleSearch}>
        <BsSearch />
      </S.Search>
    </S.NavBarSearch>
  )
}
