import { BooksResponseProps } from '../../@types'
import { CardMiniCart } from '../../components'
import { useOrderForm } from '../../states'
import * as S from './styles'

export const CheckoutOrderSummary = () => {
  const [orderForm] = useOrderForm()

  return (
    <S.Container>
      {orderForm.map((item: BooksResponseProps) => {
        return <CardMiniCart item={item} key={item.id} />
      })}
    </S.Container>
  )
}
