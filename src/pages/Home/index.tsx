import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import imageBanner from '../../assets/images/young-girl-student-2.png'
import imageMainBanner from '../../assets/images/young-girl-student.png'
import { BannerHomeCarousel1, BannerHomeCarousel2, CarouselSixSlides, CarouselThreeSlides } from '../../components'
import { MOCK_AUTHORS, MOCK_OUR_SUGGESTIONS } from '../../mock'
import {
  getBestSellers,
  getBestSellersAction,
  getBestSellersHorror,
  getBestSellersPoetry,
  getBestSellersPoliceRomance,
  getBestSellersSelfHelp,
  getBooksChildren,
} from '../../services'
import * as S from './styles'

export const Home = () => {
  const navigate = useNavigate()

  const { data: booksBestSellers } = useSWR('api/best-sellers', getBestSellers)
  const { data: booksChildren } = useSWR('api/best-sellers-infantis', getBooksChildren)
  const { data: booksBestSellersAction } = useSWR('api/best-sellers-de-ação', getBestSellersAction)
  const { data: booksBestSellersPoliceRomance } = useSWR('api/best-sellers-de-romance-policial', getBestSellersPoliceRomance)
  const { data: booksBestSellersHorror } = useSWR('api/best-sellers-horror', getBestSellersHorror)
  const { data: booksBestSellersPoetry } = useSWR('api/best-sellers-de-poesia', getBestSellersPoetry)
  const { data: booksBestSellersSelfHelp } = useSWR('api/best-sellers-self-help', getBestSellersSelfHelp)

  const handleNavigateDepartment = (category: string) => navigate(`/livros/${category}`)

  return (
    <S.Container>
      <S.MainBanner>
        <S.Banner1>
          <S.TextBannerWrapper>
            <S.Title>Grandes descontos em livros infantis</S.Title>
            <S.Text>Descontos em livros infantis para todas as idades!</S.Text>
            <S.Button onClick={() => handleNavigateDepartment('livros-infantis')}>Venha conferir</S.Button>
          </S.TextBannerWrapper>

          <S.ImageWrapper>
            <link rel="preload" href={imageMainBanner} as="image" />
            <S.Image src={imageMainBanner} alt="Imagem de uma menina segurando uma pilha de livros" />
            <S.CircleInt />
            <S.CircleExt />
          </S.ImageWrapper>
        </S.Banner1>

        <S.BannerShelf1>
          <S.ShelfTitleBanner>Os livros mais populares</S.ShelfTitleBanner>
          {!!booksBestSellers && <BannerHomeCarousel1 bookList={booksBestSellers} />}
        </S.BannerShelf1>

        <S.BannerShelf2>{!!booksChildren && <BannerHomeCarousel2 bookList={booksChildren} />}</S.BannerShelf2>
      </S.MainBanner>

      <S.ShelfModel1>
        <S.ShelfTitle>Nossas sugestões</S.ShelfTitle>
        <CarouselThreeSlides bookList={MOCK_OUR_SUGGESTIONS} />
      </S.ShelfModel1>

      <S.ShelfModel2>
        <S.WrapperTitle>
          <S.ShelfTitle>Os Populares de Ação</S.ShelfTitle>
          <S.ButtonSeeMore onClick={() => handleNavigateDepartment('livros-de-acao')}>Clique aqui e veja todos!</S.ButtonSeeMore>
        </S.WrapperTitle>
        {!!booksBestSellersAction && <CarouselSixSlides bookList={booksBestSellersAction} />}
      </S.ShelfModel2>

      <S.ShelfModel2>
        <S.WrapperTitle>
          <S.ShelfTitle>Os Populares de Romance Policial</S.ShelfTitle>
          <S.ButtonSeeMore onClick={() => handleNavigateDepartment('livros-romance-policial')}>Clique aqui e veja todos!</S.ButtonSeeMore>
        </S.WrapperTitle>
        {!!booksBestSellersPoliceRomance && <CarouselSixSlides bookList={booksBestSellersPoliceRomance} />}
      </S.ShelfModel2>

      <S.ShelfModel1>
        <S.ShelfTitle>Os Populares de Terror</S.ShelfTitle>
        {!!booksBestSellersHorror && <CarouselThreeSlides bookList={booksBestSellersHorror} />}
      </S.ShelfModel1>

      <S.Banner2>
        <S.TextBanner2Wrapper>
          <S.Title>Comece a explorar agora para ler os clássicos mundiais!</S.Title>
          <S.Citation>
            “Clássica é a obra que tem dimensão universal: consegue atravessar gerações, fronteiras e nacionalidades, sem perder as suas
            características.” - Renato Rocha
          </S.Citation>
          <S.Button onClick={() => handleNavigateDepartment('best-sellers')}>Ver todos</S.Button>
        </S.TextBanner2Wrapper>
        <S.ImageBanner2Wrapper>
          <S.ImageBanner2 src={imageBanner} alt="Imagem de uma menina segurando uma pilha de livros"></S.ImageBanner2>
        </S.ImageBanner2Wrapper>
      </S.Banner2>

      <S.ShelfModel2>
        <S.WrapperTitle>
          <S.ShelfTitle>Os Populares de Poesia</S.ShelfTitle>
          <S.ButtonSeeMore onClick={() => handleNavigateDepartment('livros-de-poesia')}>Clique aqui e veja todos!</S.ButtonSeeMore>
        </S.WrapperTitle>
        {!!booksBestSellersPoetry && <CarouselSixSlides bookList={booksBestSellersPoetry} />}
      </S.ShelfModel2>

      <S.ShelfModel1>
        <S.ShelfTitle>Os Populares de Auto Ajuda</S.ShelfTitle>
        {!!booksBestSellersSelfHelp && <CarouselThreeSlides bookList={booksBestSellersSelfHelp} />}
      </S.ShelfModel1>

      <S.ShelfModel2>
        <S.ShelfTitle>Autores populares</S.ShelfTitle>
        <S.ShelfAuthors>
          {MOCK_AUTHORS.map((author) => (
            <S.AuthorWrapper key={author.name}>
              <S.AuthorImageWrapper>
                <S.AuthorImage src={author.image} alt={`Foto de ${author.name}`} />
              </S.AuthorImageWrapper>
              <S.AuthorName>{author.name}</S.AuthorName>
              <S.AuthorDescription>{author.description}</S.AuthorDescription>
              <S.ReadMoreButton>Leia mais</S.ReadMoreButton>
            </S.AuthorWrapper>
          ))}
        </S.ShelfAuthors>
      </S.ShelfModel2>
    </S.Container>
  )
}
