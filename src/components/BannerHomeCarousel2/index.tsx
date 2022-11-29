import { AnimatePresence } from 'framer-motion'
import { useId, useState } from 'react'
import { GrFormNext } from 'react-icons/gr'
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

interface BannerHomeCarousel2Props {
  bookList: BooksProps[]
}

export const BannerHomeCarousel2 = ({ bookList }: BannerHomeCarousel2Props) => {
  const [slide, setSlide] = useState({ first: 0, second: 1, third: 2, fourth: 3 })
  const idBookSelected = useSelectedBookSelect()
  const id = useId()
  const navigate = useNavigate()
  const location = useLocation()

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

  const handleSelectBook = (id: string) => navigate(`/product/${id}`, { state: { backgroundLocation: location } })

  return (
    <>
      <AnimatePresence mode="popLayout" key={id}>
        {bookList.length &&
          slidesToShow.slice(0, lastBook).map((slide) => {
            const book = bookList[slide]
            const bookId = book.id
            const bookName = book.volumeInfo.title
            const bookImage = book.volumeInfo.imageLinks.thumbnail
            const bookPrice = formatCurrency(book.saleInfo.listPrice.amount)

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
                selected={bookId === idBookSelected}
              >
                <S.BookWrapper onClick={() => handleSelectBook(bookId)}>
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
