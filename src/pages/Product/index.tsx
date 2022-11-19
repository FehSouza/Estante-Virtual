import { useState } from 'react'
import { GrFormNext } from 'react-icons/gr'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { useScrollToTop } from '../../hooks'
import { getBook } from '../../services'
import { formatCurrency, formatDate } from '../../utils'
import * as S from './styles'

const variants = { opened: { height: 152 }, closed: { height: 66 } }
const transition = { x: { type: 'just' }, duration: 0.35 } as const

export const Product = () => {
  const params = useParams()
  const { data: bookDetails } = useSWR('api/get-book', () => getBook(params.idBook ?? ''))

  useScrollToTop(true, 'html')

  const [showDescription, setShowDescription] = useState(false)

  const bookName = bookDetails?.volumeInfo.title
  const bookAuthors = bookDetails?.volumeInfo.authors.join(' e ')
  const bookPrice = formatCurrency(bookDetails?.saleInfo.listPrice?.amount || 0)
  const bookDescription = bookDetails?.volumeInfo.description
  const bookAverage = bookDetails?.volumeInfo.averageRating
  const bookPages = bookDetails?.volumeInfo.pageCount
  const bookPublisher = bookDetails?.volumeInfo.publisher
  const bookPublisherDate = formatDate(bookDetails?.volumeInfo.publishedDate || '2022-11-21')
  const bookImagem = bookDetails?.volumeInfo.imageLinks?.thumbnail

  const handleShowDescription = () => setShowDescription((prev) => !prev)

  return (
    <S.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition}>
      <S.ProductInfo>
        <S.ProductLeft>
          <S.BookName>{bookName}</S.BookName>
          <S.BookAuthors>{bookAuthors}</S.BookAuthors>
          <S.BookPrice>{bookPrice}</S.BookPrice>

          <S.DescriptionWrapper>
            <S.BookDescription
              variants={variants}
              transition={transition}
              animate={showDescription ? 'opened' : 'closed'}
              showDescription={showDescription}
              dangerouslySetInnerHTML={{ __html: bookDescription ?? '' }}
            />
            <S.ButtonSeeMore showDescription={showDescription} onClick={handleShowDescription}>
              <GrFormNext size={32} />
            </S.ButtonSeeMore>
          </S.DescriptionWrapper>

          <S.InfoBookWrapper>
            {bookAverage && (
              <S.InfoWrapper>
                <S.InfoTitle>Avaliações:</S.InfoTitle>
                <S.Info>{bookAverage}</S.Info>
              </S.InfoWrapper>
            )}
            <S.InfoWrapper>
              <S.InfoTitle>Páginas:</S.InfoTitle>
              <S.Info>{bookPages}</S.Info>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.InfoTitle>Editora:</S.InfoTitle>
              <S.Info>{bookPublisher}</S.Info>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.InfoTitle>Data de lançamento:</S.InfoTitle>
              <S.Info>{bookPublisherDate}</S.Info>
            </S.InfoWrapper>
          </S.InfoBookWrapper>

          <S.ButtonSeeDetails>Veja detalhes</S.ButtonSeeDetails>
        </S.ProductLeft>

        <S.ProductCenter>
          <S.BookImage src={bookImagem} />
        </S.ProductCenter>

        <S.ProductRight></S.ProductRight>
      </S.ProductInfo>
    </S.Container>
  )
}
