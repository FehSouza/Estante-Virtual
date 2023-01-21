import { BsSearch } from 'react-icons/bs'
import { useMatch } from 'react-router-dom'
import * as S from './styles'

const NavBarLink = ({ to, children }: { to: string; children: string }) => {
  const match = useMatch(to)

  return (
    <S.NavLinkWrapper>
      <S.DepartmentName to={to}>{children}</S.DepartmentName>
      {!!match && <S.ActiveDepartmentBar layoutId="ActiveDepartmentBar" />}
    </S.NavLinkWrapper>
  )
}

interface PropsNavBar {
  handleSearch: () => void
}

export const NavBar = ({ handleSearch }: PropsNavBar) => {
  return (
    <S.NavBar>
      <NavBarLink to="/livros/ficcao-cientifica">Ficção Científica</NavBarLink>
      <NavBarLink to="/livros/fantasia">Fantasia</NavBarLink>
      <NavBarLink to="/livros/poesia">Poesia</NavBarLink>
      <NavBarLink to="/livros/policial">Policial</NavBarLink>
      <NavBarLink to="/livros/romance">Romance</NavBarLink>
      <NavBarLink to="/livros/suspense">Suspense</NavBarLink>
      <NavBarLink to="/livros/terror">Terror</NavBarLink>
      <S.Search onClick={handleSearch}>
        <BsSearch />
      </S.Search>
    </S.NavBar>
  )
}