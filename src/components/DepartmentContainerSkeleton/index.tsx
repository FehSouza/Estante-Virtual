import { MdFilterList } from 'react-icons/md'
import { DepartmentBookSkeleton } from '../DepartmentBookSkeleton'
import * as S from './styles'

export const DepartmentContainerSkeleton = () => {
  const repeat = [0, 1, 2, 3, 4, 5, 6]

  return (
    <S.Container>
      <S.Filter>
        <S.Title>
          <MdFilterList size={24} />
          Filtros
        </S.Title>

        <S.FilterTitle></S.FilterTitle>
        {repeat.map((key) => (
          <S.FilterName key={key} />
        ))}

        <S.FilterTitle></S.FilterTitle>
        {repeat.map((key) => (
          <S.FilterName key={key} />
        ))}
      </S.Filter>

      <S.BooksContainer>
        <DepartmentBookSkeleton />
      </S.BooksContainer>
    </S.Container>
  )
}
