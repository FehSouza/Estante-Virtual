import { GrFormPrevious } from 'react-icons/gr'
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'
import { getBook } from '../../services'
import * as S from './styles'

export const ProductDetails = () => {
  const param = useParams()

  const { data: bookDetails } = useSWR('api/get-book', () => getBook(param.idBook ?? ''))

  const navigate = useNavigate()

  const handleClose = () => navigate(-1)
  const stopCloseModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()

  return (
    <S.Container onClick={handleClose}>
      <S.Modal onClick={stopCloseModal}>
        {bookDetails && (
          <>
            <S.ButtonClose>
              <GrFormPrevious size={32} />
            </S.ButtonClose>
            <S.TitleModal>Sobre o livro</S.TitleModal>
            <S.BookImage src={bookDetails.volumeInfo.imageLinks?.thumbnail} />
            <S.BookName>{bookDetails.volumeInfo.title}</S.BookName>
            <S.BookAuthor>{bookDetails.volumeInfo.authors}</S.BookAuthor>
            <S.PriceBook>{bookDetails.saleInfo.listPrice?.amount}</S.PriceBook>

            <S.InfoWrapper>
              <S.PageWrapper>
                <S.PageBook>{bookDetails.volumeInfo.pageCount}</S.PageBook>
                <S.PageTitle>Página</S.PageTitle>
              </S.PageWrapper>
              {bookDetails.volumeInfo.averageRating && (
                <S.RatingWrapper>
                  <S.RatingBook>{bookDetails.volumeInfo.averageRating}</S.RatingBook>
                  <S.RatingTitle>Avaliações</S.RatingTitle>
                </S.RatingWrapper>
              )}
            </S.InfoWrapper>

            <S.DescriptionWrapper>
              <S.DescriptionTitle>Descrição</S.DescriptionTitle>
              <S.Description>{bookDetails.volumeInfo.description}</S.Description>
              <S.ButtonSeeMore>Mostrar mais</S.ButtonSeeMore>
            </S.DescriptionWrapper>

            <S.ButtonSeeDetails>Ver mais detalhes</S.ButtonSeeDetails>

            <S.ButtonsWrapper>
              <S.ButtonAddFavorites>Adicionar aos favoritos</S.ButtonAddFavorites>
              <S.ButtonAddBag>Adicionar na sacola</S.ButtonAddBag>
            </S.ButtonsWrapper>

            <S.ButtonAddWishlist>Adicionar na lista de desejos</S.ButtonAddWishlist>
          </>
        )}
      </S.Modal>
    </S.Container>
  )
}
