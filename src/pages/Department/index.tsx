import { useState } from 'react'
import { MdOutlineNoPhotography } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import { BooksResponseProps } from '../../@types'
import { OrderBy } from '../../components/OrderBy'
import { getBooksDepartment } from '../../services'
import { getOrderForm } from '../../states'
import { customStorage, formatCurrency, miniCartAddItem } from '../../utils'
import * as S from './styles'

export const Department = ({ category }: { category: string }) => {
  const { data: booksDepartment, mutate } = useSWR('api/books-department', () =>
    getBooksDepartment({ nameDepartment: category, orderBySelected: orderSelected[0], initialElement: 0, finalElement: 15 })
  )

  const [orderSelected, setOrderSelected] = useState(['relevance', 'Mais vendidos'])

  const navigate = useNavigate()
  const location = useLocation()

  const booksList = booksDepartment?.items
  const totalProducts = booksDepartment?.totalItems
  const totalProductsPerPage = 15
  const totalPages = Math.ceil(totalProducts / totalProductsPerPage)
  console.log(totalPages)

  return (
    <S.Department>
      <S.DepartmentName>{category}</S.DepartmentName>

      <S.DepartmentFilters>
        {booksDepartment && (
          <S.TotalProducts>{totalProducts > 1 ? `${totalProducts} produtos` : `${totalProducts} produto`}</S.TotalProducts>
        )}

        <OrderBy orderSelected={orderSelected} setOrderSelected={setOrderSelected} mutate={mutate} />
      </S.DepartmentFilters>

      {booksDepartment && (
        <S.BooksContainer>
          {booksList.map((book: BooksResponseProps) => {
            const id = book.id
            const image = book.volumeInfo.imageLinks?.thumbnail
            const bookName = book.volumeInfo.title
            const authors = book.volumeInfo.authors
            const bookAuthor = authors && (authors.length <= 2 ? authors?.join(' e ') : `${authors[0]}, ${authors[1]} e outros`)
            const bookPrice = book.saleInfo.listPrice?.amount
            const bookPriceFormatted = bookPrice && formatCurrency(bookPrice)
            const bestPrice = bookPrice && Math.abs(bookPrice * 0.75)
            const bestPriceFormatted = bestPrice ? formatCurrency(bestPrice) : 'GRÁTIS'

            const handleAddItemMiniCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault()

              miniCartAddItem({ bookDetails: book, quantity: 1 })
              const orderForm = getOrderForm()
              customStorage.setItem('orderForm', orderForm)

              navigate('/mini-cart', { state: { backgroundLocation: location } })
            }

            return (
              <S.BookWrapper key={id} to={`/product/${id}`}>
                <S.ImageWrapper>
                  {image ? <S.Image src={book.volumeInfo.imageLinks?.thumbnail} /> : <MdOutlineNoPhotography size={32} />}
                </S.ImageWrapper>
                <S.BookName>{bookName}</S.BookName>
                <S.BookAuthor>{bookAuthor}</S.BookAuthor>
                <S.BookPrice>{bookPriceFormatted}</S.BookPrice>
                <S.BookBestPrice>{bestPriceFormatted}</S.BookBestPrice>
                <S.ButtonBuy className="button-buy" onClick={(e) => handleAddItemMiniCart(e)}>
                  Adicionar ao carrinho
                </S.ButtonBuy>
              </S.BookWrapper>
            )
          })}
        </S.BooksContainer>
      )}
    </S.Department>
  )
}
