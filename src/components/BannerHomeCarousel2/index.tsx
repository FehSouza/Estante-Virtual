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
} as const

const transition = { x: { type: 'just', duration: 0.35 } } as const

interface BannerHomeCarousel2Props {
  bookList: BooksProps[]
  selectBook: (id: string) => void
}

export const BannerHomeCarousel2 = ({ bookList, selectBook }: BannerHomeCarousel2Props) => {
  const [slide, setSlide] = useState({ first: 0, second: 1, third: 2, fourth: 3 })
  const idBook = useSelectedBookSelect()
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
            const bookId = bookList[slide].id
            const bookName = bookList[slide].volumeInfo.title
            const bookImage = bookList[slide].volumeInfo.imageLinks.thumbnail
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
                selected={bookId === idBook}
              >
                <S.BookWrapper onClick={() => selectBook(bookId)}>
                  <S.BookImage alt={`Imagem da capa do livro "${bookName}"`} src={bookImage} />
                  <S.BookPrice>{bookPrice}</S.BookPrice>
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
