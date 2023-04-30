import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  overflow-y: visible;
  overflow-x: clip;
`

export const MainBanner = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: 96px;
`

export const Banner1 = styled.div`
  width: 67%;
  max-height: 720px;
  background-color: ${({ theme }) => theme.colors.bannerPrimary};
  display: flex;
  justify-content: space-between;
`

export const TextBannerWrapper = styled.div`
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

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  z-index: 2;

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

export const Button = styled.button`
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
  width: 532px;
  height: 720px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`

export const Image = styled.img`
  width: 532px;
  max-width: 100%;
  height: auto;
  margin-top: -32px;
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

export const BannerShelf1 = styled.div`
  width: 33%;
  background-color: ${({ theme }) => theme.colors.bannerSecondary};
  z-index: 1;
  position: relative;
  overflow: hidden;
`

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
`

export const ShelfTitleBanner = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
  font-weight: 600;
  padding: 56px 0 0 56px;
`

export const ButtonSeeMore = styled.button`
  margin-left: 32px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 400;
  transition-duration: 350ms;

  &:hover {
    text-decoration: underline;
  }
`

export const BannerShelf2 = styled.div`
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
  padding: 6px;
  padding-right: 32px;
  box-sizing: border-box;

  & > div {
    width: calc((100% - 72px) / 4);
  }

  @media (max-width: 1350px) {
    left: 144px;
  }

  @media (max-width: 1250px) {
    left: 48px;
  }
`

export const ShelfModel1 = styled.div`
  max-width: calc(((100% - 1440px) / 2) + 1440px);
  padding-left: calc((100% - 1440px - 32px + 32px) / 2);
  position: relative;
  margin-top: 96px;

  @media (max-width: 1480px) {
    padding-left: 16px;
  }
`

export const ShelfTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
  font-weight: 600;
`

export const ShelfModel2 = styled.div`
  max-width: 1440px;
  width: calc(100% - 32px);
  padding: 0 16px;
  margin: 0 auto;
  margin-top: 96px;
`

export const Banner2 = styled.div`
  display: flex;
  max-width: 1440px;
  width: calc(100% - 32px);
  padding: 0 16px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 96px;
  background-color: ${({ theme }) => theme.colors.bannerSecondary};
  border-radius: 20px;
`

export const TextBanner2Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px;
  padding-right: 0;
  position: relative;

  &::before {
    content: '';
    width: 80px;
    height: 80px;
    background-color: ${({ theme }) => lighten(-0.07, theme.colors.bannerSecondary)};
    border-radius: 100%;
    position: absolute;
    top: 40px;
    left: 40px;
    z-index: 1;
  }
`

export const ImageBanner2Wrapper = styled.div`
  width: 50%;
  min-width: 50%;
  position: relative;

  &::before {
    content: '';
    width: 272px;
    height: 272px;
    background-color: ${({ theme }) => lighten(-0.07, theme.colors.bannerSecondary)};
    border-radius: 100%;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`

export const ImageBanner2 = styled.img`
  position: absolute;
  bottom: 0;
  right: -80px;
  width: 100%;
  z-index: 2;
`

export const Citation = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 40px;
  font-style: italic;

  @media (max-width: 1250px) {
    font-size: 16px;
  }
`

export const ShelfAuthors = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  margin-top: 48px;
`

export const AuthorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 20px;
  transition-duration: 350ms;
  box-shadow: 12px 12px 24px #00000026;
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    cursor: pointer;
    transform: scale(1.02);

    & button {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`

export const AuthorImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AuthorImage = styled.img`
  margin-top: 62px;
  width: 220px;
  height: auto;
`

export const AuthorName = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  line-height: 24px;
`

export const AuthorDescription = styled.span`
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
`
export const ReadMoreButton = styled.button`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  transition-duration: 350ms;
`
