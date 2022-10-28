import { AnimatePresence, motion } from 'framer-motion'
import { useId, useState } from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { BooksProps } from '../../@types'
import { formatCurrency } from '../../utils/formatCurrency'
import * as S from './styles'

export const CarouselSixSlides = ({ bookList }: { bookList: BooksProps[] }) => {
  const id = useId()
  console.log('shelf4', id)
  const [slide1, setSlide1] = useState(0)
  const [slide2, setSlide2] = useState(1)
  const [slide3, setSlide3] = useState(2)
  const [slide4, setSlide4] = useState(3)
  const [slide5, setSlide5] = useState(4)
  const [slide6, setSlide6] = useState(5)
  const [count, setCount] = useState(0)

  const lastBook = bookList.length - 1

  const slidesToShow = [slide1, slide2, slide3, slide4, slide5, slide6]

  const handleNext = () => {
    count === lastBook ? setCount(0) : setCount(count + 1)

    slide6 === lastBook ? setSlide6(0) : setSlide6(slide6 + 1)
    slide5 === lastBook ? setSlide5(0) : setSlide5(slide5 + 1)
    slide4 === lastBook ? setSlide4(0) : setSlide4(slide4 + 1)
    slide3 === lastBook ? setSlide3(0) : setSlide3(slide3 + 1)
    slide2 === lastBook ? setSlide2(0) : setSlide2(slide2 + 1)
    slide1 === lastBook ? setSlide1(0) : setSlide1(slide1 + 1)
  }

  const handlePrev = () => {
    count === 0 ? setCount(lastBook) : setCount(count - 1)

    slide1 === 0 ? setSlide1(lastBook) : setSlide1(slide1 - 1)
    slide2 === 0 ? setSlide2(lastBook) : setSlide2(slide2 - 1)
    slide3 === 0 ? setSlide3(lastBook) : setSlide3(slide3 - 1)
    slide4 === 0 ? setSlide4(lastBook) : setSlide4(slide4 - 1)
    slide5 === 0 ? setSlide5(lastBook) : setSlide5(slide5 - 1)
    slide6 === 0 ? setSlide6(lastBook) : setSlide6(slide6 - 1)
  }

  return (
    <>
      <S.ShelfWrapper>
        <AnimatePresence mode="popLayout" key={id}>
          {slidesToShow.map((slide) => (
            <motion.div
              layout
              key={`${id}-${bookList[slide].id}`}
              layoutId={`${id}-${bookList[slide].id}`}
              initial={{ x: 24, opacity: 0, scale: 0.5, y: 0 }}
              animate={{ x: 0, opacity: 1, scale: 1, y: 0 }}
              exit={{ x: -24, opacity: 0, scale: 0.5, y: 0 }}
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
            >
              <S.BookWrapper>
                <S.ImagePriceWrapper>
                  <S.BookImage
                    alt={`Imagem da capa do livro "${bookList[slide].volumeInfo.title}"`}
                    src={bookList[slide].volumeInfo.imageLinks?.thumbnail}
                  />
                  <S.BookPrice>{formatCurrency(bookList[slide].saleInfo.listPrice?.amount || 0)}</S.BookPrice>
                </S.ImagePriceWrapper>
                <S.BookName>{bookList[slide].volumeInfo.title}</S.BookName>
                <S.BookAuthor>{bookList[slide].volumeInfo.authors.join(' e ')}</S.BookAuthor>
              </S.BookWrapper>
            </motion.div>
          ))}
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
