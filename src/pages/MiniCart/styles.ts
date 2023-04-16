import { lighten } from 'polished'
import { NavLink } from 'react-router-dom'
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
  height: calc(100% - 60px);
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
  border-radius: 16px;

  &:hover {
    background-image: linear-gradient(
      100deg,
      ${({ theme }) => `${lighten(0.255, theme.colors.white)}, ${lighten(0.255, theme.colors.secondary)}`}
    );
  }
`

export const Body = styled.div`
  width: 100%;
  max-height: calc(100% - 256px);
  flex: 1;
  padding: 0 16px;
  box-sizing: border-box;
  overflow-y: auto;
`

export const Footer = styled.div`
  width: 100%;
  height: 256px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 16px #00000060;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const PriceFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: 12px;
  }
`

export const PriceTitle = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;

  &.price-title-total {
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    font-weight: 500;
  }
`

export const SubTotal = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
`

export const Discounts = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
`

export const Total = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: 500;
`

export const KeepBuyingButton = styled.button`
  margin-top: auto;
  height: 48px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 16px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 350ms;

  &:hover {
    background-image: linear-gradient(
      100deg,
      ${({ theme }) => `${lighten(0.255, theme.colors.white)}, ${lighten(0.255, theme.colors.secondary)}`}
    );
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`
export const CheckoutButton = styled(NavLink)`
  margin-top: 16px;
  height: 48px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`
