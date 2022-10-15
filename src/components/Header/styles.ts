import { motion } from 'framer-motion'
import { lighten } from 'polished'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  box-shadow: 0px 2px 10px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`

export const Container = styled.div`
  max-width: 75rem;
  width: 75rem;
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

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

export const NavBar = styled.nav`
  display: flex;
`

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const DepartmentName = styled(NavLink)`
  list-style: none;
  color: ${({ theme }) => theme.colors.textLight};
  transition-duration: 100ms;
  padding: 1rem;
  margin: auto;
  text-align: center;
  line-height: 1.25rem;
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
`

export const ActiveDepartmentBar = styled(motion.div)`
  height: 3px;
  width: calc(100% - 16px);
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  position: absolute;
  bottom: 4px;
  left: 8px;
`

export const Search = styled.button`
  color: ${({ theme }) => theme.colors.textLight};
  padding: 1rem;
  transition-duration: 350ms;
  font-size: 1.25rem;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
  }
`

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const MiniCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  background-image: ${({ theme }) => `linear-gradient(100deg, ${theme.colors.primary}, ${theme.colors.secondary})`};

  &:hover {
    background-image: ${({ theme }) => `linear-gradient(100deg, ${theme.colors.secondary}, ${theme.colors.primary})`};
  }
`

export const MiniCartInt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  & svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    transition-duration: 350ms;
  }

  &:hover {
    cursor: pointer;

    & svg {
      color: ${({ theme }) => lighten(0.15, theme.colors.primary)};
    }
  }
`

export const Login = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textLight};
  transition-duration: 350ms;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
  }
`
