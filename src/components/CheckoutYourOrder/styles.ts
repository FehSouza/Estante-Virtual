import styled from 'styled-components'

export const Container = styled.div``

export const Title = styled.h2`
  margin-top: 56px;
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
`

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child > span {
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.text};
  }
`

export const SubTitle = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
`

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
`

export const Hr = styled.hr`
  height: 1px;
  width: calc(100%);
  background-color: ${({ theme }) => theme.colors.shadow};
  border: none;
  margin: 0;
  margin-top: 20px;
`
