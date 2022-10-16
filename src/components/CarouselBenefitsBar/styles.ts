import styled from 'styled-components'

export const ButtonPrevCarousel = styled.button`
  width: 32px;
  height: 32px;

  & svg {
    font-size: 32px;

    & polyline {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`

export const ButtonNextCarousel = styled.button`
  width: 32px;
  height: 32px;

  & svg {
    font-size: 32px;

    & polyline {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  & svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
  }
`
export const Text = styled.div`
  color: ${({ theme }) => theme.colors.white};
`
