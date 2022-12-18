import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.modalDetailsShadow};
  display: flex;
  justify-content: flex-end;
  z-index: 4;
`

export const MiniCart = styled.div`
  width: 512px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 16px #00000060;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  width: 100%;
  height: 60px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.shadow};
  padding: 0 16px;
  box-sizing: border-box;
  position: relative;
`

export const BackButton = styled.button`
  position: absolute;
  top: 18.5px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  transition-duration: 350ms;

  & svg {
    transition-duration: 350ms;

    polyline {
      stroke: ${({ theme }) => theme.colors.text};
      transition-duration: 350ms;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textLight};

    & svg {
      transform: translateX(-4px);

      polyline {
        stroke: ${({ theme }) => theme.colors.textLight};
      }
    }
  }
`

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;

  & svg {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const EmptyBag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const EmptyBagText = styled.span`
  font-size: 20px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
`

export const EmptyBagButton = styled.button`
  margin-top: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  background-image: linear-gradient(
    100deg,
    ${({ theme }) => `${lighten(0.275, theme.colors.white)}, ${lighten(0.275, theme.colors.secondary)}`}
  );
  padding: 16px;
  border-radius: 24px;

  &:hover {
    background-image: linear-gradient(
      100deg,
      ${({ theme }) => `${lighten(0.255, theme.colors.white)}, ${lighten(0.255, theme.colors.secondary)}`}
    );
  }
`

export const Body = styled.div`
  width: 100%;
  flex: 1;
  padding: 0 16px;
  box-sizing: border-box;
  overflow-y: auto;
`

export const Footer = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 16px #00000060;
`
