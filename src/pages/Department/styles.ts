import styled, { keyframes } from 'styled-components'

export const shimmer = keyframes`
  from {
    background-position: -500px 0;
  }
  to {
    background-position: 500px 0;
  }
`

export const Department = styled.section`
  max-width: 1440px;
  width: calc(100% - 32px);
  padding: 0 16px;
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
`

export const TotalProducts = styled.span`
  font-weight: 500;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
`

export const TotalProductsSkeleton = styled.div`
  width: 122.7px;
  height: 22px;
  border-radius: 8px;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`
