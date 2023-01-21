import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
`

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 1024px) {
    max-width: 86px;
  }
`

export const DepartmentName = styled(NavLink)`
  list-style: none;
  color: ${({ theme }) => theme.colors.textLight};
  padding: 14px 16px;
  margin: auto;
  text-align: center;
  line-height: 20px;
  transition-duration: 350ms;

  &.active {
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 1024px) and (min-width: 901px) {
    padding: 8px 12px;
  }

  @media (max-width: 900px) {
    padding: 8px 7px;
  }
`

export const ActiveDepartmentBar = styled(motion.div)`
  height: 3px;
  width: calc(100% - 16px);
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  position: absolute;
  bottom: 4px;
  left: 8px;

  @media (max-width: 1024px) {
    width: calc(100% - 8px);
    left: 4px;
  }
`

export const Search = styled.button`
  color: ${({ theme }) => theme.colors.textLight};
  padding: 11px 16px;
  transition-duration: 350ms;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    padding: 8px;
    padding-right: 16px;
  }
`
