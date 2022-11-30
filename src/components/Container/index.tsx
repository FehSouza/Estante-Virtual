import { Outlet, useLocation } from 'react-router-dom'
import { MiniCart } from '../../pages/MiniCart'
import { Footer } from '../Footer'
import { Header } from '../Header'
import * as S from './styles'

export const Container = () => {
  const { pathname } = useLocation()

  return (
    <S.Container id="content">
      <Header />
      <S.Content key={pathname}>
        <Outlet />
        <Footer />
        <MiniCart />
      </S.Content>
    </S.Container>
  )
}
