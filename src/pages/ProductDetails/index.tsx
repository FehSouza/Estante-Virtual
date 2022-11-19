import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BsHandbag, BsHeart, BsListTask } from 'react-icons/bs'
import { GrFormPrevious } from 'react-icons/gr'
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'
import { getBook } from '../../services'
import { dispatchSelectedBook, resetSelectedBook } from '../../states'
import { formatCurrency } from '../../utils'
import * as S from './styles'

export const ProductDetails = () => {
  const param = useParams()

  const { data: bookDetails } = useSWR('api/get-book', () => getBook(param.idBook ?? ''))

  const navigate = useNavigate()
  const [showDescription, setShowDescription] = useState(false)
  const [buttonSeeMore, setButtonSeeMore] = useState('Mostrar mais')

  const handleClose = () => navigate(-1)
  const stopCloseModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()

  const spaceInfo = bookDetails?.volumeInfo.averageRating ? '33.33%' : '50%'

  const handleShowDescription = () => {
    setShowDescription((prev) => !prev)
    setButtonSeeMore((prev) => (prev === 'Mostrar mais' ? 'Mostrar menos' : 'Mostrar mais'))
  }

  useEffect(() => {
    dispatchSelectedBook(param.idBook)
    document.querySelector('html')?.setAttribute('style', `position: fixed; top: -${window.scrollY}px`)
    const scrollY = document.querySelector('html')!.style.top

    return () => {
      resetSelectedBook()
      document.querySelector('html')?.removeAttribute('style')
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [param.idBook])

  const handleSeeDetails = (id: string) => navigate(`/product/${id}`)

  const bookId = bookDetails?.id
  const bookImage = bookDetails?.volumeInfo.imageLinks?.thumbnail
  const bookName = bookDetails?.volumeInfo.title
  const bookAuthor = bookDetails?.volumeInfo.authors.join(' e ')
  const bookPrice = formatCurrency(bookDetails?.saleInfo.listPrice?.amount || 0)
  const bookPages = bookDetails?.volumeInfo.pageCount
  const bookAverage = bookDetails?.volumeInfo.averageRating
  const bookDescription = bookDetails?.volumeInfo.description

  return (
    <S.Container onClick={handleClose}>
      {bookDetails && (
        <motion.div
          initial={{ x: 585, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 585, opacity: 0 }}
          transition={{ x: { type: 'just' } }}
        >
          <S.Modal onClick={stopCloseModal}>
            <S.ButtonClose onClick={handleClose}>
              <GrFormPrevious size={24} />
            </S.ButtonClose>
            <S.TitleModal>Sobre o livro</S.TitleModal>
            <S.BookImage src={bookImage} />
            <S.BookName>{bookName}</S.BookName>
            <S.BookAuthor>{bookAuthor}</S.BookAuthor>

            <S.InfoWrapper>
              <S.PriceWrapper width={spaceInfo}>
                <S.PriceBook>{bookPrice}</S.PriceBook>
                <S.PriceTitle>Preço</S.PriceTitle>
              </S.PriceWrapper>
              <S.PageWrapper width={spaceInfo}>
                <S.PageBook>{bookPages}</S.PageBook>
                <S.PageTitle>Páginas</S.PageTitle>
              </S.PageWrapper>
              {bookAverage && (
                <S.RatingWrapper width={spaceInfo}>
                  <S.RatingBook>{bookAverage}</S.RatingBook>
                  <S.RatingTitle>Avaliações</S.RatingTitle>
                </S.RatingWrapper>
              )}
            </S.InfoWrapper>

            <S.DescriptionWrapper>
              <S.DescriptionTitle>Descrição</S.DescriptionTitle>
              <S.Description
                layout
                variants={{ opened: { height: 118 }, closed: { height: 60 } }}
                animate={showDescription ? 'opened' : 'closed'}
                showDescription={showDescription}
                dangerouslySetInnerHTML={{ __html: bookDescription ?? '' }}
              />
              <S.DescriptionOverlay showDescription={showDescription} />
              <S.ButtonSeeMore showDescription={showDescription} onClick={handleShowDescription}>
                {buttonSeeMore}
                <GrFormPrevious size={20} />
              </S.ButtonSeeMore>
            </S.DescriptionWrapper>

            <S.ButtonSeeDetails onClick={() => handleSeeDetails(bookId || '')}>Ver mais detalhes</S.ButtonSeeDetails>

            <S.ButtonsWrapper>
              <S.ButtonAddFavorites>
                <BsHeart size={20} />
                Favoritar
              </S.ButtonAddFavorites>
              <S.ButtonAddBag>
                <BsHandbag size={20} />
                Adicionar na sacola
              </S.ButtonAddBag>
            </S.ButtonsWrapper>

            <S.ButtonAddWishlist>
              <BsListTask size={20} />
              Adicionar na lista de desejos
            </S.ButtonAddWishlist>
          </S.Modal>
        </motion.div>
      )}
    </S.Container>
  )
}
