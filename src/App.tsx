import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './Routes/Routes'
import { GlobalStyles } from './styles/globalStyles'
import { theme } from './styles/theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme.base}>
      <GlobalStyles />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
