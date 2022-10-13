import styled from 'styled-components'

export const Footer = styled.footer`
  box-shadow: 0px -2px 10px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.white};
`

export const Container = styled.div`
  max-width: 75rem;
  width: 75rem;
  padding: 2rem;
  margin: 0 auto;
`
