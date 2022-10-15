import { Route, Routes } from 'react-router-dom'
import { Container } from './components'
import { Department, Home, Institutional, MyAccount } from './pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Home />} />
        <Route path="/livros" element={<Department />}>
          <Route path=":departmentName" element={<Department />} />
        </Route>
        <Route path="/institucional" element={<Institutional />}>
          <Route path=":institutionalName" element={<Institutional />} />
        </Route>
        <Route path="/minha-conta" element={<MyAccount />}>
          <Route path=":myAccountName" element={<MyAccount />} />
        </Route>
      </Route>
    </Routes>
  )
}
