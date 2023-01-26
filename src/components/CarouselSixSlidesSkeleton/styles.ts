import { lighten } from 'polished'
import styled, { keyframes } from 'styled-components'

export const shimmer = keyframes`
  from {
    background-position: -500px 0;
  }
  to {
    background-position: 500px 0;
  }
`

export const ShelfWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  margin-top: 48px;
  position: relative;

  & > li {
    width: calc((100% - (16px * 5)) / 6);
  }
`

export const BookWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 20px;
  transition-duration: 350ms;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0 16px #00000026;
  }
`

export const BookImage = styled.div`
  width: 100%;
  aspect-ratio: 6/9;
  border-radius: 16px;
  border: 1px solid transparent;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`

export const BookName = styled.span`
  margin-top: 20px;
  width: 100%;
  height: 22px;
  border-radius: 8px;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`

export const BookAuthor = styled.span`
  margin-top: 16px;
  padding-bottom: 4px;
  box-sizing: border-box;
  width: 100%;
  height: 22px;
  border-radius: 8px;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`

export const ButtonCarousel = styled.button`
  position: absolute;
  top: -82px;
  right: calc((100% - 1440px) / 2);
  width: 48px;
  height: 48px;
  border-radius: 100%;
  border: none;
  background-image: ${({ theme }) => `linear-gradient(320deg, ${theme.colors.text}, ${lighten(0.5, theme.colors.textLight)})`};
  display: flex;
  align-items: center;
  justify-content: center;

  &.button-prev {
    right: calc((100% - 1440px) / 2 + 68px);
  }

  & svg {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 1480px) {
    right: 16px;

    &.button-prev {
      right: 84px;
    }
  }
`

export const ButtonCarouselInt = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`
