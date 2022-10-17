import { useScrollToTop } from '../../Hooks'
import * as S from './styles'
import imageMainBanner from '../../assets/images/young-girl-student.png'
import { useEffect } from 'react'

export const Home = () => {
  useScrollToTop(false, '#content')

  useEffect(() => {

  }, [])

  return (
    <S.MainBanner>
      <S.Banner>
        <S.TextWrapper>
          <S.Title>Grandes descontos em livros infantis</S.Title>
          <S.Text>Descontos em livros infantis para todas as idades!</S.Text>
          <S.Button>Venha conferir</S.Button>
        </S.TextWrapper>

        <S.ImageWrapper>
          <img src={imageMainBanner} alt="Imagem de uma menina segurando uma pilha de livros" />
          <S.CircleInt />
          <S.CircleExt />
        </S.ImageWrapper>
      </S.Banner>

      <S.Shelf1></S.Shelf1>

      <S.Shelf2></S.Shelf2>
    </S.MainBanner>
  )
}
