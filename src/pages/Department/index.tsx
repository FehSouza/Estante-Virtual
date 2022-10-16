import { useScrollToTop } from '../../Hooks'
import * as S from './styles'

export const Department = ({ category }: { category: string }) => {
  useScrollToTop(false, '#content')

  return <S.Department>Departamento: {category}</S.Department>
}
