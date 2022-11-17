export interface BooksResponseProps {
  id: string
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
