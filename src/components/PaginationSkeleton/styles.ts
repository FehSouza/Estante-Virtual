import styled, { keyframes } from 'styled-components'

export const shimmer = keyframes`
  from {
    background-position: -30px 0;
  }
  to {
    background-position: 30px 0;
  }
`

export const PaginationWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  margin-left: 15%;
  padding-left: 48px;
  align-items: center;
  justify-content: center;
`

export const ArrowPage = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg > polyline {
    stroke: ${({ theme }) => theme.colors.textLight};
  }

  &.next {
    transform: rotate(180deg);
  }
`

export const Page = styled.span`
  margin: 0 10px;
  width: 28px;
  height: 19px;
  border-radius: 8px;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
`
