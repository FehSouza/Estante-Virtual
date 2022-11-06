import { lighten } from 'polished'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.modalDetailsShadow};
  display: flex;
  justify-content: end;
  z-index: 3;
`

export const Modal = styled.div`
  width: 585px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.modalDetails};
  padding: 36px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonClose = styled.button`
  position: absolute;
  top: 36px;
  left: 36px;
  width: 56px;
  height: 56px;
  background-image: ${({ theme }) =>
    `linear-gradient(155deg, ${theme.colors.modalDetails}4D, ${theme.colors.white}4D)`};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.white}4D;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 350ms;

  & svg > polyline {
    stroke: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    opacity: 0.75;
  }
`

export const TitleModal = styled.h1``

export const BookImage = styled.img``

export const BookName = styled.h2``

export const BookAuthor = styled.span``

export const PriceBook = styled.span``

export const InfoWrapper = styled.div``

export const PageWrapper = styled.div``

export const PageBook = styled.span``

export const PageTitle = styled.span``

export const RatingWrapper = styled.div``

export const RatingBook = styled.span``

export const RatingTitle = styled.span``

export const DescriptionWrapper = styled.div``

export const DescriptionTitle = styled.span``

export const Description = styled.p``

export const ButtonSeeMore = styled.button``

export const ButtonSeeDetails = styled.button``

export const ButtonsWrapper = styled.div``

export const ButtonAddFavorites = styled.button``

export const ButtonAddBag = styled.button``

export const ButtonAddWishlist = styled.button``
