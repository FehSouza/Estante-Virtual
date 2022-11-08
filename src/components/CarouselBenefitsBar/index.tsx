import { AnimatePresence, motion, Point } from 'framer-motion'
import { useState } from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import * as S from './styles'

const variants = {
  initial: { x: 150, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -150, opacity: 0 },
} as const

const transition = { x: { type: 'just', duration: 0.35 } } as const

const dragConstraints = { left: 0, right: 0 }

const paramDragCarousel = 0

const swipeCarousel = (offset: number, velocity: number) => Math.abs(offset) * velocity

interface CarouselBenefitsBarProps {
  listOfCarousel: {
    id: number
    icon: JSX.Element
    text: string
  }[]
}

export const CarouselBenefitsBar = ({ listOfCarousel }: CarouselBenefitsBarProps) => {
  const [slide, setSlide] = useState(0)

  const lastSlide = listOfCarousel.length - 1
  const benefit = listOfCarousel[slide]
  const benefitId = benefit.id
  const benefitIcon = benefit.icon
  const benefitText = benefit.text

  const handleNextCarousel = () => setSlide((prev) => (prev === lastSlide ? 0 : prev + 1))

  const handlePrevCarousel = () => setSlide((prev) => (prev === 0 ? lastSlide : prev - 1))

  const handleOnDragEnd = (e: any, { offset, velocity }: { offset: Point; velocity: Point }) => {
    const swipe = swipeCarousel(offset.x, velocity.x)
    swipe < -paramDragCarousel ? handleNextCarousel() : handlePrevCarousel()
  }

  return (
    <>
      <S.ButtonPrevCarousel onClick={handlePrevCarousel}>
        <GrFormPrevious />
      </S.ButtonPrevCarousel>

      <AnimatePresence mode="wait" key={benefitId}>
        <motion.div
          key={benefitId}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={transition}
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={1}
          onDragEnd={handleOnDragEnd}
        >
          <S.Wrapper>
            {benefitIcon}
            <S.Text>{benefitText}</S.Text>
          </S.Wrapper>
        </motion.div>
      </AnimatePresence>

      <S.ButtonNextCarousel onClick={handleNextCarousel}>
        <GrFormNext />
      </S.ButtonNextCarousel>
    </>
  )
}
