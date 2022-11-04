import { useScrollToTop } from '../../hooks'
import * as S from './styles'

export const Department = ({ category }: { category: string }) => {
  useScrollToTop(false, 'html')

  return <S.Department>Departamento: {category}</S.Department>
}
