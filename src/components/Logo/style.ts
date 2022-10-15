import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 10rem;

  & svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
`

export const Name = styled.h1`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 4px;
  margin-left: 8px;
`
