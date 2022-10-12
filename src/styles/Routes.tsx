import { Route, Routes } from 'react-router-dom'
import { Container } from '../components'
import { Home } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
