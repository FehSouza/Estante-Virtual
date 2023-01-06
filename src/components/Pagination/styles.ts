import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  user-select: none;
  margin-top: 48px;
  display: flex;
  margin-left: 15%;
  padding-left: 48px;
  align-items: center;
  justify-content: center;
`

export const ArrowPage = styled.div<{ disabled: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg > polyline {
    stroke: ${({ theme, disabled }) => (disabled ? theme.colors.textLight : theme.colors.text)};
    transition-duration: 350ms;
  }

  &.next {
    transform: rotate(180deg);
  }

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

    & > svg > polyline {
      stroke: ${({ theme }) => theme.colors.textLight};
    }
  }
`

export const Page = styled.span<{ currency: boolean }>`
  user-select: none;
  color: ${({ theme, currency }) => (currency ? theme.colors.primary : theme.colors.text)};
  font-weight: ${({ currency }) => (currency ? '600' : '400')};
  margin: 0 10px;
  width: 28px;
  text-align: center;

  &:hover {
    cursor: ${({ currency }) => (currency ? 'default' : 'pointer')};
    color: ${({ theme, currency }) => (currency ? theme.colors.primary : theme.colors.textLight)};
  }
`

export const PageFixed = styled.span`
  width: 48px;
  user-select: none;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 10px;
  text-align: center;
  transition-duration: 350ms;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textLight};
  }
`
