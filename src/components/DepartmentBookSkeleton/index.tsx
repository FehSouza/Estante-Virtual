import * as S from './styles'

export const DepartmentBookSkeleton = () => {
  const repeat = new Array(20).fill(null).map((_, i) => i + 1)

  return (
    <>
      {repeat.map((key) => (
        <S.BookWrapper key={key}>
          <S.ImageWrapper />
          <S.BookName />
          <S.BookAuthor />
          <S.BookPrice />
          <S.BookBestPrice />
          <S.ButtonBuy />
        </S.BookWrapper>
      ))}
    </>
  )
}
