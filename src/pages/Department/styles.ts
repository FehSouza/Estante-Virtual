import styled from 'styled-components'

export const Department = styled.section`
  min-height: 1440px;
  max-width: 1440px;
  width: calc(100% - 32px);
  padding: 16px 0;
  margin: 0 auto;
  margin-top: 68px;
  display: flex;
  flex-direction: column;
`

export const DepartmentName = styled.h1`
  font-size: 34px;
  font-weight: 600;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.text};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const DepartmentFilters = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TotalProducts = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
`

export const OrderWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const OrderTitle = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text};
`

export const OrderSelector = styled.div`
  margin-left: 16px;
  width: 200px;
  height: 40px;
  border-radius: 12px;
  border: solid 1px ${({ theme }) => theme.colors.shadow};
  transition-duration: 350ms;

  &:hover {
    cursor: pointer;
    border: solid 1px ${({ theme }) => theme.colors.textLight};
  }
`

export const OrderOptions = styled.ul`
  
`

export const OrderOption = styled.li``
