import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/globalStyles'
import { theme } from './styles/theme'
import { AppRoutes } from './Routes/Routes'

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
