import { lighten } from 'polished'
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
  max-width: 1440px;
  width: calc(100% - 32px);
  padding: 16px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 14px;
  }
`

export const MiniCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  background-image: ${({ theme }) => `linear-gradient(100deg, ${theme.colors.primary}, ${theme.colors.secondary})`};
  position: relative;

  &:hover {
    background-image: ${({ theme }) => `linear-gradient(100deg, ${theme.colors.secondary}, ${theme.colors.primary})`};
  }
`

export const QuantityMiniCart = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 22px;
  height: 22px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
    font-size: 20px;
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
  font-size: 20px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textLight};
  transition-duration: 350ms;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
  }
`
