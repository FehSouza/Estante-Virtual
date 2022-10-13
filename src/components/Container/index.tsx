import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Header } from '../Header'
import * as S from './styles'

export const Container = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Outlet />
        <Footer />
      </S.Content>
    </S.Container>
  )
}
