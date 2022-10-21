import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import imageMainBanner from '../../assets/images/young-girl-student.png'
import { useScrollToTop } from '../../Hooks'
import { formatCurrency } from '../../utils/formatCurrency'
import * as S from './styles'

export interface ImageLinks {
  thumbnail: string
}

export interface VolumeInfo {
  imageLinks: ImageLinks
  title: string
  authors: string[]
}

export interface ListPrice {
  amount: number
}

export interface SaleInfo {
  listPrice: ListPrice
}

export interface BooksProps {
  id: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
}

export const Home = () => {
  useScrollToTop(false, '#content')

  // const [bestSellers, setBestSellers] = useState<BooksProps[]>([])

  // useEffect(() => {
  //   fetch('https://www.googleapis.com/books/v1/volumes?q=best-sellers&orderBy=relevance&printType=books')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((result) => {
  //       setBestSellers(result.items)
  //     })
  // }, [])

  const MOCK_BEST_SELLERS = [
    {
      id: '1',
      volumeInfo: {
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/content?id=AKJGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        title: 'É assim que acaba',
        authors: ['Colleen Hoover'],
      },
      saleInfo: {
        listPrice: {
          amount: 37.9,
        },
      },
    },
    {
      id: '2',
      volumeInfo: {
        title: 'É assim que acaba',
        authors: ['Colleen Hoover'],
      },
      saleInfo: {
        listPrice: {
          amount: 37.9,
        },
      },
    },
    {
      id: '3',
      volumeInfo: {
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/content?id=AKJGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        title: 'É assim que acaba',
        authors: ['Colleen Hoover'],
      },
      saleInfo: {},
    },
    {
      id: '4',
      volumeInfo: {
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/content?id=_5lEEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        title: 'Will',
        authors: ['Will Smith', 'Mark Manson'],
      },
      saleInfo: {
        listPrice: {
          amount: 39.9,
        },
      },
    },
    {
      id: '5',
      volumeInfo: {
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/content?id=iTz-ArpyOEEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        title: 'Extraordinário',
        authors: ['R.J.Palacio'],
      },
      saleInfo: {
        listPrice: {
          amount: 39.9,
        },
      },
    },
    {
      id: '6',
      volumeInfo: {
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/content?id=MwNlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        title: 'É assim que acaba',
        authors: ['Colleen Hoover'],
      },
      saleInfo: {
        listPrice: {
          amount: 37.9,
        },
      },
    },
    {
      id: '7',
      volumeInfo: {
        title: 'É assim que acaba',
        authors: ['Colleen Hoover'],
      },
      saleInfo: {
        listPrice: {
          amount: 37.9,
        },
      },
    },
    {
      id: '8',
      volumeInfo: {
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/content?id=AKJGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        title: 'É assim que acaba',
        authors: ['Colleen Hoover'],
      },
      saleInfo: {},
    },
    {
      id: '9',
      volumeInfo: {
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/content?id=99PsjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        title: 'Will',
        authors: ['Will Smith', 'Mark Manson'],
      },
      saleInfo: {
        listPrice: {
          amount: 39.9,
        },
      },
    },
    {
      id: '10',
      volumeInfo: {
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/content?id=7sWGCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        title: 'Extraordinário',
        authors: ['R.J.Palacio'],
      },
      saleInfo: {
        listPrice: {
          amount: 39.9,
        },
      },
    },
  ]

  const bookList = MOCK_BEST_SELLERS.filter((book) => {
    if (!book.volumeInfo.imageLinks || !book.saleInfo.listPrice) return false
    return true
  })

  const [countCarousel, setCountCarousel] = useState(0)
  const [prev, setPrev] = useState(countCarousel)
  const [slide1, setSlide1] = useState(0)
  const [slide2, setSlide2] = useState(1)
  const [slide3, setSlide3] = useState(2)

  const lastBook = bookList.length - 1

  let direction = 0

  if (prev === lastBook && countCarousel === 0) {
    direction = 1
  } else if ((prev === 0 && countCarousel === lastBook) || countCarousel < prev) {
    direction = -1
  } else {
    direction = 1
  }

  const handleNextCarousel = () => {
    setPrev(countCarousel)
    countCarousel === lastBook ? setCountCarousel(0) : setCountCarousel(countCarousel + 1)
    slide3 === lastBook ? setSlide3(0) : setSlide3(slide3 + 1)
    slide2 === lastBook ? setSlide2(0) : setSlide2(slide2 + 1)
    slide1 === lastBook ? setSlide1(0) : setSlide1(slide1 + 1)
  }

  const handlePrevCarousel = () => {
    setPrev(countCarousel)
    countCarousel === 0 ? setCountCarousel(lastBook) : setCountCarousel(countCarousel - 1)
    slide1 === 0 ? setSlide1(lastBook) : setSlide1(slide1 - 1)
    slide2 === 0 ? setSlide2(lastBook) : setSlide2(slide2 - 1)
    slide3 === 0 ? setSlide3(lastBook) : setSlide3(slide3 - 1)
  }

  const slidesToShow = [slide1, slide2, slide3]

  const variants = {
    enter: (direction: number) => ({ x: 220 * direction, opacity: 0, scale: 0.5 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction: number) => ({ x: -220 * direction, opacity: 0, scale: 0.5 }),
  }

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

      <S.Shelf1>
        <S.ShelfTitle>Os livros mais populares</S.ShelfTitle>

        <S.ButtonCarouselShelf1 className="button-prev" onClick={handlePrevCarousel}>
          <S.ButtonCarouselInt>
            <GrFormPrevious />
          </S.ButtonCarouselInt>
        </S.ButtonCarouselShelf1>

        <S.ShelfWrapper>
          <AnimatePresence custom={direction} mode="popLayout">
            {bookList.length &&
              slidesToShow.map((slide) => {
                return (
                  <motion.div
                    key={slide}
                    layoutId={bookList[slide].volumeInfo.imageLinks?.thumbnail}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 },
                    }}
                    variants={variants}
                    custom={direction}
                  >
                    <S.BookWrapperShelf1>
                      <S.ImagePriceWrapperShelf1>
                        <S.BookImageShelf1
                          alt={`Imagem da capa do livro "${bookList[slide].volumeInfo.title}"`}
                          src={bookList[slide].volumeInfo.imageLinks?.thumbnail}
                        />
                        <S.BookPriceShelf1>
                          {formatCurrency(bookList[slide].saleInfo.listPrice?.amount || 0)}
                        </S.BookPriceShelf1>
                      </S.ImagePriceWrapperShelf1>
                      <S.BookNameShelf1>{bookList[slide].volumeInfo.title}</S.BookNameShelf1>
                      <S.BookAuthorShelf1>{bookList[slide].volumeInfo.authors.join(' e ')}</S.BookAuthorShelf1>
                    </S.BookWrapperShelf1>
                  </motion.div>
                )
              })}
          </AnimatePresence>
        </S.ShelfWrapper>

        <S.ButtonCarouselShelf1 onClick={handleNextCarousel}>
          <S.ButtonCarouselInt>
            <GrFormNext />
          </S.ButtonCarouselInt>
        </S.ButtonCarouselShelf1>
      </S.Shelf1>

      <S.Shelf2>
        <S.BookWrapperShelf2>
          <S.BookImageShelf2
            alt={`Imagem da capa do livro "${bookList[0].volumeInfo.title}"`}
            src={bookList[0].volumeInfo.imageLinks?.thumbnail}
          />
          <S.BookPriceShelf2>{formatCurrency(bookList[0].saleInfo.listPrice?.amount || 0)}</S.BookPriceShelf2>
        </S.BookWrapperShelf2>
        <S.BookWrapperShelf2>
          <S.BookImageShelf2
            alt={`Imagem da capa do livro "${bookList[1].volumeInfo.title}"`}
            src={bookList[1].volumeInfo.imageLinks?.thumbnail}
          />
          <S.BookPriceShelf2>{formatCurrency(bookList[1].saleInfo.listPrice?.amount || 0)}</S.BookPriceShelf2>
        </S.BookWrapperShelf2>
        <S.BookWrapperShelf2>
          <S.BookImageShelf2
            alt={`Imagem da capa do livro "${bookList[2].volumeInfo.title}"`}
            src={bookList[2].volumeInfo.imageLinks?.thumbnail}
          />
          <S.BookPriceShelf2>{formatCurrency(bookList[2].saleInfo.listPrice?.amount || 0)}</S.BookPriceShelf2>
        </S.BookWrapperShelf2>
        <S.BookWrapperShelf2>
          <S.BookImageShelf2
            alt={`Imagem da capa do livro "${bookList[3].volumeInfo.title}"`}
            src={bookList[3].volumeInfo.imageLinks?.thumbnail}
          />
          <S.BookPriceShelf2>{formatCurrency(bookList[3].saleInfo.listPrice?.amount || 0)}</S.BookPriceShelf2>
        </S.BookWrapperShelf2>

        <S.ButtonCarouselShelf2>
          <GrFormNext />
        </S.ButtonCarouselShelf2>
      </S.Shelf2>
    </S.MainBanner>
  )
}
