import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import * as S from './styles'

interface CarouselProps {
  listOfCarousel: {
    id: number
    icon: JSX.Element
    text: string
  }[]
}

export const CarouselBenefitsBar = ({ listOfCarousel }: CarouselProps) => {
  const [carouselPosition, setCarouselPosition] = useState(0)
  const [initialCarousel, setInitialCarousel] = useState({ x: 150, opacity: 0 })
  const [exitCarousel, setExitCarousel] = useState({ x: -150, opacity: 0 })

  const handleNextCarousel = () => {
    carouselPosition === listOfCarousel.length - 1 ? setCarouselPosition(0) : setCarouselPosition(carouselPosition + 1)
    setInitialCarousel({ x: 150, opacity: 0 })
    setExitCarousel({ x: -150, opacity: 0 })
  }

  const handlePrevCarousel = () => {
    carouselPosition === 0 ? setCarouselPosition(listOfCarousel.length - 1) : setCarouselPosition(carouselPosition - 1)
    setInitialCarousel({ x: -150, opacity: 0 })
    setExitCarousel({ x: 150, opacity: 0 })
  }

  const paramDragCarousel = 0

  const swipeCarousel = (offset: number, velocity: number) => Math.abs(offset) * velocity

  return (
    <>
      <S.ButtonPrevCarousel onClick={handlePrevCarousel}>
        <GrFormPrevious />
      </S.ButtonPrevCarousel>

      <AnimatePresence mode="wait">
        <motion.div
          key={listOfCarousel[carouselPosition].id}
          initial={initialCarousel}
          animate={{ x: 0, opacity: 1 }}
          exit={exitCarousel}
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.15 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipeCarousel(offset.x, velocity.x)
            swipe < -paramDragCarousel ? handleNextCarousel() : handlePrevCarousel()
          }}
        >
          <S.Wrapper>
            {listOfCarousel[carouselPosition].icon}
            <S.Text>{listOfCarousel[carouselPosition].text}</S.Text>
          </S.Wrapper>
        </motion.div>
      </AnimatePresence>

      <S.ButtonNextCarousel onClick={handleNextCarousel}>
        <GrFormNext />
      </S.ButtonNextCarousel>
    </>
  )
}
