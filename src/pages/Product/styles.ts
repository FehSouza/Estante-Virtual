import { motion } from 'framer-motion'
import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  margin: 0 auto;
  max-width: 1440px;
  width: calc(100% - 32px);
  padding: 0 16px;
`

export const ProductInfo = styled.div`
  margin-top: 68px;
  display: flex;
`

export const ProductLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 36%;
  padding-right: 48px;
  box-sizing: border-box;
`

export const BookName = styled.h2`
  font-size: 34px;
  font-weight: 600;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.text};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const BookAuthors = styled.span`
  margin-top: 24px;
  font-size: 22px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.textLight};
  position: relative;
  width: fit-content;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  text-decoration: underline;
  text-underline-offset: 6px;
`

export const BookPrice = styled.span`
  margin-top: 32px;
  font-size: 34px;
  font-weight: 600;
  line-height: 34px;
  color: ${({ theme }) => theme.colors.text};
`

export const DescriptionWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 186px;
`

export const BookDescription = styled(motion.p)`
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text};
  padding-right: 8px;

  & b,
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.text};
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.white};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background-color: ${({ theme }) => lighten(0.1, theme.colors.textLight)};
    border: none;
  }
`

export const ButtonSeeMore = styled(motion.button)`
  margin-top: 6px;
  width: 28px;
  height: 28px;

  & svg > polyline {
    stroke: ${({ theme }) => theme.colors.text};
    transition-duration: 350ms;
  }

  &:hover {
    & svg {
      transform: translateX(2px);

      polyline {
        stroke: ${({ theme }) => theme.colors.textLight};
      }
    }
  }
`

export const ButtonSeeDetails = styled.button`
  margin: 0 auto;
  margin-top: 12px;
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.textLight};
  position: relative;
  width: fit-content;
  transition-duration: 350ms;

  &::before {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.textLight};
    position: absolute;
    bottom: -4px;
    left: 0;
  }

  &:hover {
    color: ${({ theme }) => lighten(0.12, theme.colors.textLight)};

    &::before {
      background-color: ${({ theme }) => lighten(0.12, theme.colors.textLight)};
    }
  }
`

export const ProductCenter = styled.div`
  width: 32%;
  padding: 0 30px;
  box-sizing: border-box;
  border-left: 1px solid ${({ theme }) => theme.colors.shadow};
  border-right: 1px solid ${({ theme }) => theme.colors.shadow};
  display: flex;
  align-items: center;
`

export const BookImage = styled.img`
  width: 100%;
  border-radius: 20px;
`

export const ProductRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 36%;
  padding-left: 48px;
  box-sizing: border-box;
`

export const ReadTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.text};
`

export const ButtonOptions = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 8px;
  width: 100%;
`

export const ButtonRead = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  height: 52px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 16px;
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.text};
  transition-duration: 350ms;

  & svg {
    margin-top: -3px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.shadow};
  }
`

export const ListPriceWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-top: auto;
`
export const DiscountWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 20px;
`

export const BestPriceWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  padding-top: 40px;
  border-top: 1px dashed ${({ theme }) => theme.colors.shadow};
`

export const PriceWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export const PriceTitle = styled.span`
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.text};
`

export const ListPrice = styled.span`
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.text};
`

export const Discount = styled.span`
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.primary};
`

export const BestPrice = styled.span`
  margin-top: 16px;
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.primary};
`

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const QuantityButton = styled.button`
  transform: rotate(90deg);
  width: 32px;
  height: 32px;
  padding-top: 16px;

  & svg > polyline {
    stroke: ${({ theme }) => theme.colors.text};
    transition-duration: 350ms;
  }

  &:hover {
    & svg {
      transform: translateX(2px);

      polyline {
        stroke: ${({ theme }) => theme.colors.textLight};
      }
    }
  }

  &:disabled {
    polyline {
      stroke: ${({ theme }) => theme.colors.textLight};
    }

    &:hover {
      cursor: not-allowed;

      & svg {
        transform: translateX(0px);
      }
    }
  }

  &.button-plus {
    transform: rotate(270deg);
  }
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 24px;
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
`

export const QuantityInput = styled.input`
  width: 51px;
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.text};
  text-align: right;
  padding-right: 10px;
  box-sizing: border-box;
`

export const TextInput = styled.span`
  width: 51px;
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 2px;
`

export const ButtonsWrapper = styled.section`
  margin-top: 20px;
  display: flex;
  gap: 16px;
`

export const ButtonAddFavorites = styled.button`
  width: 72px;
  height: 72px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 350ms;

  & svg {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    opacity: 0.75;
  }
`

export const ButtonAddBag = styled.button`
  height: 72px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.white};
  transition-duration: 350ms;

  & svg {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

export const ButtonAddWishlist = styled.button`
  margin-top: 20px;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  line-height: 16px;
  text-decoration: underline;
  position: relative;
  transition-duration: 350ms;

  &:hover {
    opacity: 0.75;
  }

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => `linear-gradient(to left, ${theme.colors.grey}, ${theme.colors.shadow}, ${theme.colors.grey})`};
  }
`

export const Hr = styled.hr`
  height: 1px;
  width: calc(100% + 64px);
  background-color: ${({ theme }) => theme.colors.shadow};
  border: none;
  margin: 0;
  margin-top: 80px;
  margin-left: -32px;
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

export const DetailsWrapper = styled.div`
  margin-top: 96px;
`

export const DetailsTitle = styled.div`
  margin-top: 80px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
  font-weight: 600;
`
