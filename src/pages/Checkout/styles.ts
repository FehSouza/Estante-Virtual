import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1440px;
  width: calc(100% - 32px);
  padding: 0 16px;
  margin: 0 auto;
`

export const Title = styled.h1`
  margin-top: 68px;
  font-size: 34px;
  font-weight: 600;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.text};
`

export const Content = styled.div`
  display: flex;
`

export const ContentLeft = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`

export const ContentRight = styled.div`
  width: 40%;
  padding-left: 88px;
  box-sizing: border-box;
`

export const BuyButton = styled.button`
  margin-top: 36px;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  text-transform: uppercase;
  font-weight: 600;
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`

export const ContentEmptyBag = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  align-items: center;
`

export const EmptyBagText = styled.span`
  margin-top: 32px;
  font-size: 20px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
`

export const EmptyBagButton = styled.button`
  margin-top: 32px;
  font-weight: 500;
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: 600;
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`

export const Shelf = styled.div`
  max-width: calc(((100% - 1440px) / 2) + 1440px);
  padding-left: calc((100% - 1440px - 32px + 32px) / 2);
  position: relative;
  margin-top: 80px;

  @media (max-width: 1480px) {
    padding-left: 16px;
  }
`

export const ShelfTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
  font-weight: 600;
`
