import { motion } from 'framer-motion'
import styled from 'styled-components'

export const OrderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: auto;
`

export const OrderTitle = styled.span`
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text};
`

export const OrderSelector = styled.div<{ showOrder: boolean }>`
  margin-left: 16px;
  width: 160px;
  height: 40px;
  border-radius: 12px;
  border: solid 1px ${({ theme }) => theme.colors.shadow};
  transition-duration: 350ms;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 16px;
  box-sizing: border-box;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text};

  & > svg {
    transform: ${({ showOrder }) => (showOrder ? 'rotate(90deg)' : 'rotate(270deg)')};
    position: absolute;
    right: 8px;
    top: 8px;
    transition-duration: 350ms;

    & > polyline {
      stroke: ${({ theme }) => theme.colors.shadow};
      transition-duration: 350ms;
    }
  }

  &:hover {
    cursor: pointer;
    border: solid 1px ${({ theme }) => theme.colors.textLight};
    color: ${({ theme }) => theme.colors.textLight};

    & > svg > polyline {
      stroke: ${({ theme }) => theme.colors.textLight};
    }
  }
`

export const OrderOptions = styled(motion.ul)`
  position: absolute;
  top: 46px;
  right: 0;
  width: 160px;
  height: 92px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  border: solid 1px ${({ theme }) => theme.colors.shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 12px 12px 24px #00000026;
`

export const OrderOption = styled.li`
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 16px;

  &:hover {
    cursor: pointer;
    font-weight: 500;
  }

  & + li {
    margin-bottom: 16px;
  }
`
