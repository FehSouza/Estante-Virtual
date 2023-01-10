import { GrFormPrevious } from 'react-icons/gr'
import * as S from './styles'

export const PaginationSkeleton = () => {
  const repeat = new Array(5).fill(null).map((_, i) => i + 1)

  return (
    <S.PaginationWrapper>
      <S.ArrowPage>
        <GrFormPrevious size={26} />
      </S.ArrowPage>

      {repeat.map((page) => (
        <S.Page key={page}></S.Page>
      ))}

      <S.ArrowPage className="next">
        <GrFormPrevious size={26} />
      </S.ArrowPage>
    </S.PaginationWrapper>
  )
}
