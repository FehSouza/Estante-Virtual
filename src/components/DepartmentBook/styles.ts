import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const BookWrapper = styled(NavLink)`
  width: calc((100% - 114px) / 4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 12px;
  box-sizing: border-box;
  transition-duration: 350ms;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.grey};
    box-shadow: 12px 12px 24px #00000026;
    cursor: pointer;

    .button-buy {
      opacity: 1;
    }
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 9/13;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.shadow};
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`

export const BookName = styled.span`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  display: inline-block;
  width: 100%;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 38px;
`

export const BookAuthor = styled.span`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  display: inline-block;
  width: 100%;
  text-align: center;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 34px;
`

export const BookPrice = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textLight};
  height: 17px;
  text-decoration: line-through;
`

export const BookBestPrice = styled.div`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  height: 19px;
`

export const ButtonBuy = styled.button`
  margin-top: 16px;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  transition-duration: 350ms;
  opacity: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
`
