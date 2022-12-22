import { useEffect, useState } from 'react'
import { GrFormPrevious } from 'react-icons/gr'
import { KeyedMutator } from 'swr'
import * as S from './styles'

const variants = { opened: { opacity: 1, zIndex: 2 }, closed: { opacity: 0, zIndex: -1 } } as const
const transition = { x: { type: 'just' }, duration: 0.35 } as const

interface PropsOrderBy {
  orderSelected: string[]
  setOrderSelected: React.Dispatch<React.SetStateAction<string[]>>
  mutate: KeyedMutator<any>
}

export const OrderBy = ({ orderSelected, setOrderSelected, mutate }: PropsOrderBy) => {
  const [showOrder, setShowOrder] = useState(false)
  const animate = showOrder ? 'opened' : 'closed'

  const handleCloseOrder = () => setShowOrder(false)

  const handleOpenCloseOrder = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    setShowOrder((prev) => !prev)
  }

  useEffect(() => {
    document.addEventListener('click', handleCloseOrder)
    return () => document.removeEventListener('click', handleCloseOrder)
  }, [])

  const handleSelectOrder = (parameter: string, name: string) => {
    setOrderSelected([parameter, name])
    handleCloseOrder()
    setTimeout(() => mutate(), 1)
  }

  return (
    <S.OrderWrapper>
      <S.OrderTitle>Ordenar por:</S.OrderTitle>
      <S.OrderSelector showOrder={showOrder} onClick={(e) => handleOpenCloseOrder(e)}>
        {orderSelected[1]}
        <GrFormPrevious size={23} />
      </S.OrderSelector>

      <S.OrderOptions variants={variants} transition={transition} animate={animate} initial={false}>
        <S.OrderOption onClick={() => handleSelectOrder('relevance', 'Mais vendidos')}>Mais vendidos</S.OrderOption>
        <S.OrderOption onClick={() => handleSelectOrder('newest', 'Mais recentes')}>Mais recentes</S.OrderOption>
      </S.OrderOptions>
    </S.OrderWrapper>
  )
}
