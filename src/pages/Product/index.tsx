import { useRef, useState } from 'react'
import { BsHandbag, BsHeart, BsListTask } from 'react-icons/bs'
import { FiCheckSquare } from 'react-icons/fi'
import { GrFormNext } from 'react-icons/gr'
import { IoReaderOutline } from 'react-icons/io5'
import { MdOutlineNoPhotography } from 'react-icons/md'
import { TbClock2 } from 'react-icons/tb'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'
import { BookInformation, CarouselSixSlides, CarouselSixSlidesSkeleton } from '../../components'
import { getBook, getBooksAuthor } from '../../services'
import { getOrderForm } from '../../states'
import { customStorage, formatCurrency, formatDate, miniCartAddItem } from '../../utils'
import * as S from './styles'

const variantsDesc = { opened: { height: 152, overflow: 'auto' }, closed: { height: 66, overflow: 'hidden' } } as const
const variantsButton = { opened: { transform: 'rotate(270deg)' }, closed: { transform: 'rotate(90deg)' } } as const
const transitionDescription = { x: { type: 'just' }, duration: 0.35 } as const

export const Product = () => {
  const params = useParams()

  const navigate = useNavigate()
  const location = useLocation()

  const { data: bookDetails } = useSWR(`api/get-book/${params.idBook}`, () => getBook(params.idBook ?? ''))

  const { data: booksAuthor, isValidating } = useSWR(
    () => (bookDetails?.volumeInfo.authors[0] ? `api/get-books-author/${bookDetails?.volumeInfo.authors[0]}` : null),
    () => getBooksAuthor(bookDetails?.volumeInfo.authors[0])
  )

  const bookId = String(bookDetails?.id)
  const bookName = bookDetails?.volumeInfo.title
  const authors = bookDetails?.volumeInfo.authors
  const bookAuthors = authors && (authors.length <= 2 ? authors?.join(' e ') : `${authors[0]}, ${authors[1]} e outros`)
  const bookPrice = bookDetails?.saleInfo.listPrice?.amount
  const bookPriceFormatted = bookPrice ? formatCurrency(bookPrice) : 'Grátis'
  const bookDescription = bookDetails?.volumeInfo.description
  const bookAverage = String(bookDetails?.volumeInfo.averageRating)
  const bookPages = String(bookDetails?.volumeInfo.pageCount)
  const bookPublisher = String(bookDetails?.volumeInfo.publisher)
  const bookPublisherDate = formatDate(bookDetails?.volumeInfo.publishedDate || '2022-11-21')
  const bookRefs = bookDetails?.volumeInfo.industryIdentifiers
  const bookISBN = bookRefs?.filter((item) => item.type === 'ISBN_13')
  const bookISBNFormatted = String(bookISBN ? bookISBN[0].identifier : '')
  const bookLanguage = String(bookDetails?.volumeInfo.language)
  const bookImagem = bookDetails?.volumeInfo.imageLinks?.thumbnail

  const [showDescription, setShowDescription] = useState(false)
  const animate = showDescription ? 'opened' : 'closed'

  const handleShowDescription = () => {
    setShowDescription((prev) => !prev)
    document.querySelector('.book-description-page')?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [quantity, setQuantity] = useState<number | string>(1)

  const bestPrice = bookPrice ? formatCurrency(Math.abs(bookPrice * 0.75 * Number(quantity))) : 'Grátis'

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

  const refHR = useRef<HTMLHRElement | null>(null)
  const handleSeeDetails = () => refHR.current?.scrollIntoView({ behavior: 'smooth' })

  const handleAddItemMiniCart = () => {
    miniCartAddItem({ bookDetails, quantity })
    const orderForm = getOrderForm()
    customStorage.setItem('orderForm', orderForm)

    navigate('/mini-cart', { state: { backgroundLocation: location } })
  }

  return (
    <S.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transitionDescription}>
      <S.ProductInfo>
        <S.ProductLeft>
          <S.BookName>{bookName}</S.BookName>
          <S.BookAuthors>{bookAuthors}</S.BookAuthors>
          <S.BookPrice>{bookPriceFormatted}</S.BookPrice>

          {bookDescription && (
            <S.DescriptionWrapper>
              <S.BookDescription
                className="book-description-page"
                variants={variantsDesc}
                transition={transitionDescription}
                animate={animate}
                initial={false}
                dangerouslySetInnerHTML={{ __html: bookDescription ?? '' }}
              />

              {bookDescription.length > 170 && (
                <S.ButtonSeeMore aria-label="button-see-more" variants={variantsButton} animate={animate} onClick={handleShowDescription}>
                  <GrFormNext size={32} />
                </S.ButtonSeeMore>
              )}
            </S.DescriptionWrapper>
          )}

          <BookInformation
            titles={['Avaliações:', 'Páginas:', 'Editora:', 'Data de lançamento:']}
            values={[bookAverage, bookPages, bookPublisher, bookPublisherDate]}
            fontSize={14}
          />

          <S.ButtonSeeDetails onClick={handleSeeDetails}>Veja detalhes</S.ButtonSeeDetails>
        </S.ProductLeft>

        <S.ProductCenter>
          {bookImagem ? (
            <S.BookImage src={bookImagem} />
          ) : (
            <S.WithoutImage>
              <MdOutlineNoPhotography size={40} />
            </S.WithoutImage>
          )}
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

          {!!bookPrice && (
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
              {!!bookPrice && <S.PriceTitleBest>Preço com desconto</S.PriceTitleBest>}
              <S.BestPrice>{bestPrice}</S.BestPrice>
            </S.PriceWrapper>

            <S.QuantityWrapper>
              <S.QuantityButton
                aria-label="button-quantity-minus"
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
                  onKeyDown={handleKeyDown}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-label="input-quantity"
                />
                <S.TextInput>Unid.</S.TextInput>
              </S.InputWrapper>

              <S.QuantityButton
                aria-label="button-quantity-plus"
                disabled={quantity === 99 ? true : false}
                className="button-plus"
                onClick={handleAddProduct}
              >
                <GrFormNext size={32} />
              </S.QuantityButton>
            </S.QuantityWrapper>
          </S.BestPriceWrapper>

          <S.ButtonsWrapper>
            <S.ButtonAddFavorites aria-label="button-add-favorites">
              <BsHeart size={28} />
            </S.ButtonAddFavorites>

            <S.ButtonAddBag onClick={handleAddItemMiniCart}>
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
        {isValidating && <CarouselSixSlidesSkeleton />}
        {!isValidating && booksAuthor && booksAuthor.length > 0 && <CarouselSixSlides bookList={booksAuthor} key={params.idBook} />}
        {!isValidating && !booksAuthor?.length && <S.EmptyBookList>Este autor não possui outros livros.</S.EmptyBookList>}
      </S.ShelfModel1>

      <S.Hr ref={refHR} />

      <S.DetailsWrapper>
        {bookDescription && (
          <>
            <S.DetailsTitle>Descrição do produto</S.DetailsTitle>
            <S.BookDescription dangerouslySetInnerHTML={{ __html: bookDescription ?? '' }} />
          </>
        )}

        <S.DetailsTitle>Detalhes do produto</S.DetailsTitle>

        <BookInformation
          titles={['Código de referência:', 'ISBN:', 'Idioma:', 'Editora:', 'Páginas:', 'Data de lançamento:', 'Avaliações:']}
          values={[bookId, bookISBNFormatted, bookLanguage, bookPublisher, bookPages, bookPublisherDate, bookAverage]}
          fontSize={16}
        />
      </S.DetailsWrapper>
    </S.Container>
  )
}
