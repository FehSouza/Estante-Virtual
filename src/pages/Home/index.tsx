import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import imageMainBanner from '../../assets/images/young-girl-student.png'
import { useScrollToTop } from '../../Hooks'
import { formatCurrency } from '../../utils/formatCurrency'
import * as S from './styles'

export const Home = () => {
  useScrollToTop(false, '#content')

  // const [bestSellers, setBestSellers] = useState([])

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
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
  ]

  const bookList = MOCK_BEST_SELLERS.filter((book) => {
    if (!book.volumeInfo.imageLinks || !book.saleInfo.listPrice) return false
    return true
  })

  const [slide1, setSlide1] = useState(0)
  const [slide2, setSlide2] = useState(1)
  const [slide3, setSlide3] = useState(2)
  const [initialCarousel, setInitialCarousel] = useState({ x: 56, opacity: 0 })
  const [exitCarousel, setExitCarousel] = useState({ x: -56, opacity: 0 })
  const lastItem = bookList.length - 1

  const handleNextCarousel = () => {
    slide3 === lastItem ? setSlide3(0) : setSlide3(slide3 + 1)
    slide2 === lastItem ? setSlide2(0) : setSlide2(slide2 + 1)
    slide1 === lastItem ? setSlide1(0) : setSlide1(slide1 + 1)
    setInitialCarousel({ x: 56, opacity: 0 })
    setExitCarousel({ x: -56, opacity: 0 })
  }

  const handlePrevCarousel = () => {
    slide1 === 0 ? setSlide1(lastItem) : setSlide1(slide1 - 1)
    slide2 === 0 ? setSlide2(lastItem) : setSlide2(slide2 - 1)
    slide3 === 0 ? setSlide3(lastItem) : setSlide3(slide3 - 1)
    setInitialCarousel({ x: -56, opacity: 0 })
    setExitCarousel({ x: 56, opacity: 0 })
  }

  const slidesToShow = [slide1, slide2, slide3]

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

        <S.ButtonCarousel className="button-prev" onClick={handlePrevCarousel}>
          <S.ButtonCarouselInt>
            <GrFormPrevious />
          </S.ButtonCarouselInt>
        </S.ButtonCarousel>

        <S.ShelfWrapper>
          <AnimatePresence>
            {slidesToShow.map((slide) => {
              return (
                <motion.div
                  key={bookList[slide].id}
                  initial={initialCarousel}
                  animate={{ x: 0, opacity: 1 }}
                  exit={exitCarousel}
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                >
                  <S.BookWrapper>
                    <S.ImagePriceWrapper>
                      <S.BookImage
                        alt={`Imagem da capa do livro "${bookList[slide].volumeInfo.title}"`}
                        src={bookList[slide].volumeInfo.imageLinks?.thumbnail}
                      />
                      <S.BookPrice>{formatCurrency(bookList[slide].saleInfo.listPrice?.amount || 0)}</S.BookPrice>
                    </S.ImagePriceWrapper>
                    <S.BookName>{bookList[slide].volumeInfo.title}</S.BookName>
                    <S.BookAuthor>{bookList[slide].volumeInfo.authors.join(' e ')}</S.BookAuthor>
                  </S.BookWrapper>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </S.ShelfWrapper>

        <S.ButtonCarousel onClick={handleNextCarousel}>
          <S.ButtonCarouselInt>
            <GrFormNext />
          </S.ButtonCarouselInt>
        </S.ButtonCarousel>
      </S.Shelf1>

      <S.Shelf2></S.Shelf2>
    </S.MainBanner>
  )
}
