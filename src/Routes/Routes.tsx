import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Container } from '../components'
import {
  AboutUs,
  ContactUs,
  Department,
  ExchangesAndReturns,
  Home,
  Institutional,
  MyAccount,
  MyData,
  MyRequests,
  NotFound,
  OurStores,
  PaymentPolicy,
  Product,
  ProductDetails,
} from '../pages'

interface LocationState {
  backgroundLocation?: Location
}

export const AppRoutes = () => {
  const location = useLocation()
  const state = location.state as LocationState

  return (
    <>
      <AnimatePresence>
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<Container />}>
            <Route index element={<Home />} />
            <Route path="/livros">
              <Route index element={<Department category="todos" />} />
              <Route path="ficcao-cientifica" element={<Department category="Ficção científica" />} />
              <Route path="fantasia" element={<Department category="Fantasia" />} />
              <Route path="poesia" element={<Department category="Poesia" />} />
              <Route path="policial" element={<Department category="Policial" />} />
              <Route path="romance" element={<Department category="Romance" />} />
              <Route path="suspense" element={<Department category="Suspense" />} />
              <Route path="terror" element={<Department category="Terror" />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/product">
              <Route path=":idBook" element={<Product />} />
            </Route>

            <Route path="/institucional">
              <Route index element={<Institutional namePage="Institucional" />} />
              <Route path="sobre-nos" element={<AboutUs namePage="Sobre nós" />} />
              <Route path="fale-conosco" element={<ContactUs namePage="Fale conosco" />} />
              <Route path="politica-de-pagamentos" element={<PaymentPolicy namePage="Política de pagamentos" />} />
              <Route path="trocas-e-devolucoes" element={<ExchangesAndReturns namePage="Trocas e devoluções" />} />
              <Route path="nossas-lojas" element={<OurStores namePage="Nossas lojas" />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/minha-conta">
              <Route index element={<MyAccount namePage="Minha conta" />} />
              <Route path="meus-dados" element={<MyData namePage="Meus dados" />} />
              <Route path="meus-pedidos" element={<MyRequests namePage="Meus pedidos" />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
        </Routes>

        {state?.backgroundLocation && (
          <Routes key={location.pathname} location={location}>
            <Route path="/product">
              <Route path=":idBook" element={<ProductDetails />} />
            </Route>
          </Routes>
        )}
      </AnimatePresence>
    </>
  )
}
