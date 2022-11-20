import { useState } from 'react'
import { BsHandbag, BsHeart, BsListTask } from 'react-icons/bs'
import { FiCheckSquare } from 'react-icons/fi'
import { GrFormNext } from 'react-icons/gr'
import { IoReaderOutline } from 'react-icons/io5'
import { TbClock2 } from 'react-icons/tb'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { getBook } from '../../services'
import { formatCurrency, formatDate } from '../../utils'
import * as S from './styles'

const variantsDesc = { opened: { height: 152, overflow: 'auto' }, closed: { height: 66, overflow: 'hidden' } } as const
const variantsButton = { opened: { transform: 'rotate(270deg)' }, closed: { transform: 'rotate(90deg)' } } as const
const transitionDescription = { x: { type: 'just' }, duration: 0.35 } as const

export const Product = () => {
  const params = useParams()
  const { data: bookDetails } = useSWR('api/get-book', () => getBook(params.idBook ?? ''))

  const [showDescription, setShowDescription] = useState(false)
  const animate = showDescription ? 'opened' : 'closed'

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
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transitionDescription}
    >
      <S.ProductInfo>
        <S.ProductLeft>
          <S.BookName>{bookName}</S.BookName>
          <S.BookAuthors>{bookAuthors}</S.BookAuthors>
          <S.BookPrice>{bookPrice}</S.BookPrice>

          <S.DescriptionWrapper>
            <S.BookDescription
              variants={variantsDesc}
              transition={transitionDescription}
              animate={animate}
              initial={false}
              dangerouslySetInnerHTML={{ __html: bookDescription ?? '' }}
            />

            <S.ButtonSeeMore variants={variantsButton} animate={animate} onClick={handleShowDescription}>
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

        <S.ProductRight>
          <S.ReadTitle>Você leu o livro?</S.ReadTitle>

          <S.ButtonOptions>
            <S.ButtonRead>
              <FiCheckSquare size={18} />
              Eu li
            </S.ButtonRead>

            <S.ButtonRead>
              <IoReaderOutline size={20} />
              Estou lendo
            </S.ButtonRead>

            <S.ButtonRead>
              <TbClock2 size={20} />
              Irei ler
            </S.ButtonRead>
          </S.ButtonOptions>

          <S.ListPriceWrapper>
            <S.PriceTitle>Preço original</S.PriceTitle>
            <S.ListPrice>{bookPrice}</S.ListPrice>
          </S.ListPriceWrapper>

          <S.DiscountWrapper>
            <S.PriceTitle>Taxa de desconto</S.PriceTitle>
            <S.Discount>25% de desconto</S.Discount>
          </S.DiscountWrapper>

          <S.BestPriceWrapper>
            <S.PriceWrapper>
              <S.PriceTitle>Preço com desconto</S.PriceTitle>
              <S.BestPrice>{bookPrice}</S.BestPrice>
            </S.PriceWrapper>

            <S.QuantityWrapper>
              <S.QuantityButton className="button-minus">
                <GrFormNext size={32} />
              </S.QuantityButton>

              <S.QuantityInput value={`01 unid.`} />

              <S.QuantityButton className="button-plus">
                <GrFormNext size={32} />
              </S.QuantityButton>
            </S.QuantityWrapper>
          </S.BestPriceWrapper>

          <S.ButtonsWrapper>
            <S.ButtonAddFavorites>
              <BsHeart size={28} />
            </S.ButtonAddFavorites>

            <S.ButtonAddBag>
              <BsHandbag size={28} />
              Adicionar na sacola
            </S.ButtonAddBag>
          </S.ButtonsWrapper>

          <S.ButtonAddWishlist>
            <BsListTask size={20} />
            Adicionar na lista de desejos
          </S.ButtonAddWishlist>
        </S.ProductRight>
      </S.ProductInfo>
    </S.Container>
  )
}
