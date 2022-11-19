import { BooksProps, BooksResponseProps } from '../../@types'
import { api, ENABLE_MOCK } from '../../api'
import { MOCK_BOOKS } from '../../mock'

// const getBestSellers2 = async () => {
//   const result = await fetch(
//     'https://www.googleapis.com/books/v1/volumes?q=best-sellers&orderBy=relevance&printType=books'
//   )
//     .then((response) => response.json())
//     .then((response) => response.items)
//   return result
// }

const filterBooksWithoutPricesOrImages = (books: BooksResponseProps[]) => {
  return books.filter((book) => !(!book.volumeInfo.imageLinks || !book.saleInfo.listPrice)) as BooksProps[]
}

export const getBestSellers = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)

  const response = await api.get<{ items: BooksResponseProps[] }>('?q=best-sellers&orderBy=relevance&printType=books')
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBooksChildren = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)

  const response = await api.get<{ items: BooksResponseProps[] }>(
    '?q=livros-para-crianças&orderBy=relevance&printType=books'
  )
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBestSellersAction = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)

  const response = await api.get<{ items: BooksResponseProps[] }>(
    '?q=best-sellers-action&orderBy=relevance&printType=books'
  )
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBestSellersPoliceRomance = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)

  const responde = await api.get<{ items: BooksResponseProps[] }>(
    '?q=best-sellers-romance-policial&orderBy=relevance&printType=books'
  )
  const result = filterBooksWithoutPricesOrImages(responde.data.items)
  return result
}

export const getBestSellersHorror = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)

  const response = await api.get<{ items: BooksResponseProps[] }>(
    '?q=best-sellers-terror&orderBy=relevance&printType=books'
  )
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBestSellersPoetry = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)

  const response = await api.get<{ items: BooksResponseProps[] }>(
    '?q=best-sellers-poesia&orderBy=relevance&printType=books'
  )
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBestSellersSelfHelp = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)

  const response = await api.get<{ items: BooksResponseProps[] }>(
    '?q=best-sellers-auto-ajuda&orderBy=relevance&printType=books'
  )
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBook = async (id: string) => {
  if (ENABLE_MOCK) return MOCK_BOOKS.find((book) => book.id === id)

  const response = await api.get<BooksResponseProps>(`/${id}`)
  const result = response.data
  return result
}