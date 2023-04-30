import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import * as S from './styles'

export const CarouselSixSlidesSkeleton = () => {
  const repeat = new Array(6).fill(null).map((_, i) => i + 1)

  return (
    <>
      <S.ShelfWrapper>
        <S.ButtonCarousel title="Seta Anterior" aria-label="arrow-prev" className="button-prev">
          <S.ButtonCarouselInt>
            <GrFormPrevious />
          </S.ButtonCarouselInt>
        </S.ButtonCarousel>

        <S.ButtonCarousel title="Seta Próximo" aria-label="arrow-next">
          <S.ButtonCarouselInt>
            <GrFormNext />
          </S.ButtonCarouselInt>
        </S.ButtonCarousel>

        {repeat.map((key) => (
          <S.BookWrapper key={key}>
            <S.BookImage />
            <S.BookName />
            <S.BookAuthor />
          </S.BookWrapper>
        ))}
      </S.ShelfWrapper>
    </>
  )
}
