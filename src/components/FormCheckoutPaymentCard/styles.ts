import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.section).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`

export const Wrapper = styled.div`
  margin-top: 16px;
  width: calc(25% - 24px);
  display: flex;
  flex-direction: column;

  &:first-child {
    min-width: calc(50% - 16px);
  }
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.textLight};
  transition-duration: 350ms;
  user-select: none;
`

export const Input = styled.input`
  margin-top: 8px;
  height: 38px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.textLight};
  padding: 0 12px;
  transition-duration: 350ms;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 0 16px #00000026;
  }
`

export const Error = styled.span`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  line-height: 16px;
`
