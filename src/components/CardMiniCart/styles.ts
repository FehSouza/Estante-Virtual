import styled from 'styled-components'

export const ItemWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.shadow};
`

export const ImageWrapper = styled.div`
  width: 80px;
  height: 100px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`

export const Image = styled.img`
  width: auto;
  height: 100%;
  border-radius: 8px;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const NameAndDelete = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const Name = styled.span`
  font-weight: 500;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text};
  height: 44px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const ButtonDelete = styled.button`
  width: 24px;
  height: 24px;
  margin-left: 16px;

  & svg {
    color: ${({ theme }) => theme.colors.text};
    transition-duration: 350ms;
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.textLight};
  }
`

export const PriceAndQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
`

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListPrice = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: line-through;
`

export const BestPrice = styled.span`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
`

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.shadow};
`

export const ButtonQuantity = styled.button`
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text};
  width: 28px;
  height: 28px;
  background-color: ${({ theme }) => theme.colors.white};
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`

export const Quantity = styled.div`
  width: 28px;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text};
`
