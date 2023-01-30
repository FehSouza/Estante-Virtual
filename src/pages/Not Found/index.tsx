import * as S from './styles'

export const NotFound = () => {
  return (
    <S.NotFound>
      <S.Title>Oops, sentimos muito : (</S.Title>
      <S.Subtitle>Esta página não foi encontrada</S.Subtitle>

      <S.Error>404</S.Error>

      <S.Button to="/">Ir para a Home</S.Button>
    </S.NotFound>
  )
}
