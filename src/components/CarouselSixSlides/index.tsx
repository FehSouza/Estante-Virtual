import { AnimatePresence, motion } from 'framer-motion'
import { useId, useState } from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { BooksProps } from '../../@types'
import { formatCurrency } from '../../utils/formatCurrency'
import * as S from './styles'

export const CarouselSixSlides = ({ bookList }: { bookList: BooksProps[] }) => {
  const [slide, setSlide] = useState({ first: 0, second: 1, third: 2, fourth: 3, fifth: 4, sixth: 5 })
  const id = useId()
  const lastBook = bookList.length - 1
  const slidesToShow = Object.values(slide)

  const handleNext = () => {
    setSlide((prev) => ({ ...prev, sixth: prev.sixth === lastBook ? 0 : prev.sixth + 1 }))
    setSlide((prev) => ({ ...prev, fifth: prev.fifth === lastBook ? 0 : prev.fifth + 1 }))
    setSlide((prev) => ({ ...prev, fourth: prev.fourth === lastBook ? 0 : prev.fourth + 1 }))
    setSlide((prev) => ({ ...prev, third: prev.third === lastBook ? 0 : prev.third + 1 }))
    setSlide((prev) => ({ ...prev, second: prev.second === lastBook ? 0 : prev.second + 1 }))
    setSlide((prev) => ({ ...prev, first: prev.first === lastBook ? 0 : prev.first + 1 }))
  }

  const handlePrev = () => {
    setSlide((prev) => ({ ...prev, first: prev.first === 0 ? lastBook : prev.first - 1 }))
    setSlide((prev) => ({ ...prev, second: prev.second === 0 ? lastBook : prev.second - 1 }))
    setSlide((prev) => ({ ...prev, third: prev.third === 0 ? lastBook : prev.third - 1 }))
    setSlide((prev) => ({ ...prev, fourth: prev.fourth === 0 ? lastBook : prev.fourth - 1 }))
    setSlide((prev) => ({ ...prev, fifth: prev.fifth === 0 ? lastBook : prev.fifth - 1 }))
    setSlide((prev) => ({ ...prev, sixth: prev.sixth === 0 ? lastBook : prev.sixth - 1 }))
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
