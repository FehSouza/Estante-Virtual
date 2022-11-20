import { motion } from 'framer-motion'
import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.modalDetailsShadow};
  display: flex;
  justify-content: flex-end;
  z-index: 3;
`

export const Modal = styled.div`
  width: 585px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.modalDetails};
  padding: 32px 74px;
  padding-right: 84px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonClose = styled.button`
  position: absolute;
  top: 32px;
  left: 32px;
  width: 40px;
  height: 40px;
  background-image: ${({ theme }) =>
    `linear-gradient(155deg, ${theme.colors.modalDetails}4D, ${theme.colors.white}4D)`};
  border-radius: 8px;
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

export const TitleModal = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
`

export const BookImage = styled.img`
  margin-top: 28px;
  width: auto;
  height: 224px;
  border-radius: 16px;
`

export const BookName = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-top: 16px;
`

export const BookAuthor = styled.span`
  color: ${({ theme }) => theme.colors.modalDetailsText};
  line-height: 20px;
  margin-top: 12px;
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 28px;
`

export const PriceWrapper = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PriceBook = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  line-height: 20px;
`

export const PriceTitle = styled.span`
  color: ${({ theme }) => theme.colors.modalDetailsText};
  line-height: 20px;
  margin-top: 8px;
`

export const PageWrapper = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 48px;

  &::before {
    content: '';
    height: 100%;
    width: 1px;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) =>
      `linear-gradient(to top, ${theme.colors.modalDetails}, ${theme.colors.modalDetailsText}, ${theme.colors.modalDetails})`};
  }
`
export const PageBook = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  line-height: 20px;
`

export const PageTitle = styled.span`
  color: ${({ theme }) => theme.colors.modalDetailsText};
  line-height: 20px;
  margin-top: 8px;
`

export const RatingWrapper = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 48px;

  &::before {
    content: '';
    height: 100%;
    width: 1px;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) =>
      `linear-gradient(to top, ${theme.colors.modalDetails}, ${theme.colors.modalDetailsText}, ${theme.colors.modalDetails})`};
  }
`

export const RatingBook = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  line-height: 20px;
`

export const RatingTitle = styled.span`
  color: ${({ theme }) => theme.colors.modalDetailsText};
  line-height: 20px;
  margin-top: 8px;
`

export const DescriptionWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const DescriptionTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`

export const Description = styled(motion.p)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  line-height: 20px;
  margin-top: 16px;
  padding-right: 8px;

  & b {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.white};
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.modalDetails};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background-color: ${({ theme }) => lighten(0.1, theme.colors.textLight)};
    border: none;
  }
`

export const DescriptionOverlay = styled.div<{ showDescription: boolean }>`
  display: ${({ showDescription }) => (showDescription ? 'none' : 'block')};
  position: absolute;
  top: 38px;
  left: 0;
  width: 100%;
  height: 60px;
  background: ${({ theme }) => `linear-gradient(to bottom, transparent, ${theme.colors.modalDetails})`};
`

export const ButtonSeeMore = styled.button<{ showDescription: boolean }>`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin: 0 auto;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 350ms;

  &:hover {
    opacity: 0.75;
  }

  & svg {
    margin-left: 10px;
    transform: ${({ showDescription }) => (showDescription ? 'rotate(90deg)' : 'rotate(270deg)')};

    & polyline {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`

export const ButtonSeeDetails = styled.button`
  min-height: 60px;
  width: 100%;
  border-radius: 16px;
  margin-top: auto;
  background-image: ${({ theme }) => `linear-gradient(45deg, ${theme.colors.white}4D, ${theme.colors.modalDetails}4D)`};
  border: 1px solid ${({ theme }) => theme.colors.white}4D;
  color: ${({ theme }) => theme.colors.white};
  transition-duration: 350ms;

  &:hover {
    opacity: 0.75;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  margin-top: 16px;
`

export const ButtonAddFavorites = styled.button`
  height: 60px;
  width: calc((100% - 16px) / 2);
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.modalDetails};
  transition-duration: 350ms;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;

  &:hover {
    opacity: 0.85;
  }

  & svg {
    color: ${({ theme }) => theme.colors.modalDetails};
  }
`

export const ButtonAddBag = styled.button`
  height: 60px;
  width: calc((100% - 16px) / 2);
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.modalDetails};
  transition-duration: 350ms;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  & svg {
    color: ${({ theme }) => theme.colors.modalDetails};
  }
`

export const ButtonAddWishlist = styled.button`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  line-height: 20px;
  width: 100%;
  padding-top: 20px;
  margin-top: 20px;
  text-decoration: underline;
  position: relative;
  transition-duration: 350ms;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  &:hover {
    opacity: 0.75;
  }

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) =>
      `linear-gradient(to left, ${theme.colors.modalDetails}, ${theme.colors.modalDetailsText}, ${theme.colors.modalDetails})`};
  }
`
