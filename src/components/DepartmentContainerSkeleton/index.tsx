import { MdFilterList } from 'react-icons/md'
import { DepartmentBookSkeleton } from '../DepartmentBookSkeleton'
import * as S from './styles'

export const DepartmentContainerSkeleton = () => {
  const repeat = new Array(10).fill(null).map((_, i) => i + 1)

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
