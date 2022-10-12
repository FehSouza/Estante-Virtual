const baseTheme = {
  colors: {
    text: '#111725',
    textLight: '#909EB2',
    primary: '#0077EF',
    white: '#ffffff',
    shadow: '#0000001A',
  },
} as const

export type Colors = typeof baseTheme.colors

export type Color = keyof Colors

export const theme = {
  base: baseTheme,
}
