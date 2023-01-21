import { useEffect, useState } from 'react'
import { BsHandbag, BsPerson } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
import { BooksResponseProps } from '../../@types'
import { dispatchQuantityMiniCart, useOrderFormSelect, useQuantityMiniCart } from '../../states'
import { Logo } from '../Logo'
import { NavBar } from '../NavBar'
import { NavBarSearch } from '../NavBarSearch'
import * as S from './styles'

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const orderForm = useOrderFormSelect()
  const [quantityMiniCart] = useQuantityMiniCart()

  const [searchActive, setSearchActive] = useState(false)

  const handleOpenMiniCart = () => navigate('/mini-cart', { state: { backgroundLocation: location } })

  const totalProducts = orderForm.reduce((acc: number, item: BooksResponseProps) => acc + Number(item.quantity), 0)

  useEffect(() => dispatchQuantityMiniCart(totalProducts), [totalProducts])

  const handleSearch = () => setSearchActive((prev) => !prev)

  return (
    <S.Header>
      <S.Container>
        <Logo />

        {!searchActive ? <NavBar handleSearch={handleSearch} /> : <NavBarSearch handleSearch={handleSearch} />}

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
