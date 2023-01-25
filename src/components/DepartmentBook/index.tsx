import { MdOutlineNoPhotography } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import { BooksResponseProps } from '../../@types'
import { getOrderForm } from '../../states'
import { customStorage, formatCurrency, miniCartAddItem } from '../../utils'
import * as S from './styles'

interface DepartmentBookProps {
  book: BooksResponseProps
}

export const DepartmentBook = ({ book }: DepartmentBookProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  const id = book.id
  const image = book.volumeInfo.imageLinks?.thumbnail
  const bookName = book.volumeInfo.title
  const authors = book.volumeInfo.authors
  const bookAuthor = authors && (authors.length <= 2 ? authors?.join(' e ') : `${authors[0]}, ${authors[1]} e outros`)
  const bookPrice = book.saleInfo.listPrice?.amount
  const bookPriceFormatted = bookPrice && bookPrice !== 0 ? formatCurrency(bookPrice) : ''
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
    <S.BookWrapper key={id} to={`/produto/${id}`}>
      <S.ImageWrapper>{image ? <S.Image src={image} /> : <MdOutlineNoPhotography size={32} />}</S.ImageWrapper>
      <S.BookName>{bookName}</S.BookName>
      <S.BookAuthor>{bookAuthor}</S.BookAuthor>
      <S.BookPrice>{bookPriceFormatted}</S.BookPrice>
      <S.BookBestPrice>{bestPriceFormatted}</S.BookBestPrice>
      <S.ButtonBuy className="button-buy" onClick={(e) => handleAddItemMiniCart(e)}>
        Adicionar ao carrinho
      </S.ButtonBuy>
    </S.BookWrapper>
  )
}
