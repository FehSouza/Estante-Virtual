import imageMainBanner from '../../assets/images/young-girl-student.png'
import { CarouselFourSlides, CarouselThreeSlides, CarouselThreeSlidesBanner } from '../../components'
import { useScrollToTop } from '../../Hooks'
import * as S from './styles'

export interface ImageLinks {
  thumbnail: string
}

export interface VolumeInfo {
  imageLinks?: ImageLinks
  title: string
  authors: string[]
  description?: string
}

export interface ListPrice {
  amount: number
}

export interface SaleInfo {
  listPrice?: ListPrice
}

export interface BooksProps {
  id: string
  color?: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
}

export const Home = () => {
  useScrollToTop(false, '#content')

  // const [bestSellers, setBestSellers] = useState<BooksProps[]>([])
  // const [children, setChildren] = useState<BooksProps[]>([])
  // const [ourSuggestions, setOurSuggestions] = useState<BooksProps[]>([])

  // useEffect(() => {
  //   fetch('https://www.googleapis.com/books/v1/volumes?q=best-sellers&orderBy=relevance&printType=books')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((result) => {
  //       setBestSellers(result.items)
  //     })

  //   fetch('https://www.googleapis.com/books/v1/volumes?q=livros-para-crianças&orderBy=relevance&printType=books')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((result) => {
  //       setChildren(result.items)
  //     })

  //   fetch('https://www.googleapis.com/books/v1/volumes/PDcQCwAAQBAJ')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((result) => {
  //       setOurSuggestions(result.items)
  //     })

  //   fetch('https://www.googleapis.com/books/v1/volumes/hjcQCwAAQBAJ')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((result) => {
  //       setOurSuggestions([...ourSuggestions, result.items])
  //     })

  //   fetch('https://www.googleapis.com/books/v1/volumes/qDYQCwAAQBAJ')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((result) => {
  //       setOurSuggestions([...ourSuggestions, result.items])
  //     })

  //   fetch('https://www.googleapis.com/books/v1/volumes/ZDgQCwAAQBAJ')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((result) => {
  //       setOurSuggestions([...ourSuggestions, result.items])
  //     })

  //   fetch('https://www.googleapis.com/books/v1/volumes/9TcQCwAAQBAJ')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((result) => {
  //       setOurSuggestions([...ourSuggestions, result.items])
  //     })

  //   fetch('https://www.googleapis.com/books/v1/volumes/yjUQCwAAQBAJ')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((result) => {
  //       setOurSuggestions([...ourSuggestions, result.items])
  //     })

  //   fetch('https://www.googleapis.com/books/v1/volumes/-DgQCwAAQBAJ')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((result) => {
  //       setOurSuggestions([...ourSuggestions, result.items])
  //     })
  // }, [])

  const MOCK_BOOKS: BooksProps[] = [
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

  const MOCK_OUR_SUGGESTIONS: BooksProps[] = [
    {
      id: 'PDcQCwAAQBAJ',
      color: '#f90100',
      volumeInfo: {
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/publisher/content?id=PDcQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72CxWBLJ5SkfVo8ase0NJ54rilNZTPmFV3cl2o8Zdnz2bs52KGnANvMbXkpcrrIFdFynJECD-RQceesGYDihMCAqUix-vakW74wnXhUhbyYsgVmh3gFG3Qo6FHmXvbUury27w_N&source=gbs_api',
        },
        title: 'Harry Potter e a Pedra Filosofal',
        authors: ['J.K. Rowling'],
        description:
          '<p>Harry Potter não é um herói habitual. É apenas um miúdo magricela, míope e desajeitado com uma estranha cicatriz na testa. Estranha, de facto, porque afinal encerra misteriosos poderes que o distinguem do cinzento mundo dos muggles (os complicados humanos) e que irá fazer dele uma criança especialmente dotada para o universo da magia. Admitido na escola de Hogwarts onde se formam os mais famosos feiticeiros do mundo, Harry Potter irá viver todas as aventuras que a sua imaginação lhe irá proporcionar.</p>',
      },
      saleInfo: {
        listPrice: {
          amount: 37.9,
        },
      },
    },
    {
      id: 'hjcQCwAAQBAJ',
      color: '#52a3d9',
      volumeInfo: {
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/publisher/content?id=hjcQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71I9IcediD2xl7tXjesvgQSgog1jQZKwnOg9qgtNmaIkgZoRnU-_izod_LZlWNrTNSfnA8fBRkhVXUYA_kzVcyNDd33XWm0LanIzDaotC8QJXC7Oz_qwM099Nn0VDqpdxpqPfNE&source=gbs_api',
        },
        title: 'Harry Potter e a Câmara Secreta',
        authors: ['J.K. Rowling'],
        description:
          "<p>Há uma trama, Harry Potter. Uma trama para fazer coisas terríveis acontecerem na Escola de Magia e Bruxaria de Hogwarts este ano.'<br><br>O verão de Harry Potter incluiu o pior aniversário de todos, avisos macabros de um elfo doméstico chamado Dobby, e ser resgatado dos Dursleys por seu amigo Rony Weasley em um carro voador mágico! De volta à Escola de Magia e Bruxaria de Hogwarts para seu segundo ano, Harry ouve estranhos sussurros ecoando pelos corredores vazios - e então, os ataques começam! Estudantes são encontrados transformados em pedra... As previsões sinistras de Dobby parecem estar se tornando realidade.</p>",
      },
      saleInfo: {
        listPrice: {
          amount: 24.9,
        },
      },
    },
    {
      id: 'qDYQCwAAQBAJ',
      color: '#53327e',
      volumeInfo: {
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/publisher/content?id=qDYQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE738-JbDBeO5_Fs3geWuGlTh5juhWxPPS5nPsvBSkkgPlxe6LmqRa9YiHM_KbR0qieHiPlNScO9fN1if93lx0OL82GP9vT0xiqUV0Ij4QgwwRerU3bX65FKPXg-rRUjWrEq0u0iV&source=gbs_api',
        },
        title: 'Harry Potter e o prisioneiro de Azkaban',
        authors: ['J.K. Rowling'],
        description:
          "<p>Bem-vindo ao ônibus Nôitibus Andante, o transporte de emergência para bruxos e bruxas perdidos. Basta esticar a mão da varinha, subir a bordo e podemos levá-lo aonde quiser.'<br><br>Quando o ônibus Nôitibus Andante surge repentinamente da escuridão e solta um guincho de seu freio bem à sua frente, mais um ano nada normal em Hogwarts começa para Harry Potter. Sirius Black, assassino em série fugitivo e seguidor do Lorde Voldemort, está à solta - e dizem que está indo atrás de Harry. Em sua primeira aula de Adivinhação, a professora Trelawney vê um agouro de morte nas folhas do chá de Harry... Mas talvez a parte mais assustadora seja os Dementadores patrulhando os pátios da escola, com seus beijos que sugam a alma...</p>",
      },
      saleInfo: {
        listPrice: {
          amount: 24.9,
        },
      },
    },
    {
      id: 'ZDgQCwAAQBAJ',
      color: '#1d999b',
      volumeInfo: {
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/publisher/content?id=ZDgQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70lh1TUc47g9URc4jO-PLk8wjPgBYOAhX00rL_18xL7DTjlq2pysneefcaUYiInXW47UHbiLcVvde8x6STPzjVTZNlTi4ZpXvdDkR3GZ5B5PDq6GJCWxyZPGntyXRkwl85g72Bz&source=gbs_api',
        },
        title: 'Harry Potter e o Cálice de Fogo',
        authors: ['J.K. Rowling'],
        description:
          "<p>Haverá três tarefas, espaçadas durante o ano letivo, que servirão para testar os campeões de diferentes maneiras... sua perícia em magia, sua coragem, seus poderes de dedução e, naturalmente, sua capacidade de enfrentar o perigo.'<br><br>O Torneio Tribruxo será realizado em Hogwarts. Apenas bruxos acima dos dezessete anos de idade podem se inscrever - mas isso não impede que Harry sonhe em vencer a competição. E então, no Dia das Bruxas, quando o Cálice de Fogo faz sua seleção, Harry se surpreende ao ver que seu nome é um dos que a taça mágica escolhe. Ele terá de enfrentar tarefas mortais, dragões e bruxos das trevas, mas com a ajuda de seus melhores amigos, Ron e Hermione, talvez ele consiga sair dessa - vivo!</p>",
      },
      saleInfo: {
        listPrice: {
          amount: 24.9,
        },
      },
    },
    {
      id: '9TcQCwAAQBAJ',
      color: '#1b2764',
      volumeInfo: {
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/publisher/content?id=9TcQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE7356HFtAl3oxNR9hKFKn92uVBwYlaFzYoG1OwNUZpZ4du0oJxNGwAZ9rW20Z9Wc885HnO0ytnOfmSSmjy1Cby3B6kicGz-g-Z9B53wzOriwNM7rLRlYUiFUnooHFIgbc2EcP2Hy&source=gbs_api',
        },
        title: 'Harry Potter e a Ordem da Fênix',
        authors: ['J.K. Rowling'],
        description:
          "<p>Você está compartilhando os pensamentos e emoções do Lorde das Trevas. O diretor acha que é desaconselhável que isto continue a acontecer. E quer que eu lhe ensine como fechar a mente ao Lorde das Trevas.'<br><br>Tempos sombrios se abateram sobre Hogwarts. Depois do ataque dos Dementadores ao seu primo Dudley, Harry Potter sabe que Voldemort fará tudo para encontrá-lo. Muitos negam o retorno do Lorde das Trevas, mas Harry não está sozinho: uma ordem secreta se reúne no Largo Grimmauld para fazer frente às forças sombrias. Harry precisa permitir que o professor Snape o ensine a se proteger dos vorazes ataques de Voldemort à sua mente. Mas eles estão ficando cada vez mais fortes, e o tempo de Harry está acabando...</p>",
      },
      saleInfo: {
        listPrice: {
          amount: 24.9,
        },
      },
    },
    {
      id: 'yjUQCwAAQBAJ',
      color: '#0b4b26',
      volumeInfo: {
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/publisher/content?id=yjUQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73X6KPJJf2m28F8r6FrVqBpnXIs4qrtze3XubEiHcrYEZSjUc8mVsV4sGmSD8aa0j9ODOMw0DdXnHq7izwfuMtiXfjZbfsZ5ICf53pVd-XdPN0lA_OJqdzswJRlhItvjNW-iCNw&source=gbs_api',
        },
        title: 'Harry Potter e o enigma do Príncipe',
        authors: ['J.K. Rowling'],
        description:
          '<p>Lá estava, pairando no céu sobre a escola: o crânio verde flamejante com uma língua de cobra, a marca deixada pelos Comensais da Morte sempre que entravam em um prédio... sempre que matavam...<br><br>Quando Dumbledore chega à Rua dos Alfeneiros numa certa noite de verão para buscar Harry Potter, a mão com que segura a varinha está enrugada e enegrecida, mas ele não revela o motivo. Segredos e suspeitas se espalham pelo Mundo Bruxo, e a própria Hogwarts não é mais segura. Harry está convencido de que Malfoy porta a Marca Negra: há um Comensal da Morte entre eles. Harry precisará de magia poderosa e amigos verdadeiros para explorar os segredos mais sombrios de Voldemort, e Dumbledore se prepara para encarar seu destino...</p>',
      },
      saleInfo: {
        listPrice: {
          amount: 24.9,
        },
      },
    },
    {
      id: '-DgQCwAAQBAJ',
      color: '#163b58',
      volumeInfo: {
        imageLinks: {
          thumbnail:
            'http://books.google.com/books/publisher/content?id=-DgQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71hAiB03ND_S2YOWYMM9QnbLRk83GD1pIzQZRh7yAZHQDBsWz6d6vg6cvkX0lmoJOHG-ThPnDyc127BsE5blvCK0egs6hKQ2UwIv1X8zJHiUk65OHP1D95IUhagcXRJKnMwNA_U&source=gbs_api',
        },
        title: 'Harry Potter e as Relíquias da Morte',
        authors: ['J.K. Rowling'],
        description:
          '<p>Entreguem-me Harry Potter", disse a voz de Voldemort, "e ninguém sairá ferido. Entreguem-me Harry Potter, e não tocarei na escola. Entreguem-me Harry Potter, e serão recompensados."<br><br>Ao subir no sidecar da moto de Hagrid e subir aos céus, deixando a Rua dos Alfeneiros pela última vez, Harry Potter sabe que o lorde Voldemort e os Comensais da Morte estão em seu encalço. O feitiço de proteção que manteve Harry seguro até o momento foi quebrado, mas ele não pode mais se esconder. O Lorde das Trevas está incutindo medo em tudo que Harry ama e, para detê-lo, Harry terá de encontrar e destruir as Horcruxes que restaram. A batalha final está para começar - Harry precisa enfrentar seu inimigo...</p>',
      },
      saleInfo: {
        listPrice: {
          amount: 24.9,
        },
      },
    },
  ]

  const booksBestSellers = MOCK_BOOKS.filter((book) => {
    if (!book.volumeInfo.imageLinks || !book.saleInfo.listPrice) return false
    return true
  })

  const booksChildren = MOCK_BOOKS.filter((book) => {
    if (!book.volumeInfo.imageLinks || !book.saleInfo.listPrice) return false
    return true
  })

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
          <CarouselThreeSlidesBanner bookList={booksBestSellers} />
        </S.Shelf1>

        <S.Shelf2>
          <CarouselFourSlides bookList={booksChildren} />
        </S.Shelf2>
      </S.MainBanner>

      <S.Shelf3>
        <S.ShelfTitle3>Nossas sugestões</S.ShelfTitle3>
        <CarouselThreeSlides bookList={MOCK_OUR_SUGGESTIONS} />
      </S.Shelf3>
    </S.Container>
  )
}
