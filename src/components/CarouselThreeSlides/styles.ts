import { lighten } from 'polished'
import styled from 'styled-components'

export const ShelfWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 60px;

  & > div {
    min-width: 40%;
    height: fit-content;
  }
`

export const BookWrapper = styled.li<{ color?: string }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 20px;
  transition-duration: 350ms;
  box-shadow: 12px 12px 24px #00000026;
  background-color: ${({ color }) => `${color ?? '#ffffff'}`};
`

export const ImageWrapper = styled.div`
  width: 100%;
  min-height: 256px;
  max-height: 256px;
  aspect-ratio: 6/9;
`

export const BookImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  border-radius: 16px;
`

export const InfosWrapper = styled.div`
  min-height: 256px;
  max-height: 256px;
  max-width: calc(100% - 30% - 24px);
  display: flex;
  flex-direction: column;
  position: relative;
`

export const BookName = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 22px;
  display: inline-block;
  width: calc(100% - 42px - 16px);
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const BookAuthor = styled.span`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  display: inline-block;
  width: calc(100% - 42px - 16px);
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const BookDescription = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 92px;

  & p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    line-height: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

export const WrapperPrice = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: end;
`

export const BookPrice = styled.span`
  margin-right: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  font-weight: 600;
`

export const BookPage = styled.button<{ color?: string }>`
  width: 56px;
  height: 56px;
  background-image: ${({ theme, color }) => `linear-gradient(155deg, ${theme.colors.white}4D, ${color})`};
  border: 1.5px solid ${({ theme }) => theme.colors.white}2D;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-image: ${({ theme, color }) => `linear-gradient(155deg, ${theme.colors.white}90, ${color})`};
  }

  & svg {
    font-size: 32px;

    & polyline {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`

export const MiniCart = styled.div<{ color?: string }>`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  background-image: ${({ theme, color }) =>
    `linear-gradient(320deg, ${color}, ${lighten(0.5, theme.colors.textLight)})`};

  &:hover {
    background-image: ${({ theme, color }) =>
      `linear-gradient(320deg, ${lighten(0.5, theme.colors.textLight)}, ${color})`};
  }
`

export const MiniCartInt = styled.div<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${({ color }) => `${color ?? '#ffffff'}`};

  & svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
    transition-duration: 350ms;
  }

  &:hover {
    cursor: pointer;
  }
`

export const ButtonCarousel = styled.button`
  position: absolute;
  top: 0px;
  right: calc((100% - 1440px - 32px));
  width: 48px;
  height: 48px;
  border-radius: 100%;
  border: none;
  background-image: ${({ theme }) =>
    `linear-gradient(320deg, ${theme.colors.text}, ${lighten(0.5, theme.colors.textLight)})`};
  display: flex;
  align-items: center;
  justify-content: center;

  &.button-prev {
    right: calc((100% - 1440px - 32px + 66px));
  }

  &:hover {
    background-image: ${({ theme }) =>
      `linear-gradient(320deg, ${lighten(0.5, theme.colors.textLight)}, ${theme.colors.text})`};
  }

  & svg {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.text};
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
