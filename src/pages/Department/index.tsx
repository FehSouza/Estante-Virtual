import { useParams } from 'react-router-dom'
import * as S from './styles'

const dictionary = {
  'ficcao-cientifica': 'Ficção Científica'
}

export const Department = () => {
  const params = useParams<{departmentName: keyof typeof dictionary}>()

  return <S.Department>Department: {params.departmentName ? dictionary[params.departmentName]?? params.departmentName : 'livros'}</S.Department>
}
