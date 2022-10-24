import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { GrFormNext } from 'react-icons/gr'
import { BooksProps } from '../../pages'
import { formatCurrency } from '../../utils/formatCurrency'
import * as S from './styles'

export const CarouselFourSlides = ({ bookList }: { bookList: BooksProps[] }) => {
  const [count, setCount] = useState(0)
  const [slide1, setSlide1] = useState(0)
  const [slide2, setSlide2] = useState(1)
  const [slide3, setSlide3] = useState(2)
  const [slide4, setSlide4] = useState(3)

  const lastBook = bookList.length - 1

  const handleNext = () => {
    count === lastBook ? setCount(0) : setCount(count + 1)
    slide4 === lastBook ? setSlide4(0) : setSlide4(slide4 + 1)
    slide3 === lastBook ? setSlide3(0) : setSlide3(slide3 + 1)
    slide2 === lastBook ? setSlide2(0) : setSlide2(slide2 + 1)
    slide1 === lastBook ? setSlide1(0) : setSlide1(slide1 + 1)
  }

  const slidesToShow = [slide1, slide2, slide3, slide4]

  return (
    <>
      <AnimatePresence mode="popLayout">
        {bookList.length &&
          slidesToShow.map((slide) => {
            return (
              <motion.div
                key={slide}
                layoutId={bookList[slide].id}
                initial={{ x: 24, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: -24, opacity: 0, scale: 0.5 }}
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
              >
                <S.BookWrapper>
                  <S.BookImage
                    alt={`Imagem da capa do livro "${bookList[slide].volumeInfo.title}"`}
                    src={bookList[slide].volumeInfo.imageLinks?.thumbnail}
                  />
                  <S.BookPrice>{formatCurrency(bookList[slide].saleInfo.listPrice?.amount || 0)}</S.BookPrice>
                </S.BookWrapper>
              </motion.div>
            )
          })}
      </AnimatePresence>

      <S.ButtonCarousel onClick={handleNext}>
        <GrFormNext />
      </S.ButtonCarousel>
    </>
  )
}
