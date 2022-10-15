import { BsHandbag, BsPerson, BsSearch } from 'react-icons/bs'
import { GiBookshelf } from 'react-icons/gi'
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

export const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.Logo to="/">
          <GiBookshelf />
          <S.Name>Estante Virtual</S.Name>
        </S.Logo>

        <S.NavBar>
          <NavBarLink to="/livros/ficcao-cientifica">Ficção Científica</NavBarLink>
          <NavBarLink to="/livros/fantasia">Fantasia</NavBarLink>
          <NavBarLink to="/livros/poesia">Poesia</NavBarLink>
          <NavBarLink to="/livros/policial">Policial</NavBarLink>
          <NavBarLink to="/livros/romance">Romance</NavBarLink>
          <NavBarLink to="/livros/suspense">Suspense</NavBarLink>
          <NavBarLink to="/livros/terror">Terror</NavBarLink>
          <S.Search>
            <BsSearch />
          </S.Search>
        </S.NavBar>

        <S.UserMenu>
          <S.MiniCart>
            <S.MiniCartInt>
              <BsHandbag />
            </S.MiniCartInt>
          </S.MiniCart>

          <S.Login>
            <BsPerson />
          </S.Login>
        </S.UserMenu>
      </S.Container>
    </S.Header>
  )
}
