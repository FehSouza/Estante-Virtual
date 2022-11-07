import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Card = styled(motion.div)<{ selected?: boolean }>`
  ${(props) =>
    props.selected &&
    css`
      border: 1px solid red;
    `}
`

export const BookWrapper = styled.li`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  box-sizing: border-box;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0 16px #00000026;
  }
`

export const BookImage = styled.img`
  width: auto;
  height: auto;
  max-height: 100%;
  border-radius: 8px;
  overflow: hidden;
`

export const BookPrice = styled.span`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 8px 32px #00000066;
  border-radius: 16px;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-weight: 600;
`
export const ButtonCarousel = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  right: -19px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  & svg {
    font-size: 28px;
    margin-left: 2px;

    & polyline {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`
