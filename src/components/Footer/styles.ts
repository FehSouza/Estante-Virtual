import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Footer = styled.footer`
  box-shadow: 0px -2px 10px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.white};
`

export const BenefitsBar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`

export const BenefitsBarWrapper = styled.div`
  max-width: 1440px;
  width: calc(100% - 32px);
  padding: 16px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`

export const BenefitWrapper = styled.div`
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
export const TextBenefit = styled.div`
  color: ${({ theme }) => theme.colors.white};
`

export const InstitutionalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0;
`

export const SocialNetworks = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 48px;
`
export const Link = styled.a`
  & svg {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.textLight};
    transition-duration: 350ms;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`

export const InstitutionalContent = styled.div`
  max-width: 1440px;
  width: calc(100% - 32px);
  padding: 0 16px;
  margin: 0 auto;
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
`

export const Institutional = styled.div`
  display: flex;
  flex-direction: column;
`

export const MyAccount = styled.div`
  display: flex;
  flex-direction: column;
`

export const Help = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleInstitutional = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: 10px;
`

export const TextInstitutional = styled(NavLink)`
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: 10px;
  transition-duration: 350ms;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
  }
`
