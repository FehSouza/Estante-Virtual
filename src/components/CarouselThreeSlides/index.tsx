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

export const CarouselThreeSlides = ({ bookList }: { bookList: BooksProps[] }) => {
  const id = useId()
  console.log('shelf3', id)
  const [count, setCount] = useState(0)
  const [prev, setPrev] = useState(count)
  const [slide1, setSlide1] = useState(0)
  const [slide2, setSlide2] = useState(1)
  const [slide3, setSlide3] = useState(2)

  const lastBook = bookList.length - 1

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
    count === lastBook ? setCount(0) : setCount(count + 1)
    slide3 === lastBook ? setSlide3(0) : setSlide3(slide3 + 1)
    slide2 === lastBook ? setSlide2(0) : setSlide2(slide2 + 1)
    slide1 === lastBook ? setSlide1(0) : setSlide1(slide1 + 1)
  }

  const handlePrev = () => {
    setPrev(count)
    count === 0 ? setCount(lastBook) : setCount(count - 1)
    slide1 === 0 ? setSlide1(lastBook) : setSlide1(slide1 - 1)
    slide2 === 0 ? setSlide2(lastBook) : setSlide2(slide2 - 1)
    slide3 === 0 ? setSlide3(lastBook) : setSlide3(slide3 - 1)
  }

  const slidesToShow = [slide1, slide2, slide3]

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
                  <S.BookWrapper color={bookList[slide].color}>
                    <S.ImageWrapper>
                      <S.BookImage
                        alt={`Imagem da capa do livro "${bookList[slide].volumeInfo.title}"`}
                        src={bookList[slide].volumeInfo.imageLinks?.thumbnail}
                      />
                    </S.ImageWrapper>
                    <S.InfosWrapper>
                      <S.BookName>{bookList[slide].volumeInfo.title}</S.BookName>
                      <S.BookAuthor>{bookList[slide].volumeInfo.authors.join(' e ')}</S.BookAuthor>
                      <S.BookDescription
                        dangerouslySetInnerHTML={{ __html: bookList[slide].volumeInfo.description ?? '' }}
                      />

                      <S.WrapperPrice>
                        <S.BookPrice>{formatCurrency(bookList[slide].saleInfo.listPrice?.amount || 0)}</S.BookPrice>
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
