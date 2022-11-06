const baseTheme = {
  colors: {
    text: '#010001',
    textLight: '#8AA1BB',
    primary: '#0099ff',
    secondary: '#56bbff',
    white: '#ffffff',
    shadow: '#0000001A',
    bannerPrimary: '#fbfbfb',
    bannerSecondary: '#eaf3f7',
    grey: '#d2d1d3',
    modalDetails: '#151e29',
    modalDetailsShadow: '#0000005A',
  },
} as const

export type Colors = typeof baseTheme.colors

export type Color = keyof Colors

export const theme = {
  base: baseTheme,
}
