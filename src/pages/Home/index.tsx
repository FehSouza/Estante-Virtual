import * as S from './styles'

export const Home = () => {
  return <S.Home>Home</S.Home>
  // useEffect(() => {
  //   const api = 'https://www.googleapis.com/books/v1/volumes?q=livros%20de%20fic%C3%A7%C3%A3o%20cientifica'
  //   fetch(api)
  //     .then((response) => {
  //       response.json().then((result) => {
  //         console.log(result)
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])
  // ------ CARROSSEL ------
  // const [count, setCount] = useState(237)
  // const [src, setSrc] = useState('https://picsum.photos/id/237/500/300')
  // const handleNext = () => {
  //   setSrc(`https://picsum.photos/id/${count + 1}/500/300`)
  //   setCount(count + 1)
  // }
  // const handlePrev = () => {
  //   setSrc(`https://picsum.photos/id/${count - 1}/500/300`)
  //   setCount(count - 1)
  // }
  // return (
  //   <S.Home>
  //     <button onClick={handleNext}> NEXT</button>
  //     <button onClick={handlePrev}> PREV</button>
  //     <S.Container>
  //       <AnimatePresence mode="popLayout">
  //         <motion.img
  //           key={src}
  //           src={src}
  //           initial={{  x: 500 }}
  //           animate={{ x: 0 }}
  //           exit={{  x: -500 }}
  //           transition={{ease: 'linear'}}
  //         />
  //       </AnimatePresence>
  //     </S.Container>
  //   </S.Home>
  // )
}
