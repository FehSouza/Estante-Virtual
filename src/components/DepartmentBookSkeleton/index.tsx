import * as S from './styles'

export const DepartmentBookSkeleton = () => {
  const repeat = [0, 1, 2, 3, 4, 5, 6, 7]

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
