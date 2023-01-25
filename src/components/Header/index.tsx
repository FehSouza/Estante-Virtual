import { useEffect } from 'react'
import { BsHandbag, BsPerson } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
import { BooksResponseProps } from '../../@types'
import { dispatchQuantityMiniCart, useOrderFormSelect, useQuantityMiniCart, useSearchSelect } from '../../states'
import { Logo } from '../Logo'
import { NavBar } from '../NavBar'
import { NavBarSearch } from '../NavBarSearch'
import * as S from './styles'

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const orderForm = useOrderFormSelect()
  const [quantityMiniCart] = useQuantityMiniCart()
  const search = useSearchSelect()

  const totalProducts = orderForm.reduce((acc: number, item: BooksResponseProps) => acc + Number(item.quantity), 0)

  useEffect(() => dispatchQuantityMiniCart(totalProducts), [totalProducts])

  const handleOpenMiniCart = () => navigate('/mini-cart', { state: { backgroundLocation: location } })

  return (
    <S.Header>
      <S.Container>
        <Logo />

        {!search ? <NavBar /> : <NavBarSearch />}

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
