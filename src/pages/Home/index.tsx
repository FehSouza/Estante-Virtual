import useSWR from 'swr'
import imageMainBanner from '../../assets/images/young-girl-student.png'
import { CarouselFourSlides, CarouselThreeSlides, CarouselThreeSlidesBanner } from '../../components'
import { MOCK_OUR_SUGGESTIONS } from '../../mock'
import { getBestSellers, getBooksChildren } from '../../services'
import * as S from './styles'

export const Home = () => {
  const { data: booksBestSellers } = useSWR('api/best-sellers', getBestSellers)
  const { data: booksChildren } = useSWR('api/children', getBooksChildren)

  // useScrollToTop(false, '#content')

  return (
    <S.Container>
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

        <S.Shelf1>
          <S.ShelfTitle>Os livros mais populares</S.ShelfTitle>
          {!!booksBestSellers && <CarouselThreeSlidesBanner bookList={booksBestSellers} />}
        </S.Shelf1>

        <S.Shelf2>{!!booksChildren && <CarouselFourSlides bookList={booksChildren} />}</S.Shelf2>
      </S.MainBanner>

      <S.Shelf3>
        <S.ShelfTitle3>Nossas sugestões</S.ShelfTitle3>
        <CarouselThreeSlides bookList={MOCK_OUR_SUGGESTIONS} />
      </S.Shelf3>
    </S.Container>
  )
}
