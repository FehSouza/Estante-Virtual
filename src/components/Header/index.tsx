import { useEffect } from 'react'
import { BsHandbag, BsPerson, BsSearch } from 'react-icons/bs'
import { useLocation, useMatch, useNavigate } from 'react-router-dom'
import { BooksResponseProps } from '../../@types'
import { dispatchQuantityMiniCart, useOrderFormSelect, useQuantityMiniCart } from '../../states'
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
  const navigate = useNavigate()
  const location = useLocation()

  const orderForm = useOrderFormSelect()
  const [quantityMiniCart] = useQuantityMiniCart()

  const handleOpenMiniCart = () => navigate('/mini-cart', { state: { backgroundLocation: location } })

  const totalProducts = orderForm.reduce((acc: number, item: BooksResponseProps) => acc + Number(item.quantity), 0)

  useEffect(() => dispatchQuantityMiniCart(totalProducts), [totalProducts])

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
            {quantityMiniCart !== 0 && <S.QuantityMiniCart>{quantityMiniCart}</S.QuantityMiniCart>}
          </S.MiniCart>

          <S.Login>
            <BsPerson />
          </S.Login>
        </S.UserMenu>
      </S.Container>
    </S.Header>
  )
}
