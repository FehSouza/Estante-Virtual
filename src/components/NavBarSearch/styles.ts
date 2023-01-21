import styled from 'styled-components'

export const NavBarSearch = styled.nav`
  height: 48px;
  width: 734.47px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.textLight};
  display: flex;
  transition-duration: 350ms;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary};

    & svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.textLight};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight}8D;
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
