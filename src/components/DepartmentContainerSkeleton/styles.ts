import styled, { keyframes } from 'styled-components'

export const shimmer = keyframes`
  from {
    background-position: -100px 0;
  }
  to {
    background-position: 100px 0;
  }
`

export const Container = styled.div`
  display: flex;
`

export const Filter = styled.div`
  margin-top: 48px;
  width: 15%;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;

  & svg {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const FilterTitle = styled.span`
  margin-top: 32px;
  width: 90%;
  height: 28px;
  border-radius: 8px;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
`

export const FilterName = styled.span`
  margin-top: 12px;
  width: 90%;
  height: 18px;
  border-radius: 8px;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`

export const BooksContainer = styled.ul`
  width: 85%;
  padding-left: 48px;
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: 38px;
`
