import * as S from './styles'

interface BookInformationProps {
  titles: string[]
  values: string[]
  fontSize: number
}

export const BookInformation = ({ titles, values, fontSize }: BookInformationProps) => {
  return (
    <S.InfoBookWrapper>
      {titles.map((title, i) => {
        if (values[i] === 'undefined') return null

        return (
          <S.InfoWrapper key={title} size={fontSize}>
            <S.InfoTitle size={fontSize}>{title}</S.InfoTitle>
            <S.Info size={fontSize}>{values[i]}</S.Info>
          </S.InfoWrapper>
        )
      })}
    </S.InfoBookWrapper>
  )
}
