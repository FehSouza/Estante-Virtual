const baseTheme = {
  colors: {
    text: '#010001',
    textLight: '#8AA1BB',
    primary: '#DA322D',
    secondary: '#F7D6D5',
    white: '#ffffff',
    shadow: '#0000001A',
  },
} as const

export type Colors = typeof baseTheme.colors

export type Color = keyof Colors

export const theme = {
  base: baseTheme,
}
