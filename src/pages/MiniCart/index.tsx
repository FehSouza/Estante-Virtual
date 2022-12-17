import { motion } from 'framer-motion'
import { useState } from 'react'
import { BsHandbag } from 'react-icons/bs'
import { GrFormPrevious } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

export const MiniCart = () => {
  const navigate = useNavigate()
  const [quantityMiniCart, setQuantityMiniCart] = useState(0)

  const handleCloseMiniCart = () => navigate(-1)

  const stopCloseMiniCart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()

  return (
    <>
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
                <></>
              )}
            </S.Content>

            <S.Footer></S.Footer>
          </S.MiniCart>
        </motion.div>
      </S.Container>
    </>
  )
}
