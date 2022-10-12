import { theme } from './theme'

type ThemeInterface = typeof theme['base']

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
