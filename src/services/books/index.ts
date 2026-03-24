import { BooksProps, BooksResponseProps } from '../../@types'
import { api, ENABLE_MOCK } from '../../api'
import { MOCK_BOOKS, MOCK_OUR_SUGGESTIONS } from '../../mock'

const BOOK_SEARCH_PARAMS = 'orderBy=relevance&printType=books&maxResults=40'

const filterBooksWithoutPricesOrImages = (books: BooksResponseProps[]) => {
  return books.filter((book) => !(!book.volumeInfo.imageLinks || !book.saleInfo.listPrice)) as BooksProps[]
}

export const getBestSellers = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)
  const response = await api.get<{ items: BooksResponseProps[] }>(`?q=subject:fiction&${BOOK_SEARCH_PARAMS}`)
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBooksChildren = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)
  const response = await api.get<{ items: BooksResponseProps[] }>(`?q=as-crônicas-de-nárnia&${BOOK_SEARCH_PARAMS}`)
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBestSellersAction = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)
  const response = await api.get<{ items: BooksResponseProps[] }>(`?q=inauthor:Dan+Brown&${BOOK_SEARCH_PARAMS}`)
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBestSellersPoliceRomance = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)
  const response = await api.get<{ items: BooksResponseProps[] }>(`?q=inauthor:Agatha+Christie&${BOOK_SEARCH_PARAMS}`)
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBestSellersHorror = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)
  const response = await api.get<{ items: BooksResponseProps[] }>(`?q=inauthor:Stephen+King&${BOOK_SEARCH_PARAMS}`)
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBestSellersPoetry = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)
  const response = await api.get<{ items: BooksResponseProps[] }>(`?q=inauthor:Shakespeare&${BOOK_SEARCH_PARAMS}`)
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBestSellersSelfHelp = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)
  const response = await api.get<{ items: BooksResponseProps[] }>(`?q=inauthor:Augusto+Cury&${BOOK_SEARCH_PARAMS}`)
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBook = async (id: string) => {
  if (ENABLE_MOCK) return [...MOCK_BOOKS, ...MOCK_OUR_SUGGESTIONS].find((book) => book.id === id)
  const response = await api.get<BooksResponseProps>(`/${id}`)
  const result = response.data
  return result
}

export const getBooksAuthor = async (nameAuthor?: string) => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)
  const normalizedName = nameAuthor?.replace(' ', '+')
  const response = await api.get<{ items: BooksResponseProps[] }>(`?q=+inauthor:${normalizedName}&${BOOK_SEARCH_PARAMS}`)
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

interface PropsGetBooksDepartment {
  nameDepartment: string
  orderBySelected: string
  initial: number
  maxResults: number
  author?: string
}

export const getBooksDepartment = async ({ nameDepartment, orderBySelected, initial, maxResults, author }: PropsGetBooksDepartment) => {
  if (ENABLE_MOCK) return { items: MOCK_BOOKS, totalItems: 22 }

  const params = new URLSearchParams({
    q: author ? `+inauthor:${author}+${nameDepartment}` : nameDepartment,
    orderBy: orderBySelected,
    printType: 'books',
    startIndex: String(initial),
    maxResults: String(maxResults),
  })

  const response = await api.get<{ items: BooksResponseProps[]; totalItems: number }>(`?${params.toString()}`)
  const result = response.data
  return result
}
