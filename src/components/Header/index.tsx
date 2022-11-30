import { BsHandbag, BsPerson, BsSearch } from 'react-icons/bs'
import { useMatch } from 'react-router-dom'
import { dispatchShowMiniCart } from '../../states'
import { Logo } from '../Logo'
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
  const handleOpenMiniCart = () => dispatchShowMiniCart(true)

  return (
    <S.Header>
      <S.Container>
        <Logo />

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
          <S.MiniCart onClick={handleOpenMiniCart}>
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
