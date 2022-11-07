import { AnimatePresence, motion } from 'framer-motion'
import { useId, useState } from 'react'
import { BsHandbag } from 'react-icons/bs'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { BooksProps } from '../../@types'
import { formatCurrency } from '../../utils/formatCurrency'
import * as S from './styles'

const variants = {
  enter: (direction: number) => ({ x: 400 * direction, opacity: 0, scale: 0.5, y: 0 }),
  center: { x: 0, opacity: 1, scale: 1, y: 0 },
  exit: (direction: number) => ({ x: -400 * direction, opacity: 0, scale: 0.5, y: 0 }),
}

export const CarouselThreeSlides = ({
  bookList,
  selectBook,
}: {
  bookList: BooksProps[]
  selectBook: (id: string) => void
}) => {
  const [count, setCount] = useState(0)
  const [prev, setPrev] = useState(count)
  const [slide, setSlide] = useState({ first: 0, second: 1, third: 2 })
  const id = useId()
  const lastBook = bookList.length - 1
  const slidesToShow = Object.values(slide)

  let direction = 0

  if (prev === lastBook && count === 0) {
    direction = 1
  } else if ((prev === 0 && count === lastBook) || count < prev) {
    direction = -1
  } else {
    direction = 1
  }

  const handleNext = () => {
    setPrev(count)
    setCount((prev) => (prev === lastBook ? 0 : prev + 1))
    setSlide((prev) => ({ ...prev, third: prev.third === lastBook ? 0 : prev.third + 1 }))
    setSlide((prev) => ({ ...prev, second: prev.second === lastBook ? 0 : prev.second + 1 }))
    setSlide((prev) => ({ ...prev, first: prev.first === lastBook ? 0 : prev.first + 1 }))
  }

  const handlePrev = () => {
    setPrev(count)
    setCount((prev) => (prev === 0 ? lastBook : prev - 1))
    setSlide((prev) => ({ ...prev, first: prev.first === 0 ? lastBook : prev.first - 1 }))
    setSlide((prev) => ({ ...prev, second: prev.second === 0 ? lastBook : prev.second - 1 }))
    setSlide((prev) => ({ ...prev, third: prev.third === 0 ? lastBook : prev.third - 1 }))
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
              return (
                <motion.div
                  layout
                  key={`${id}-${bookList[slide].id}`}
                  layoutId={`${id}-${bookList[slide].id}`}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                  variants={variants}
                  custom={direction}
                >
                  <S.BookWrapper onClick={() => selectBook(bookList[slide].id)} color={bookList[slide].color}>
                    <S.ImageWrapper>
                      <S.BookImage
                        alt={`Imagem da capa do livro "${bookList[slide].volumeInfo.title}"`}
                        src={bookList[slide].volumeInfo.imageLinks?.thumbnail}
                      />
                    </S.ImageWrapper>
                    <S.InfosWrapper>
                      <S.BookName color={bookList[slide].color}>{bookList[slide].volumeInfo.title}</S.BookName>
                      <S.BookAuthor color={bookList[slide].color}>
                        {bookList[slide].volumeInfo.authors.join(' e ')}
                      </S.BookAuthor>
                      <S.BookDescription
                        dangerouslySetInnerHTML={{ __html: bookList[slide].volumeInfo.description ?? '' }}
                        color={bookList[slide].color}
                      />

                      <S.WrapperPrice>
                        <S.BookPrice color={bookList[slide].color}>
                          {formatCurrency(bookList[slide].saleInfo.listPrice?.amount || 0)}
                        </S.BookPrice>
                        <S.BookPage color={bookList[slide].color}>
                          <GrFormNext />
                        </S.BookPage>
                      </S.WrapperPrice>

                      <S.MiniCart color={bookList[slide].color}>
                        <S.MiniCartInt color={bookList[slide].color}>
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
