import { motion } from 'framer-motion'
import { BsHandbag } from 'react-icons/bs'
import { GrFormPrevious } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import { BooksResponseProps } from '../../@types'
import { CardMiniCart } from '../../components'
import { dispatchTotalsMiniCart, getTotalsMiniCart, useOrderFormSelect, useQuantityMiniCart } from '../../states'
import { formatCurrency } from '../../utils'
import { miniCartTotals } from '../../utils/miniCartTotals'
import * as S from './styles'

export const MiniCart = () => {
  const navigate = useNavigate()

  const orderForm = useOrderFormSelect()
  const [quantityMiniCart] = useQuantityMiniCart()

  const handleCloseMiniCart = () => navigate(-1)

  const stopCloseMiniCart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()

  const totals = miniCartTotals(orderForm)

  dispatchTotalsMiniCart({ subTotal: totals.subTotalMiniCart, discount: totals.discountMiniCart, total: totals.totalMiniCart })

  const stateTotals = getTotalsMiniCart()

  return (
    <S.Container onClick={handleCloseMiniCart}>
      <motion.div
        initial={{ x: 512, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 512, opacity: 0 }}
        transition={{ x: { type: 'just' } }}
      >
        <S.MiniCart onClick={stopCloseMiniCart}>
          <S.Header>
            <S.BackButton onClick={handleCloseMiniCart}>
              <GrFormPrevious size={23} />
              Voltar
            </S.BackButton>

            <S.Title>
              <BsHandbag size={20} />
              Minha Sacola
            </S.Title>
          </S.Header>

          <S.Content>
            {quantityMiniCart === 0 ? (
              <S.EmptyBag>
                <S.EmptyBagText>Seu carrinho está vazio :(</S.EmptyBagText>
                <S.EmptyBagButton onClick={handleCloseMiniCart}>Continuar comprando</S.EmptyBagButton>
              </S.EmptyBag>
            ) : (
              <>
                <S.Body>
                  {orderForm.map((item: BooksResponseProps) => {
                    return <CardMiniCart item={item} key={item.id} />
                  })}
                </S.Body>

                <S.Footer>
                  <S.PriceFooter>
                    <S.PriceTitle>Subtotal</S.PriceTitle>
                    <S.SubTotal>{formatCurrency(stateTotals.subTotal)}</S.SubTotal>
                  </S.PriceFooter>

                  <S.PriceFooter>
                    <S.PriceTitle>Descontos</S.PriceTitle>
                    <S.Discounts>{`- ${formatCurrency(stateTotals.discount)}`}</S.Discounts>
                  </S.PriceFooter>

                  <S.PriceFooter>
                    <S.PriceTitle className="price-title-total">Total</S.PriceTitle>
                    <S.Total>{formatCurrency(stateTotals.total)}</S.Total>
                  </S.PriceFooter>
                  <S.KeepBuyingButton onClick={handleCloseMiniCart}>Continuar comprando</S.KeepBuyingButton>
                  <S.CheckoutButton to="/checkout">Finalizar compra</S.CheckoutButton>
                </S.Footer>
              </>
            )}
          </S.Content>
        </S.MiniCart>
      </motion.div>
    </S.Container>
  )
}
