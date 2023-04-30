import { AiOutlineSafety } from 'react-icons/ai'
import { BsClockHistory, BsFacebook, BsFillJournalBookmarkFill, BsInstagram, BsYoutube } from 'react-icons/bs'
import { GiRibbonMedal } from 'react-icons/gi'
import { useWindowSize } from '../../Hooks/index'
import { CarouselBenefitsBar } from '../CarouselBenefitsBar'
import { Logo } from '../Logo'
import * as S from './styles'

const BENEFITS_INFO = [
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
  const windowSize = useWindowSize()

  return (
    <S.Footer>
      <S.BenefitsBar>
        <S.BenefitsBarWrapper>
          {windowSize.innerWidth > 768 &&
            BENEFITS_INFO.map((benefit) => {
              return (
                <S.BenefitWrapper key={benefit.id}>
                  {benefit.icon}
                  <S.TextBenefit>{benefit.text}</S.TextBenefit>
                </S.BenefitWrapper>
              )
            })}

          {windowSize.innerWidth <= 768 && <CarouselBenefitsBar listOfCarousel={BENEFITS_INFO} />}
        </S.BenefitsBarWrapper>
      </S.BenefitsBar>

      <S.InstitutionalWrapper>
        <Logo />

        <S.SocialNetworks>
          <S.Link aria-label="Link for Facebook" href="https://pt-br.facebook.com/" target="_blank">
            <BsFacebook />
          </S.Link>
          <S.Link aria-label="Link for Instagram" href="https://www.instagram.com/" target="_blank">
            <BsInstagram />
          </S.Link>
          <S.Link aria-label="Link for YouTube" href="https://www.youtube.com/" target="_blank">
            <BsYoutube />
          </S.Link>
        </S.SocialNetworks>

        <S.InstitutionalContent>
          <S.Institutional>
            <S.TitleInstitutional to="/institucional">INSTITUCIONAL</S.TitleInstitutional>
            <S.TextInstitutional to="/institucional/sobre-nos">Conheça a Estante Virtual</S.TextInstitutional>
            <S.TextInstitutional to="/institucional/fale-conosco">Fale conosco</S.TextInstitutional>
          </S.Institutional>

          <S.MyAccount>
            <S.TitleInstitutional to="/minha-conta">MINHA CONTA</S.TitleInstitutional>
            <S.TextInstitutional to="/minha-conta/meus-dados">Meus dados</S.TextInstitutional>
            <S.TextInstitutional to="/minha-conta/meus-pedidos">Meus pedidos</S.TextInstitutional>
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
