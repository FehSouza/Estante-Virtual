import { AnimatePresence, motion } from 'framer-motion'
import { useId, useState } from 'react'
import { BsHandbag } from 'react-icons/bs'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { BooksProps } from '../../@types'
import { formatCurrency } from '../../utils/formatCurrency'
import * as S from './styles'

const variants = {
  initial: (direction: number) => ({ x: 400 * direction, opacity: 0, scale: 0.5, y: 0 }),
  animate: { x: 0, opacity: 1, scale: 1, y: 0 },
  exit: (direction: number) => ({ x: -400 * direction, opacity: 0, scale: 0.5, y: 0 }),
} as const

const transition = { x: { type: 'just', duration: 0.35 } } as const

interface CarouselThreeSlidesProps {
  bookList: BooksProps[]
  selectBook: (id: string) => void
}

export const CarouselThreeSlides = ({ bookList, selectBook }: CarouselThreeSlidesProps) => {
  const [slide, setSlide] = useState({ first: 0, second: 1, third: 2 })
  const [direction, setDirection] = useState(1)
  const id = useId()

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
            slidesToShow.map((slide) => {
              const bookId = bookList[slide].id
              const bookName = bookList[slide].volumeInfo.title
              const bookImage = bookList[slide].volumeInfo.imageLinks.thumbnail
              const bookAuthor = bookList[slide].volumeInfo.authors.join(' e ')
              const bookPrice = formatCurrency(bookList[slide].saleInfo.listPrice.amount)
              const bookColor = bookList[slide].color
              const bookDescription = bookList[slide].volumeInfo.description

              return (
                <motion.div
                  key={`${id}-${bookId}`}
                  layout
                  layoutId={`${id}-${bookId}`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  transition={transition}
                  custom={direction}
                >
                  <S.BookWrapper onClick={() => selectBook(bookId)} color={bookColor}>
                    <S.ImageWrapper>
                      <S.BookImage alt={`Imagem da capa do livro "${bookName}"`} src={bookImage} />
                    </S.ImageWrapper>
                    <S.InfosWrapper>
                      <S.BookName color={bookColor}>{bookName}</S.BookName>
                      <S.BookAuthor color={bookColor}>{bookAuthor}</S.BookAuthor>
                      <S.BookDescription
                        dangerouslySetInnerHTML={{ __html: bookDescription ?? '' }}
                        color={bookColor}
                      />

                      <S.WrapperPrice>
                        <S.BookPrice color={bookColor}>{bookPrice}</S.BookPrice>
                        <S.BookPage color={bookColor}>
                          <GrFormNext />
                        </S.BookPage>
                      </S.WrapperPrice>

                      <S.MiniCart color={bookColor}>
                        <S.MiniCartInt color={bookColor}>
                          <BsHandbag />
                        </S.MiniCartInt>
                      </S.MiniCart>
                    </S.InfosWrapper>
                  </S.BookWrapper>
                </motion.div>
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
