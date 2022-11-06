export interface ImageLinks {
  thumbnail: string
}

export interface VolumeInfo {
  imageLinks?: ImageLinks
  title: string
  authors: string[]
  description?: string
  pageCount: number
  averageRating?: number
}

export interface ListPrice {
  amount: number
}

export interface SaleInfo {
  listPrice?: ListPrice
}

export interface BooksProps {
  id: string
  color?: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
}

export interface AuthorsProps {
  name: string
  image: string
  description: string
}
