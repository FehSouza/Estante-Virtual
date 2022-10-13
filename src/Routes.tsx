import { Route, Routes } from 'react-router-dom'
import { Container } from './components'
import { Department, Home } from './pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Home />} />
        <Route path="/livros" element={<Department />}>
          <Route path=":departmentName" element={<Department />} />
        </Route>
      </Route>
    </Routes>
  )
}
