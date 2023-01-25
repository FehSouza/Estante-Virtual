import { AnimatePresence } from 'framer-motion'
import { useId, useState } from 'react'
import { BsHandbag } from 'react-icons/bs'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { useLocation, useNavigate } from 'react-router-dom'
import { BooksProps } from '../../@types'
import { getOrderForm, useSelectedBookSelect } from '../../states'
import { miniCartAddItem, customStorage, formatCurrency } from '../../utils'
import * as S from './styles'

const variants = {
  initial: (direction: number) => ({ x: 400 * direction, opacity: 0, scale: 0.5, y: 0 }),
  animate: { x: 0, opacity: 1, scale: 1, y: 0 },
  exit: (direction: number) => ({ x: -400 * direction, opacity: 0, scale: 0.5, y: 0 }),
} as const

const transition = { x: { type: 'just', duration: 0.35 } } as const

interface CarouselThreeSlidesProps {
  bookList: BooksProps[]
}

export const CarouselThreeSlides = ({ bookList }: CarouselThreeSlidesProps) => {
  const [slide, setSlide] = useState({ first: 0, second: 1, third: 2 })
  const [direction, setDirection] = useState(1)
  const id = useId()
  const bookIdSelected = useSelectedBookSelect()
  const navigate = useNavigate()
  const location = useLocation()

  const lastBook = bookList.length - 1
  const slidesToShow = Object.values(slide)

  const handleNext = () => {
    setDirection(1)
    setSlide((prev) => ({
      first: prev.first === lastBook ? 0 : prev.first + 1,
      second: prev.second === lastBook ? 0 : prev.second + 1,
      third: prev.third === lastBook ? 0 : prev.third + 1,
    }))
  }

  const handlePrev = () => {
    setDirection(-1)
    setSlide((prev) => ({
      first: prev.first === 0 ? lastBook : prev.first - 1,
      second: prev.second === 0 ? lastBook : prev.second - 1,
      third: prev.third === 0 ? lastBook : prev.third - 1,
    }))
  }

  const handleSelectBook = (id: string) => navigate(`/produto/${id}`, { state: { backgroundLocation: location } })

  return (
    <>
      <S.ButtonCarousel className="button-prev" onClick={handlePrev}>
        <S.ButtonCarouselInt>
          <GrFormPrevious />
        </S.ButtonCarouselInt>
      </S.ButtonCarousel>

      <S.ShelfWrapper>
        <AnimatePresence custom={direction} mode="popLayout" key={id}>
          {bookList.length &&
            slidesToShow.slice(0, lastBook).map((slide) => {
              const book = bookList[slide]
              const bookId = book.id
              const bookName = book.volumeInfo.title
              const bookImage = book.volumeInfo.imageLinks.thumbnail
              const authors = book.volumeInfo.authors
              const bookAuthor = authors && (authors.length <= 2 ? authors?.join(' e ') : `${authors[0]}, ${authors[1]} e outros`)
              const bookPrice = formatCurrency(book.saleInfo.listPrice.amount)
              const bookColor = book.color
              const bookDescription = book.volumeInfo.description

              const handleAddItemMiniCart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                e.stopPropagation()

                miniCartAddItem({ bookDetails: book, quantity: 1 })
                const orderForm = getOrderForm()
                customStorage.setItem('orderForm', orderForm)

                navigate('/mini-cart', { state: { backgroundLocation: location } })
              }

              return (
                <S.Card
                  key={`${id}-${bookId}`}
                  layout
                  layoutId={`${id}-${bookId}`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  transition={transition}
                  custom={direction}
                  selected={bookIdSelected === bookId}
                >
                  <S.BookWrapper onClick={() => handleSelectBook(bookId)} color={bookColor}>
                    <S.ImageWrapper>
                      <S.BookImage alt={`Imagem da capa do livro "${bookName}"`} src={bookImage} />
                    </S.ImageWrapper>
                    <S.InfosWrapper>
                      <S.BookName color={bookColor}>{bookName}</S.BookName>
                      <S.BookAuthor color={bookColor}>{bookAuthor}</S.BookAuthor>
                      <S.BookDescription dangerouslySetInnerHTML={{ __html: bookDescription ?? '' }} color={bookColor} />

                      <S.WrapperPrice>
                        <S.BookPrice color={bookColor}>{bookPrice}</S.BookPrice>
                        <S.BookPage color={bookColor}>
                          <GrFormNext />
                        </S.BookPage>
                      </S.WrapperPrice>

                      <S.MiniCart onClick={handleAddItemMiniCart} color={bookColor}>
                        <S.MiniCartInt color={bookColor}>
                          <BsHandbag />
                        </S.MiniCartInt>
                      </S.MiniCart>
                    </S.InfosWrapper>
                  </S.BookWrapper>
                </S.Card>
              )
            })}
        </AnimatePresence>
      </S.ShelfWrapper>

      <S.ButtonCarousel onClick={handleNext}>
        <S.ButtonCarouselInt>
          <GrFormNext />
        </S.ButtonCarouselInt>
      </S.ButtonCarousel>
    </>
  )
}
