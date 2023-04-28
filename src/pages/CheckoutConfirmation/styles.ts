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
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
`

export const TextBold = styled.p`
  margin-top: 32px;
  font-size: 28px;
  font-weight: 600;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Wrapper = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.p`
  margin-top: 32px;
  font-size: 20px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
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
