import { motion } from 'framer-motion'
import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled(motion.div)``

export const ProductInfo = styled.div`
  display: flex;
  max-width: 1440px;
  width: calc(100% - 32px);
  padding: 0 16px;
  margin: 0 auto;
  margin-top: 68px;
`

export const ProductLeft = styled.div`
  width: 36%;
  padding-right: 48px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const BookName = styled.h2`
  font-size: 34px;
  line-height: 34px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

export const BookAuthors = styled.span`
  margin-top: 26px;
  font-size: 22px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.textLight};
  position: relative;
  width: fit-content;

  &::before {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.textLight};
    position: absolute;
    bottom: -6px;
    left: 0;
  }
`

export const BookPrice = styled.span`
  margin-top: 32px;
  font-size: 34px;
  line-height: 34px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

export const DescriptionWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BookDescription = styled(motion.p)<{ showDescription: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 22px;
  overflow-y: ${({ showDescription }) => (showDescription ? 'auto' : 'hidden')};
  padding-right: 8px;

  & b {
    font-weight: 400;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.white};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background-color: ${({ theme }) => lighten(0.1, theme.colors.textLight)};
    border: none;
  }
`

export const ButtonSeeMore = styled.button<{ showDescription: boolean }>`
  transform: ${({ showDescription }) => (showDescription ? 'rotate(270deg)' : 'rotate(90deg)')};
  width: 28px;
  height: 28px;
  margin-top: 6px;

  & svg > polyline {
    stroke: ${({ theme }) => theme.colors.text};
    transition-duration: 350ms;
  }

  &:hover {
    & svg {
      transform: translateX(2px);

      polyline {
        stroke: ${({ theme }) => theme.colors.textLight};
      }
    }
  }
`

export const InfoBookWrapper = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`

export const InfoWrapper = styled.div`
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + div {
    border-top: 1px solid ${({ theme }) => theme.colors.shadow};
  }
`

export const InfoTitle = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  line-height: 14px;
`

export const Info = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  line-height: 14px;
`

export const ButtonSeeDetails = styled.button`
  margin: 0 auto;
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
  line-height: 14px;
  position: relative;
  width: fit-content;
  transition-duration: 350ms;

  &::before {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.textLight};
    position: absolute;
    bottom: -4px;
    left: 0;
  }

  &:hover {
    color: ${({ theme }) => lighten(0.12, theme.colors.textLight)};

    &::before {
      background-color: ${({ theme }) => lighten(0.12, theme.colors.textLight)};
    }
  }
`

export const ProductCenter = styled.div`
  width: 32%;
  padding: 0 30px;
  box-sizing: border-box;
  border-left: 1px solid ${({ theme }) => theme.colors.shadow};
  border-right: 1px solid ${({ theme }) => theme.colors.shadow};
`

export const BookImage = styled.img`
  width: 100%;
  border-radius: 20px;
`

export const ProductRight = styled.div`
  width: 36%;
  padding-left: 48px;
  box-sizing: border-box;
`
