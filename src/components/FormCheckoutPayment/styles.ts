import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  margin-top: 48px;
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
`

export const Container = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  & + div {
    border-top: 1px solid ${({ theme }) => theme.colors.shadow};
  }
`

export const Radio = styled.input`
  opacity: 0;
  z-index: -1;
`

export const RadioFake = styled.div<{ checked: boolean }>`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme, checked }) => (checked ? theme.colors.primary : theme.colors.textLight)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 350ms;
`

export const RadioFakeInt = styled(motion.div).attrs({ initial: { scale: 0 }, animate: { scale: 1 }, exit: { scale: 0 } })`
  height: 14px;
  width: 14px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Label = styled.label`
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`

export const Icons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 16px;

  & > svg {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const Error = styled.span`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  line-height: 16px;
`
