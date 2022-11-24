import { useState } from 'react'
import { BsHandbag, BsHeart, BsListTask } from 'react-icons/bs'
import { FiCheckSquare } from 'react-icons/fi'
import { GrFormNext } from 'react-icons/gr'
import { IoReaderOutline } from 'react-icons/io5'
import { TbClock2 } from 'react-icons/tb'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { CarouselThreeSlides } from '../../components'
import { getBook, getBooksAuthor } from '../../services'
import { formatCurrency, formatDate } from '../../utils'
import * as S from './styles'

const variantsDesc = { opened: { height: 152, overflow: 'auto' }, closed: { height: 66, overflow: 'hidden' } } as const
const variantsButton = { opened: { transform: 'rotate(270deg)' }, closed: { transform: 'rotate(90deg)' } } as const
const transitionDescription = { x: { type: 'just' }, duration: 0.35 } as const

export const Product = () => {
  const params = useParams()

  const { data: bookDetails } = useSWR('api/get-book', () => getBook(params.idBook ?? ''))
  const { data: booksAuthor } = useSWR('api/get-books-author', () =>
    getBooksAuthor(bookDetails?.volumeInfo.authors[0].replace(' ', '-'))
  )

  const bookName = bookDetails?.volumeInfo.title
  const bookAuthors = bookDetails?.volumeInfo.authors.join(' e ')
  const bookPrice = bookDetails?.saleInfo.listPrice?.amount
  const bookPriceFormatted = formatCurrency(bookPrice || 0)
  const bookDescription = bookDetails?.volumeInfo.description
  const bookAverage = bookDetails?.volumeInfo.averageRating
  const bookPages = bookDetails?.volumeInfo.pageCount
  const bookPublisher = bookDetails?.volumeInfo.publisher
  const bookPublisherDate = formatDate(bookDetails?.volumeInfo.publishedDate || '2022-11-21')
  const bookImagem = bookDetails?.volumeInfo.imageLinks?.thumbnail

  const [showDescription, setShowDescription] = useState(false)
  const animate = showDescription ? 'opened' : 'closed'
  const handleShowDescription = () => setShowDescription((prev) => !prev)

  const [quantity, setQuantity] = useState<number | string>(1)

  const bestPrice = bookPrice ? Math.abs(bookPrice * 0.75 * Number(quantity)) : 0
  const bestPriceFormatted = formatCurrency(bestPrice)

  const handleAddProduct = () => setQuantity((prev) => Number(prev) + 1)
  const handleRemoveProduct = () => setQuantity((prev) => Number(prev) - 1)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',' || e.key === '.') e.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const characterLimit = 2
    const number = Number(e.target.value.slice(0, characterLimit))
    setQuantity(number === 0 ? '' : number)
  }

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = Number(e.target.value)
    if (number > 0) return
    setQuantity(number === 0 ? 1 : number * -1)
  }

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
          <S.BookPrice>{bookPriceFormatted}</S.BookPrice>

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

          {bookPriceFormatted && (
            <>
              <S.ListPriceWrapper>
                <S.PriceTitle>Preço original</S.PriceTitle>
                <S.ListPrice>{bookPriceFormatted}</S.ListPrice>
              </S.ListPriceWrapper>

              <S.DiscountWrapper>
                <S.PriceTitle>Taxa de desconto</S.PriceTitle>
                <S.Discount>25% de desconto</S.Discount>
              </S.DiscountWrapper>
            </>
          )}

          <S.BestPriceWrapper>
            <S.PriceWrapper>
              {bookPriceFormatted && <S.PriceTitle>Preço com desconto</S.PriceTitle>}
              <S.BestPrice>{bestPriceFormatted}</S.BestPrice>
            </S.PriceWrapper>

            <S.QuantityWrapper>
              <S.QuantityButton
                disabled={quantity === 1 ? true : false}
                className="button-minus"
                onClick={handleRemoveProduct}
              >
                <GrFormNext size={32} />
              </S.QuantityButton>

              <S.InputWrapper>
                <S.QuantityInput
                  type="number"
                  maxLength={3}
                  value={quantity}
                  onKeyDown={(e) => handleKeyDown(e)}
                  onChange={(e) => handleChange(e)}
                  onBlur={(e) => handleBlur(e)}
                />
                <S.TextInput>Unid.</S.TextInput>
              </S.InputWrapper>

              <S.QuantityButton
                disabled={quantity === 99 ? true : false}
                className="button-plus"
                onClick={handleAddProduct}
              >
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

      <S.Hr />

      <S.ShelfModel1>
        <S.ShelfTitle>Veja outros livros deste autor</S.ShelfTitle>
        {!!booksAuthor && <CarouselThreeSlides bookList={booksAuthor} />}
      </S.ShelfModel1>
    </S.Container>
  )
}
