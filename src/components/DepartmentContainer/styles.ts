import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Filter = styled.div`
  margin-top: 48px;
  width: 15%;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
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
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  text-transform: uppercase;
`

export const AuthorName = styled.span`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  height: 18px;
  display: flex;
  align-items: center;
  width: fit-content;
  transition-duration: 350ms;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`

export const BooksContainer = styled.ul`
  width: 85%;
  padding-left: 48px;
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: 38px;
`
