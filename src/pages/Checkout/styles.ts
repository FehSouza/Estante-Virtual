import styled from 'styled-components'

export const Container = styled.h1`
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
