import * as S from './styles'

export const DepartmentBookSkeleton = () => {
  const repeat = [0, 1, 2, 3]

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
