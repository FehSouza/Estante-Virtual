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
  margin-top: 32px;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  text-transform: uppercase;
`
