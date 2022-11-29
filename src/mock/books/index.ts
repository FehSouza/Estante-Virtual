import { BooksProps, BooksResponseProps } from '../../@types'

export const MOCK_BOOKS: BooksResponseProps[] = [
  {
    id: '1',
    volumeInfo: {
      imageLinks: {
        thumbnail: 'http://books.google.com/books/content?id=AKJGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      title: 'É assim que acaba',
      authors: ['Ed Warren', 'Lorraine Warren', 'Carmen Reed', 'Al Snedeker', 'Ray Garton'],
      publisher: 'Editora Record',
      publishedDate: '2018-02-05',
      pageCount: 368,
      averageRating: 5,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
      publisher: 'Best Seller',
      publishedDate: '2021-11-09',
      pageCount: 368,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
        thumbnail: 'http://books.google.com/books/content?id=AKJGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      title: 'É assim que acaba',
      authors: ['Colleen Hoover'],
      publisher: 'Best Seller',
      publishedDate: '2021-11-09',
      pageCount: 368,
      averageRating: 5,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    saleInfo: {},
  },
  {
    id: '4',
    volumeInfo: {
      imageLinks: {
        thumbnail: 'http://books.google.com/books/content?id=_5lEEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      title: 'Will',
      authors: ['Will Smith', 'Mark Manson'],
      publisher: 'Best Seller',
      publishedDate: '2021-11-09',
      pageCount: 476,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
        thumbnail: 'http://books.google.com/books/content?id=iTz-ArpyOEEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      title: 'Extraordinário',
      authors: ['R.J.Palacio'],
      publisher: 'Best Seller',
      publishedDate: '2021-11-09',
      pageCount: 476,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
        thumbnail: 'http://books.google.com/books/content?id=MwNlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      title: 'É assim que acaba',
      authors: ['Colleen Hoover'],
      publisher: 'Best Seller',
      publishedDate: '2021-11-09',
      pageCount: 368,
      averageRating: 5,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
      publisher: 'Best Seller',
      publishedDate: '2021-11-09',
      pageCount: 368,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
        thumbnail: 'http://books.google.com/books/content?id=AKJGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      title: 'É assim que acaba',
      authors: ['Colleen Hoover'],
      publisher: 'Best Seller',
      publishedDate: '2021-11-09',
      pageCount: 368,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    saleInfo: {},
  },
  {
    id: '9',
    volumeInfo: {
      imageLinks: {
        thumbnail: 'http://books.google.com/books/content?id=99PsjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      title: 'Will',
      authors: ['Will Smith', 'Mark Manson'],
      publisher: 'Best Seller',
      publishedDate: '2021-11-09',
      pageCount: 476,
      averageRating: 5,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
        thumbnail: 'http://books.google.com/books/content?id=7sWGCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      title: 'Extraordinário',
      authors: ['R.J.Palacio'],
      publisher: 'Best Seller',
      publishedDate: '2021-11-09',
      pageCount: 476,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    saleInfo: {
      listPrice: {
        amount: 39.9,
      },
    },
  },
  {
    id: '11',
    volumeInfo: {
      imageLinks: {
        thumbnail: 'http://books.google.com/books/content?id=_5lEEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      title: 'Will',
      authors: ['Will Smith', 'Mark Manson'],
      publisher: 'Best Seller',
      publishedDate: '2021-11-09',
      pageCount: 476,
      averageRating: 5,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    saleInfo: {
      listPrice: {
        amount: 39.9,
      },
    },
  },
]

export const MOCK_OUR_SUGGESTIONS: BooksProps[] = [
  {
    id: 'PDcQCwAAQBAJ',
    color: '#dd363b',
    volumeInfo: {
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/publisher/content?id=PDcQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72CxWBLJ5SkfVo8ase0NJ54rilNZTPmFV3cl2o8Zdnz2bs52KGnANvMbXkpcrrIFdFynJECD-RQceesGYDihMCAqUix-vakW74wnXhUhbyYsgVmh3gFG3Qo6FHmXvbUury27w_N&source=gbs_api',
      },
      title: 'Harry Potter e a Pedra Filosofal',
      authors: ['J.K. Rowling'],
      publisher: 'Editora Rocco',
      publishedDate: '2000-01-01',
      pageCount: 254,
      averageRating: 4.5,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        '<p>Harry Potter não é um herói habitual. É apenas um miúdo magricela, míope e desajeitado com uma estranha cicatriz na testa. Estranha, de facto, porque afinal encerra misteriosos poderes que o distinguem do cinzento mundo dos muggles (os complicados humanos) e que irá fazer dele uma criança especialmente dotada para o universo da magia. Admitido na escola de Hogwarts onde se formam os mais famosos feiticeiros do mundo, Harry Potter irá viver todas as aventuras que a sua imaginação lhe irá proporcionar.</p>',
    },
    saleInfo: {
      listPrice: {
        amount: 24.9,
      },
    },
  },
  {
    id: 'hjcQCwAAQBAJ',
    color: '#106fd3',
    volumeInfo: {
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/publisher/content?id=hjcQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71I9IcediD2xl7tXjesvgQSgog1jQZKwnOg9qgtNmaIkgZoRnU-_izod_LZlWNrTNSfnA8fBRkhVXUYA_kzVcyNDd33XWm0LanIzDaotC8QJXC7Oz_qwM099Nn0VDqpdxpqPfNE&source=gbs_api',
      },
      title: 'Harry Potter e a Câmara Secreta',
      authors: ['J.K. Rowling'],
      publisher: 'Editora Rocco',
      publishedDate: '2000-08-01',
      pageCount: 252,
      averageRating: 5,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        "<p>Há uma trama, Harry Potter. Uma trama para fazer coisas terríveis acontecerem na Escola de Magia e Bruxaria de Hogwarts este ano.'<br><br>O verão de Harry Potter incluiu o pior aniversário de todos, avisos macabros de um elfo doméstico chamado Dobby, e ser resgatado dos Dursleys por seu amigo Rony Weasley em um carro voador mágico! De volta à Escola de Magia e Bruxaria de Hogwarts para seu segundo ano, Harry ouve estranhos sussurros ecoando pelos corredores vazios - e então, os ataques começam! Estudantes são encontrados transformados em pedra... As previsões sinistras de Dobby parecem estar se tornando realidade.</p>",
    },
    saleInfo: {
      listPrice: {
        amount: 23.2,
      },
    },
  },
  {
    id: 'qDYQCwAAQBAJ',
    color: '#851ac1',
    volumeInfo: {
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/publisher/content?id=qDYQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE738-JbDBeO5_Fs3geWuGlTh5juhWxPPS5nPsvBSkkgPlxe6LmqRa9YiHM_KbR0qieHiPlNScO9fN1if93lx0OL82GP9vT0xiqUV0Ij4QgwwRerU3bX65FKPXg-rRUjWrEq0u0iV&source=gbs_api',
      },
      title: 'Harry Potter e o Prisioneiro de Azkaban',
      authors: ['J.K. Rowling'],
      publisher: 'Editora Rocco',
      publishedDate: '2000-12-01',
      pageCount: 318,
      averageRating: 5,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        "<p>Bem-vindo ao ônibus Nôitibus Andante, o transporte de emergência para bruxos e bruxas perdidos. Basta esticar a mão da varinha, subir a bordo e podemos levá-lo aonde quiser.'<br><br>Quando o ônibus Nôitibus Andante surge repentinamente da escuridão e solta um guincho de seu freio bem à sua frente, mais um ano nada normal em Hogwarts começa para Harry Potter. Sirius Black, assassino em série fugitivo e seguidor do Lorde Voldemort, está à solta - e dizem que está indo atrás de Harry. Em sua primeira aula de Adivinhação, a professora Trelawney vê um agouro de morte nas folhas do chá de Harry... Mas talvez a parte mais assustadora seja os Dementadores patrulhando os pátios da escola, com seus beijos que sugam a alma...</p>",
    },
    saleInfo: {
      listPrice: {
        amount: 27.9,
      },
    },
  },
  {
    id: 'ZDgQCwAAQBAJ',
    color: '#030b22',
    volumeInfo: {
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/publisher/content?id=ZDgQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70lh1TUc47g9URc4jO-PLk8wjPgBYOAhX00rL_18xL7DTjlq2pysneefcaUYiInXW47UHbiLcVvde8x6STPzjVTZNlTi4ZpXvdDkR3GZ5B5PDq6GJCWxyZPGntyXRkwl85g72Bz&source=gbs_api',
      },
      title: 'Harry Potter e o Cálice de Fogo',
      authors: ['J.K. Rowling'],
      publisher: 'Editora Rocco',
      publishedDate: '2001-06-01',
      pageCount: 535,
      averageRating: 4,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        "<p>Haverá três tarefas, espaçadas durante o ano letivo, que servirão para testar os campeões de diferentes maneiras... sua perícia em magia, sua coragem, seus poderes de dedução e, naturalmente, sua capacidade de enfrentar o perigo.'<br><br>O Torneio Tribruxo será realizado em Hogwarts. Apenas bruxos acima dos dezessete anos de idade podem se inscrever - mas isso não impede que Harry sonhe em vencer a competição. E então, no Dia das Bruxas, quando o Cálice de Fogo faz sua seleção, Harry se surpreende ao ver que seu nome é um dos que a taça mágica escolhe. Ele terá de enfrentar tarefas mortais, dragões e bruxos das trevas, mas com a ajuda de seus melhores amigos, Ron e Hermione, talvez ele consiga sair dessa - vivo!</p>",
    },
    saleInfo: {
      listPrice: {
        amount: 49.9,
      },
    },
  },
  {
    id: '9TcQCwAAQBAJ',
    color: '#2f40af',
    volumeInfo: {
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/publisher/content?id=9TcQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE7356HFtAl3oxNR9hKFKn92uVBwYlaFzYoG1OwNUZpZ4du0oJxNGwAZ9rW20Z9Wc885HnO0ytnOfmSSmjy1Cby3B6kicGz-g-Z9B53wzOriwNM7rLRlYUiFUnooHFIgbc2EcP2Hy&source=gbs_api',
      },
      title: 'Harry Potter e a Ordem da Fênix',
      authors: ['J.K. Rowling'],
      publisher: 'Editora Rocco',
      publishedDate: '2003-11-29',
      pageCount: 703,
      averageRating: 4,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        "<p>Você está compartilhando os pensamentos e emoções do Lorde das Trevas. O diretor acha que é desaconselhável que isto continue a acontecer. E quer que eu lhe ensine como fechar a mente ao Lorde das Trevas.'<br><br>Tempos sombrios se abateram sobre Hogwarts. Depois do ataque dos Dementadores ao seu primo Dudley, Harry Potter sabe que Voldemort fará tudo para encontrá-lo. Muitos negam o retorno do Lorde das Trevas, mas Harry não está sozinho: uma ordem secreta se reúne no Largo Grimmauld para fazer frente às forças sombrias. Harry precisa permitir que o professor Snape o ensine a se proteger dos vorazes ataques de Voldemort à sua mente. Mas eles estão ficando cada vez mais fortes, e o tempo de Harry está acabando...</p>",
    },
    saleInfo: {
      listPrice: {
        amount: 49.8,
      },
    },
  },
  {
    id: 'yjUQCwAAQBAJ',
    color: '#046e1e',
    volumeInfo: {
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/publisher/content?id=yjUQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73X6KPJJf2m28F8r6FrVqBpnXIs4qrtze3XubEiHcrYEZSjUc8mVsV4sGmSD8aa0j9ODOMw0DdXnHq7izwfuMtiXfjZbfsZ5ICf53pVd-XdPN0lA_OJqdzswJRlhItvjNW-iCNw&source=gbs_api',
      },
      title: 'Harry Potter e o Enigma do Príncipe',
      authors: ['J.K. Rowling'],
      publisher: 'Editora Rocco',
      publishedDate: '2005-11-26',
      pageCount: 471,
      averageRating: 5,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        '<p>Lá estava, pairando no céu sobre a escola: o crânio verde flamejante com uma língua de cobra, a marca deixada pelos Comensais da Morte sempre que entravam em um prédio... sempre que matavam...<br><br>Quando Dumbledore chega à Rua dos Alfeneiros numa certa noite de verão para buscar Harry Potter, a mão com que segura a varinha está enrugada e enegrecida, mas ele não revela o motivo. Segredos e suspeitas se espalham pelo Mundo Bruxo, e a própria Hogwarts não é mais segura. Harry está convencido de que Malfoy porta a Marca Negra: há um Comensal da Morte entre eles. Harry precisará de magia poderosa e amigos verdadeiros para explorar os segredos mais sombrios de Voldemort, e Dumbledore se prepara para encarar seu destino...</p>',
    },
    saleInfo: {
      listPrice: {
        amount: 34.9,
      },
    },
  },
  {
    id: '-DgQCwAAQBAJ',
    color: '#ffb110',
    volumeInfo: {
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/publisher/content?id=-DgQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71hAiB03ND_S2YOWYMM9QnbLRk83GD1pIzQZRh7yAZHQDBsWz6d6vg6cvkX0lmoJOHG-ThPnDyc127BsE5blvCK0egs6hKQ2UwIv1X8zJHiUk65OHP1D95IUhagcXRJKnMwNA_U&source=gbs_api',
      },
      title: 'Harry Potter e as Relíquias da Morte',
      authors: ['J.K. Rowling'],
      publisher: 'Editora Rocco',
      publishedDate: '2007-11-08',
      pageCount: 551,
      averageRating: 5,
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8599296019',
        },
        {
          type: 'ISBN_13',
          identifier: '9788599296011',
        },
      ],
      language: 'pt-BR',
      description:
        '<p>Entreguem-me Harry Potter", disse a voz de Voldemort, "e ninguém sairá ferido. Entreguem-me Harry Potter, e não tocarei na escola. Entreguem-me Harry Potter, e serão recompensados."<br><br>Ao subir no sidecar da moto de Hagrid e subir aos céus, deixando a Rua dos Alfeneiros pela última vez, Harry Potter sabe que o lorde Voldemort e os Comensais da Morte estão em seu encalço. O feitiço de proteção que manteve Harry seguro até o momento foi quebrado, mas ele não pode mais se esconder. O Lorde das Trevas está incutindo medo em tudo que Harry ama e, para detê-lo, Harry terá de encontrar e destruir as Horcruxes que restaram. A batalha final está para começar - Harry precisa enfrentar seu inimigo...</p>',
    },
    saleInfo: {
      listPrice: {
        amount: 36.9,
      },
    },
  },
]
