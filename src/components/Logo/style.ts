import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;

  & svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 16px;
  }
`

export const Name = styled.h1`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 4px;
  margin-left: 8px;
  font-size: 20px;
`
