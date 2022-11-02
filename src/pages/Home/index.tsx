import useSWR from 'swr'
import imageMainBanner from '../../assets/images/young-girl-student.png'
import { CarouselFourSlides, CarouselSixSlides, CarouselThreeSlides, CarouselThreeSlidesBanner } from '../../components'
import { MOCK_OUR_SUGGESTIONS } from '../../mock'
import { getBestSellers, getBestSellersAction, getBestSellersPoliceRomance, getBooksChildren } from '../../services'
import * as S from './styles'

export const Home = () => {
  const { data: booksBestSellers } = useSWR('api/best-sellers', getBestSellers)
  const { data: booksChildren } = useSWR('api/children', getBooksChildren)
  const { data: booksBestSellersAction } = useSWR('api/best-sellers-action', getBestSellersAction)
  const { data: booksBestSellersPoliceRomance } = useSWR('api/best-sellers-police-romance', getBestSellersPoliceRomance)

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
            <S.ImageBanner src={imageMainBanner} alt="Imagem de uma menina segurando uma pilha de livros" />
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
        <S.ShelvesTitle>Nossas sugestões</S.ShelvesTitle>
        <CarouselThreeSlides bookList={MOCK_OUR_SUGGESTIONS} />
      </S.Shelf3>

      <S.Shelf4>
        <S.WrapperTitle>
          <S.ShelvesTitle>Os Populares de Ação</S.ShelvesTitle>
          <S.ButtonSeeMore>Ver todos</S.ButtonSeeMore>
        </S.WrapperTitle>
        {!!booksBestSellersAction && <CarouselSixSlides bookList={booksBestSellersAction} />}
      </S.Shelf4>

      <S.Shelf4>
        <S.WrapperTitle>
          <S.ShelvesTitle>Os Populares de Romance Policial</S.ShelvesTitle>
          <S.ButtonSeeMore>Ver todos</S.ButtonSeeMore>
        </S.WrapperTitle>
        {!!booksBestSellersPoliceRomance && <CarouselSixSlides bookList={booksBestSellersPoliceRomance} />}
      </S.Shelf4>
    </S.Container>
  )
}
