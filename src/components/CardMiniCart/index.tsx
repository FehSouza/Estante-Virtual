import { MdDeleteForever, MdOutlineNoPhotography } from 'react-icons/md'
import { BooksResponseProps } from '../../@types'
import { formatCurrency, miniCartDelete, miniCartUpdate } from '../../utils'
import * as S from './styles'

interface PropsCardMiniCart {
  item: BooksResponseProps
}

export const CardMiniCart = ({ item }: PropsCardMiniCart) => {
  const imageBook = item.volumeInfo.imageLinks?.thumbnail
  const nameBook = item.volumeInfo.title
  const bookQuantity = Number(item.quantity)
  const bookPrice = item.saleInfo.listPrice?.amount ? item.saleInfo.listPrice?.amount * bookQuantity : 0
  const listPrice = bookPrice === 0 ? '' : formatCurrency(bookPrice)
  const bestPrice = bookPrice === 0 ? 'Grátis' : formatCurrency(Math.abs(bookPrice * 0.75))

  return (
    <S.ItemWrapper key={item.id}>
      <S.ImageWrapper to={`/produto/${item.id}`}>
        {imageBook ? <S.Image src={imageBook} /> : <MdOutlineNoPhotography size={24} />}
      </S.ImageWrapper>

      <S.InfoWrapper>
        <S.NameAndDelete>
          <S.Name to={`/produto/${item.id}`}>{nameBook}</S.Name>
          <S.ButtonDelete aria-label="button-delete" onClick={() => miniCartDelete(item.id)}>
            <MdDeleteForever size={24} />
          </S.ButtonDelete>
        </S.NameAndDelete>

        <S.PriceAndQuantity>
          <S.PriceWrapper>
            <S.ListPrice>{listPrice}</S.ListPrice>
            <S.BestPrice>{bestPrice}</S.BestPrice>
          </S.PriceWrapper>

          <S.QuantityWrapper>
            <S.ButtonQuantity
              aria-label="button-quantity-minus"
              onClick={() => {
                miniCartUpdate({ id: item.id, operator: 'minus' })
              }}
            >
              -
            </S.ButtonQuantity>
            <S.Quantity>{bookQuantity}</S.Quantity>
            <S.ButtonQuantity
              aria-label="button-quantity-plus"
              onClick={() => {
                miniCartUpdate({ id: item.id, operator: 'plus' })
              }}
            >
              +
            </S.ButtonQuantity>
          </S.QuantityWrapper>
        </S.PriceAndQuantity>
      </S.InfoWrapper>
    </S.ItemWrapper>
  )
}
