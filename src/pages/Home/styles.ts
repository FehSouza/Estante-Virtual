import { lighten } from 'polished'
import styled from 'styled-components'

export const MainBanner = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: 236px;
`

export const Banner = styled.div`
  width: 67%;
  max-height: 720px;
  background-color: ${({ theme }) => theme.colors.bannerPrimary};
  display: flex;
  justify-content: space-between;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 104px;
  min-width: 312px;
  max-width: 312px;
  height: calc(100% - 76px);

  @media (max-width: 1350px) and (min-width: 1251px) {
    padding-left: 80px;
  }

  @media (max-width: 1250px) {
    padding-left: 16px;
    min-width: 280px;
    max-width: 280px;
  }
`

export const Title = styled.h3`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 1250px) {
    font-size: 32px;
  }
`

export const Text = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 40px;

  @media (max-width: 1250px) {
    font-size: 20px;
  }
`

export const Button = styled.a`
  margin-top: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 24px 32px;
  border-radius: 28px;
  width: fit-content;
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

export const ImageWrapper = styled.div`
  max-width: 50%;
  min-width: 50%;
  height: auto;
  overflow: hidden;
  position: relative;
  z-index: 1;

  & img {
    max-width: 100%;
    height: auto;
    margin-top: -32px;
  }
`

export const CircleInt = styled.div`
  margin: 0 8px;
  max-width: calc(100% - 80px);
  width: 448px;
  aspect-ratio: 1/1;
  background-color: ${({ theme }) => theme.colors.bannerSecondary};
  border-radius: 100%;
  position: absolute;
  top: 37%;
  left: 48%;
  transform: translate(-50%, -50%);
  z-index: -1;
`

export const CircleExt = styled.div`
  margin: 0 8px;
  max-width: calc(100% - 16px);
  width: 512px;
  aspect-ratio: 1/1;
  background-color: ${({ theme }) => theme.colors.bannerPrimary};
  border: 1px solid ${({ theme }) => lighten(-0.15, theme.colors.bannerSecondary)};
  border-radius: 100%;
  position: absolute;
  top: 37%;
  left: 48%;
  transform: translate(-50%, -50%);
  z-index: -2;
`

export const Shelf1 = styled.div`
  width: 33%;
  background-color: ${({ theme }) => theme.colors.bannerSecondary};
  z-index: 1;
  position: relative;
  overflow: hidden;
`

export const ShelfTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
  font-weight: 600;
  padding: 56px 0 0 56px;
`

export const ShelfWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 64px 0 16px 56px;

  & > div {
    min-width: 40%;
    height: fit-content;
  }
`

export const BookWrapperShelf1 = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 20px;
  transition-duration: 350ms;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0 16px #00000026;
  }
`

export const ImagePriceWrapperShelf1 = styled.div`
  position: relative;
  width: 100%;
  min-height: 316px;
  max-height: 316px;
  aspect-ratio: 6/9;
`

export const BookImageShelf1 = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  border-radius: 16px;
`

export const BookPriceShelf1 = styled.span`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 16px;
  background: #00000066;
  box-shadow: 0 8px 32px #00000066;
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 24px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
`

export const BookNameShelf1 = styled.span`
  margin-top: 48px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 22px;
  display: inline-block;
  width: 100%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const BookAuthorShelf1 = styled.span`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  display: inline-block;
  width: 100%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ButtonCarouselShelf1 = styled.button`
  position: absolute;
  bottom: 42px;
  right: 160px;
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
    right: 228px;
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
  background-color: ${({ theme }) => theme.colors.bannerSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Shelf2 = styled.div`
  width: 482px;
  height: 152px;
  position: absolute;
  bottom: -76px;
  left: 160px;
  background-color: ${({ theme }) => theme.colors.bannerPrimary};
  border: 6px solid ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  z-index: 1;
  display: flex;
  gap: 24px;
  padding: 8px;
  padding-right: 32px;
  box-sizing: border-box;

  @media (max-width: 1350px) {
    left: 144px;
  }

  @media (max-width: 1250px) {
    left: 48px;
  }
`

export const BookWrapperShelf2 = styled.li`
  width: calc((100% - 72px) / 4);
  height: 100%;
  position: relative;
`

export const BookImageShelf2 = styled.img`
  width: auto;
  height: auto;
  max-height: 100%;
  border-radius: 8px;
`

export const BookPriceShelf2 = styled.span`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 8px 32px #00000066;
  border-radius: 16px;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-weight: 600;
`
export const ButtonCarouselShelf2 = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  right: -19px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  & svg {
    font-size: 28px;
    margin-left: 2px;

    & polyline {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`
