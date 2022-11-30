import { AnimatePresence, motion } from 'framer-motion'
import { BsHandbag } from 'react-icons/bs'
import { GrFormPrevious } from 'react-icons/gr'
import { dispatchShowMiniCart, useShowMiniCartSelect } from '../../states'
import * as S from './styles'

export const MiniCart = () => {
  const showMiniCart = useShowMiniCartSelect()

  const handleCloseMiniCart = () => dispatchShowMiniCart(false)
  const stopCloseMiniCart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()

  return (
    <>
      <AnimatePresence>
        {showMiniCart && (
          <S.Container onClick={handleCloseMiniCart}>
            <motion.div
              initial={{ x: 585, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 585, opacity: 0 }}
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

                <S.Content></S.Content>

                <S.Footer></S.Footer>
              </S.MiniCart>
            </motion.div>
          </S.Container>
        )}
      </AnimatePresence>
    </>
  )
}
