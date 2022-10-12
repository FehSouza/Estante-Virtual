import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Menu } from '../Menu'

export const Container = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  )
}
