import { motion } from 'framer-motion'
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

export const Title = styled.h3`
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
`

export const Image = styled.img`
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
  justify-content: space-between;
  align-items: center;
`

export const ShelfTitleBanner = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
  font-weight: 600;
  padding: 56px 0 0 56px;
`

export const ButtonSeeMore = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  background-image: linear-gradient(
    100deg,
    ${({ theme }) => `${lighten(0.275, theme.colors.primary)}, ${lighten(0.275, theme.colors.secondary)}`}
  );
  padding: 16px 24px;
  border-radius: 24px;
  transition-duration: 350ms;

  &:hover {
    background-image: ${({ theme }) =>
      `linear-gradient(100deg, ${lighten(0.225, theme.colors.primary)}, ${lighten(0.225, theme.colors.secondary)})`};
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
