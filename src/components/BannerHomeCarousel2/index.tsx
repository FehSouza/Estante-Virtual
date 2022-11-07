import { AnimatePresence } from 'framer-motion'
import { useId, useState } from 'react'
import { GrFormNext } from 'react-icons/gr'
import { BooksProps } from '../../@types'
import { useSelectedBookSelect } from '../../states'
import { formatCurrency } from '../../utils/formatCurrency'
import * as S from './styles'

const variants = {
  initial: { x: 24, opacity: 0, scale: 0.5, y: 0 },
  animate: { x: 0, opacity: 1, scale: 1, y: 0 },
  exit: { x: -24, opacity: 0, scale: 0.5, y: 0 },
}

const transition = {
  x: { type: 'spring', stiffness: 300, damping: 30 },
  opacity: { duration: 0.3 },
} as const

export const BannerHomeCarousel2 = ({
  bookList,
  selectBook,
}: {
  bookList: BooksProps[]
  selectBook: (id: string) => void
}) => {
  const idBook = useSelectedBookSelect()
  const [slide, setSlide] = useState({ first: 0, second: 1, third: 2, fourth: 3 })
  const id = useId()
  const lastBook = bookList.length - 1
  const slidesToShow = Object.values(slide)

  const handleNext = () => {
    setSlide((prev) => ({
      first: prev.first === lastBook ? 0 : prev.first + 1,
      second: prev.second === lastBook ? 0 : prev.second + 1,
      third: prev.third === lastBook ? 0 : prev.third + 1,
      fourth: prev.fourth === lastBook ? 0 : prev.fourth + 1,
    }))
  }
  return (
    <>
      <AnimatePresence mode="popLayout" key={id}>
        {bookList.length &&
          slidesToShow.map((slide) => {
            const slideId = bookList[slide].id
            return (
              <S.Card
                layout
                key={`${id}-${slideId}`}
                layoutId={`${id}-${slideId}`}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transition}
                selected={slideId === idBook}
              >
                <S.BookWrapper onClick={() => selectBook(slideId)}>
                  <S.BookImage
                    alt={`Imagem da capa do livro "${bookList[slide].volumeInfo.title}"`}
                    src={bookList[slide].volumeInfo.imageLinks?.thumbnail}
                  />
                  <S.BookPrice>{formatCurrency(bookList[slide].saleInfo.listPrice?.amount || 0)}</S.BookPrice>
                </S.BookWrapper>
              </S.Card>
            )
          })}
      </AnimatePresence>

      <S.ButtonCarousel onClick={handleNext}>
        <GrFormNext />
      </S.ButtonCarousel>
    </>
  )
}
