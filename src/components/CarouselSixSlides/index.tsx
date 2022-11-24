import { AnimatePresence } from 'framer-motion'
import { useId, useState } from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { useNavigate, useLocation } from 'react-router-dom'
import { BooksProps } from '../../@types'
import { useSelectedBookSelect } from '../../states'
import { formatCurrency } from '../../utils'
import * as S from './styles'

const variants = {
  initial: { x: 24, opacity: 0, scale: 0.5, y: 0 },
  animate: { x: 0, opacity: 1, scale: 1, y: 0 },
  exit: { x: -24, opacity: 0, scale: 0.5, y: 0 },
} as const

const transition = { x: { type: 'just', duration: 0.35 } } as const

interface CarouselSixSlidesProps {
  bookList: BooksProps[]
}

export const CarouselSixSlides = ({ bookList }: CarouselSixSlidesProps) => {
  const [slide, setSlide] = useState({ first: 0, second: 1, third: 2, fourth: 3, fifth: 4, sixth: 5 })
  const id = useId()
  const bookIdSelected = useSelectedBookSelect()
  const navigate = useNavigate()
  const location = useLocation()

  const lastBook = bookList.length - 1
  const slidesToShow = Object.values(slide)

  const handleNext = () =>
    setSlide((prev) => ({
      first: prev.first === lastBook ? 0 : prev.first + 1,
      second: prev.second === lastBook ? 0 : prev.second + 1,
      third: prev.third === lastBook ? 0 : prev.third + 1,
      fourth: prev.fourth === lastBook ? 0 : prev.fourth + 1,
      fifth: prev.fifth === lastBook ? 0 : prev.fifth + 1,
      sixth: prev.sixth === lastBook ? 0 : prev.sixth + 1,
    }))

  const handlePrev = () =>
    setSlide((prev) => ({
      first: prev.first === 0 ? lastBook : prev.first - 1,
      second: prev.second === 0 ? lastBook : prev.second - 1,
      third: prev.third === 0 ? lastBook : prev.third - 1,
      fourth: prev.fourth === 0 ? lastBook : prev.fourth - 1,
      fifth: prev.fifth === 0 ? lastBook : prev.fifth - 1,
      sixth: prev.sixth === 0 ? lastBook : prev.sixth - 1,
    }))

  const handleSelectBook = (id: string) => navigate(`/product/${id}`, { state: { backgroundLocation: location } })

  return (
    <>
      <S.ShelfWrapper>
        <AnimatePresence mode="popLayout" key={id}>
          {slidesToShow.slice(0, lastBook).map((slide) => {
            const bookId = bookList[slide].id
            const bookName = bookList[slide].volumeInfo.title
            const bookImage = bookList[slide].volumeInfo.imageLinks.thumbnail
            const bookAuthor = bookList[slide].volumeInfo.authors.join(' e ')
            const bookPrice = formatCurrency(bookList[slide].saleInfo.listPrice.amount)

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
                selected={bookIdSelected === bookId}
              >
                <S.BookWrapper onClick={() => handleSelectBook(bookId)}>
                  <S.ImagePriceWrapper>
                    <S.BookImage alt={`Imagem da capa do livro "${bookName}"`} src={bookImage} />
                    <S.BookPrice>{bookPrice}</S.BookPrice>
                  </S.ImagePriceWrapper>
                  <S.BookName>{bookName}</S.BookName>
                  <S.BookAuthor>{bookAuthor}</S.BookAuthor>
                </S.BookWrapper>
              </S.Card>
            )
          })}
        </AnimatePresence>

        <S.ButtonCarousel className="button-prev" onClick={handlePrev}>
          <S.ButtonCarouselInt>
            <GrFormPrevious />
          </S.ButtonCarouselInt>
        </S.ButtonCarousel>

        <S.ButtonCarousel onClick={handleNext}>
          <S.ButtonCarouselInt>
            <GrFormNext />
          </S.ButtonCarouselInt>
        </S.ButtonCarousel>
      </S.ShelfWrapper>
    </>
  )
}
