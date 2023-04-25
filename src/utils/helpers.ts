export const emptyFunction = () => undefined
export const ObjectKeys = <T extends Record<string, any>>(obj: T) => Object.keys(obj) as (keyof T)[]
export const ObjectValues = <T extends Record<string, any>>(obj: T) => Object.values(obj) as T[keyof T][]
export const deleteProperty = <T extends Record<string, any>, S extends keyof T>(obj: T, key: S): T => {
  const { [key]: _value, ...objWithoutKey } = obj
  return objWithoutKey as T
}
export const entries = <T extends Record<string, any>, S extends keyof T = keyof T>(obj: T) => Object.entries(obj) as [S, T[S]][]

export const clamp = (value: number, min: number, max: number) => {
  if (value > max) return max
  if (value < min) return min
  return value
}

export const slice = <T>(items: T[], page: number, itemsPerPage: number) => {
  const start = (page - 1) * itemsPerPage
  const end = page * itemsPerPage
  return items.slice(start, end)
}

export const convertToLowerCaseString = (value: string | number | unknown) => {
  if (typeof value === 'string' || typeof value === 'number') return String(value).toLowerCase()
  return ''
}

export const randomId = (): string => Math.random().toString(36).slice(2, 11)
