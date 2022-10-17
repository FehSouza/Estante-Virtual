import { lighten } from 'polished'
import styled from 'styled-components'

export const MainBanner = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: 146px;
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
  height: calc(100% - 66px);

  @media (max-width: 1350px) {
    padding-left: 80px;
  }

  @media (max-width: 1250px) {
    padding-left: 16px;
  }
`

export const Title = styled.h3`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

export const Text = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 40px;
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
  max-width: 55%;
  min-width: 50%;
  
  height: auto;
  overflow: hidden;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1250px) {
    margin-left: -80px;
  }
  
  & img {
    max-width: 100%;
    height: auto;
    margin-top: -32px;
    image-rendering: crisp-edges;
  }
`

export const CircleInt = styled.div`
  width: 448px;
  height: 448px;
  background-color: ${({ theme }) => theme.colors.bannerSecondary};
  border-radius: 100%;
  position: absolute;
  top: 37%;
  left: 48%;
  transform: translate(-50%, -50%);
  z-index: -1;
`

export const CircleExt = styled.div`
  width: 512px;
  height: 512px;
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
`

export const Shelf2 = styled.div`
  position: absolute;
  bottom: -76px;
  left: 160px;
  width: 482px;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.bannerPrimary};
  border: 6px solid ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  z-index: 1;

  @media (max-width: 1350px) {
    left: 144px;
  }

  @media (max-width: 1250px) {
    left: 48px;
  }
`
