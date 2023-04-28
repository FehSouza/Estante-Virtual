import { FieldError, FieldValid } from '../Hooks'

export interface BooksResponseProps {
  id: string
  quantity?: number | string
  volumeInfo: {
    imageLinks?: {
      thumbnail: string
    }
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    description?: string
    pageCount: number
    averageRating?: number
    industryIdentifiers: {
      type: string
      identifier: string
    }[]
    language: string
  }
  saleInfo: {
    listPrice?: {
      amount: number
    }
  }
}

export interface BooksProps {
  id: string
  color?: string
  volumeInfo: {
    imageLinks: {
      thumbnail: string
    }
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    pageCount: number
    averageRating?: number
    industryIdentifiers: {
      type: string
      identifier: string
    }[]
    language: string
  }
  saleInfo: {
    listPrice: {
      amount: number
    }
  }
}

export interface AuthorsProps {
  name: string
  image: string
  description: string
}

export interface FormsCheckoutProps {
  fields: {
    firstName: string
    lastName: string
    phone: string
    email: string
    cep: string
    country: string
    state: string
    city: string
    neighborhood: string
    address: string
    number: string
    complement: string
    payment: string
    cardNumber: string
    cardValidity: string
    cardCVC: string
  }
  setField: <T extends keyof this['fields']>(field: T, value: this['fields'][T]) => void
  validation: Record<keyof this['fields'], FieldError | FieldValid>
}
