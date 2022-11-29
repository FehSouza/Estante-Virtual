import styled from 'styled-components'

export const InfoBookWrapper = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`

export const InfoWrapper = styled.div<{ size: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ size }) => (size === 14 ? '42px' : '48px')};

  & + div {
    border-top: 1px solid ${({ theme }) => theme.colors.shadow};
  }
`

export const InfoTitle = styled.span<{ size: number }>`
  font-size: ${({ size }) => `${size}px`};
  line-height: ${({ size }) => `${size}px`};
  color: ${({ theme }) => theme.colors.text};
`

export const Info = styled.span<{ size: number }>`
  font-size: ${({ size }) => `${size}px`};
  line-height: ${({ size }) => `${size}px`};
  color: ${({ theme }) => theme.colors.text};
`
