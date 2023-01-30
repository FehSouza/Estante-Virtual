import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NotFound = styled.h1`
  max-width: 1440px;
  width: calc(100% - 32px);
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  margin-top: 68px;
  font-size: 34px;
  line-height: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

export const Subtitle = styled.span`
  margin-top: 20px;
  font-size: 34px;
  line-height: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

export const Error = styled.div`
  margin: 208px 0;
  font-size: 56px;
  line-height: 58px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

export const Button = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 24px 32px;
  border-radius: 28px;
  width: fit-content;
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`
