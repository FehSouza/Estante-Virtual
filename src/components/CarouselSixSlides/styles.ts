import { motion } from 'framer-motion'
import { lighten } from 'polished'
import styled from 'styled-components'

export const ShelfWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 16px;
  margin-top: 48px;
  position: relative;
  padding-bottom: 84px;

  & > div {
    width: calc((100% - (16px * 5)) / 6);
  }
`

export const Card = styled(motion.div)<{ selected?: boolean }>`
  position: relative;

  &::before {
    content: '';
    width: calc(100% - 24px);
    height: 3px;
    position: absolute;
    bottom: -9px;
    left: 12px;
    background-color: ${({ theme, selected }) => (selected ? theme.colors.primary : 'transparent')};
    transition-duration: 350ms;
  }

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid ${({ theme, selected }) => (selected ? theme.colors.primary : 'transparent')};
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translate(-50%);
    transition-duration: 350ms;
  }
`

export const BookWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 20px;
  transition-duration: 350ms;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0 16px #00000026;
  }
`

export const ImagePriceWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const BookImage = styled.img`
  width: 100%;
  aspect-ratio: 6/9;
  border-radius: 16px;
`

export const BookPrice = styled.span`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 16px;
  background: #00000066;
  box-shadow: 0 8px 32px #00000066;
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 24px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
`

export const BookName = styled.span`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 18px;
  display: inline-block;
  width: 100%;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const BookAuthor = styled.span`
  margin-top: 16px;
  padding-bottom: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  display: inline-block;
  width: 100%;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ButtonCarousel = styled.button`
  position: absolute;
  bottom: 0px;
  right: calc(50% - 33px);
  transform: translateX(50%);
  width: 48px;
  height: 48px;
  border-radius: 100%;
  border: none;
  background-image: ${({ theme }) => `linear-gradient(320deg, ${theme.colors.text}, ${lighten(0.5, theme.colors.textLight)})`};
  display: flex;
  align-items: center;
  justify-content: center;

  &.button-prev {
    right: calc(50% + 33px);
    transform: translateX(50%);
  }

  &:hover {
    background-image: ${({ theme }) => `linear-gradient(320deg, ${lighten(0.5, theme.colors.textLight)}, ${theme.colors.text})`};
  }

  & svg {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.text};
  }
`

export const ButtonCarouselInt = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`
