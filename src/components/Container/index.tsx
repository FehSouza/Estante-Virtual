import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../Footer'
import { Header } from '../Header'
import * as S from './styles'

export const Container = () => {
  const { pathname } = useLocation()

  return (
    <S.Container>
      <Header />
      <S.Content key={pathname} id="content">
        <Outlet />
        <Footer />
      </S.Content>
    </S.Container>
  )
}
