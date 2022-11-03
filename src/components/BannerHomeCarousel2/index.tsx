import { AnimatePresence, motion } from 'framer-motion'
import { useId, useState } from 'react'
import { GrFormNext } from 'react-icons/gr'
import { BooksProps } from '../../@types'
import { formatCurrency } from '../../utils/formatCurrency'
import * as S from './styles'

export const BannerHomeCarousel2 = ({ bookList }: { bookList: BooksProps[] }) => {
  const [slide, setSlide] = useState({ first: 0, second: 1, third: 2, fourth: 3 })
  const id = useId()
  const lastBook = bookList.length - 1
  const slidesToShow = Object.values(slide)

  const handleNext = () => {
    setSlide((prev) => ({ ...prev, fourth: prev.fourth === lastBook ? 0 : prev.fourth + 1 }))
    setSlide((prev) => ({ ...prev, third: prev.third === lastBook ? 0 : prev.third + 1 }))
    setSlide((prev) => ({ ...prev, second: prev.second === lastBook ? 0 : prev.second + 1 }))
    setSlide((prev) => ({ ...prev, first: prev.first === lastBook ? 0 : prev.first + 1 }))
  }

  return (
    <>
      <AnimatePresence mode="popLayout" key={id}>
        {bookList.length &&
          slidesToShow.map((slide) => {
            return (
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
