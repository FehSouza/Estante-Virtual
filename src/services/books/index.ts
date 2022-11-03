import { BooksProps } from '../../@types'
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

const filterBooksWithoutPricesOrImages = (books: BooksProps[]) => {
  return books.filter((book) => !(!book.volumeInfo.imageLinks || !book.saleInfo.listPrice))
}

export const getBestSellers = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)

  const response = await api.get<{ items: BooksProps[] }>('?q=best-sellers&orderBy=relevance&printType=books')
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBooksChildren = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)

  const response = await api.get<{ items: BooksProps[] }>('?q=livros-para-crianças&orderBy=relevance&printType=books')
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBestSellersAction = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)

  const response = await api.get<{ items: BooksProps[] }>('?q=best-sellers-action&orderBy=relevance&printType=books')
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBestSellersPoliceRomance = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)

  const responde = await api.get<{ items: BooksProps[] }>(
    '?q=best-sellers-romance-policial&orderBy=relevance&printType=books'
  )
  const result = filterBooksWithoutPricesOrImages(responde.data.items)
  return result
}

export const getBestSellersHorror = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)

  const response = await api.get<{ items: BooksProps[] }>('?q=best-sellers-terror&orderBy=relevance&printType=books')
  const result = filterBooksWithoutPricesOrImages(response.data.items)
  return result
}

export const getBestSellersPoetry = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)

  const response = api.get<{ items: BooksProps[] }>('?q=best-sellers-poesia&orderBy=relevance&printType=books')
  const result = filterBooksWithoutPricesOrImages((await response).data.items)
  return result
}

export const getBestSellersSelfHelp = async () => {
  if (ENABLE_MOCK) return filterBooksWithoutPricesOrImages(MOCK_BOOKS)

  const response = api.get<{ items: BooksProps[] }>('?q=best-sellers-auto-ajuda&orderBy=relevance&printType=books')
  const result = filterBooksWithoutPricesOrImages((await response).data.items)
  return result
}
