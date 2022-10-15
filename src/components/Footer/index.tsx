import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { AiOutlineSafety } from 'react-icons/ai'
import { BsClockHistory, BsFacebook, BsFillJournalBookmarkFill, BsInstagram, BsYoutube } from 'react-icons/bs'
import { GiRibbonMedal } from 'react-icons/gi'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { Logo } from '../Logo'
import * as S from './styles'

const benefitsInfo = [
  {
    id: 1,
    icon: <AiOutlineSafety />,
    text: 'Loja 100% segura',
  },
  {
    id: 2,
    icon: <GiRibbonMedal />,
    text: 'Produtos de qualidade',
  },
  {
    id: 3,
    icon: <BsClockHistory />,
    text: 'Envio rápido',
  },
  {
    id: 4,
    icon: <BsFillJournalBookmarkFill />,
    text: 'Novidades semanais',
  },
]

export const Footer = () => {
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
  }

  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    window.addEventListener('resize', () => setWindowSize(getWindowSize()))

    return () => window.removeEventListener('resize', () => setWindowSize(getWindowSize()))
  }, [])

  const [carouselPosition, setCarouselPosition] = useState(0)
  const [initialCarousel, setInitialCarousel] = useState({ x: 150, opacity: 0 })
  const [exitCarousel, setExitCarousel] = useState({ x: -150, opacity: 0 })

  const handleNextCarousel = () => {
    carouselPosition === benefitsInfo.length - 1 ? setCarouselPosition(0) : setCarouselPosition(carouselPosition + 1)
    setInitialCarousel({ x: 150, opacity: 0 })
    setExitCarousel({ x: -150, opacity: 0 })
  }

  const handlePrevCarousel = () => {
    carouselPosition === 0 ? setCarouselPosition(benefitsInfo.length - 1) : setCarouselPosition(carouselPosition - 1)
    setInitialCarousel({ x: -150, opacity: 0 })
    setExitCarousel({ x: 150, opacity: 0 })
  }

  const paramDragCarousel = 0

  const swipeCarousel = (offset: number, velocity: number) => Math.abs(offset) * velocity

  return (
    <S.Footer>
      <S.BenefitsBar>
        <S.BenefitsBarWrapper>
          {windowSize.innerWidth > 768 &&
            benefitsInfo.map((benefit) => {
              return (
                <S.BenefitWrapper key={benefit.id}>
                  {benefit.icon}
                  <S.TextBenefit>{benefit.text}</S.TextBenefit>
                </S.BenefitWrapper>
              )
            })}

          {windowSize.innerWidth <= 768 && (
            <>
              <S.ButtonPrevCarousel onClick={handlePrevCarousel}>
                <GrFormPrevious />
              </S.ButtonPrevCarousel>

              <AnimatePresence mode="wait">
                <motion.div
                  key={benefitsInfo[carouselPosition].id}
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
                  <S.BenefitWrapper>
                    {benefitsInfo[carouselPosition].icon}
                    <S.TextBenefit>{benefitsInfo[carouselPosition].text}</S.TextBenefit>
                  </S.BenefitWrapper>
                </motion.div>
              </AnimatePresence>

              <S.ButtonNextCarousel onClick={handleNextCarousel}>
                <GrFormNext />
              </S.ButtonNextCarousel>
            </>
          )}
        </S.BenefitsBarWrapper>
      </S.BenefitsBar>

      <S.InstitutionalWrapper>
        <Logo />

        <S.SocialNetworks>
          <BsFacebook />
          <BsInstagram />
          <BsYoutube />
        </S.SocialNetworks>

        <S.InstitutionalContent>
          <S.Institutional>
            <S.TitleInstitutional to="/institucional">INSTITUCIONAL</S.TitleInstitutional>
            <S.TextInstitutional to="/institucional/sobre-nos">Conheça a Estante Virtual</S.TextInstitutional>
            <S.TextInstitutional to="/institucional/fale-conosco">Fale conosco</S.TextInstitutional>
          </S.Institutional>

          <S.MyAccount>
            <S.TitleInstitutional to="/minha-conta">MINHA CONTA</S.TitleInstitutional>
            <S.TextInstitutional to="/minha-conta/dados">Meus dados</S.TextInstitutional>
            <S.TextInstitutional to="/minha-conta/pedidos">Meus pedidos</S.TextInstitutional>
          </S.MyAccount>

          <S.Help>
            <S.TitleInstitutional to="/institucional">AJUDA</S.TitleInstitutional>
            <S.TextInstitutional to="/institucional/politica-de-pagamentos">Política de pagamento</S.TextInstitutional>
            <S.TextInstitutional to="/institucional/trocas-e-devolucoes">Trocas e devoluções</S.TextInstitutional>
            <S.TextInstitutional to="/institucional/nossas-lojas">Nossas lojas</S.TextInstitutional>
          </S.Help>
        </S.InstitutionalContent>
      </S.InstitutionalWrapper>
    </S.Footer>
  )
}
