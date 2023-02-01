import * as S from './styles'

interface FormCheckoutPaymentProps {
  form: {
    label: string
    id: string
    icons: JSX.Element[]
  }[]
}

export const FormCheckoutPayment = ({ form }: FormCheckoutPaymentProps) => {
  return (
    <S.Form>
      <S.Title>Pagamento:</S.Title>

      <S.Container>
        {form.map((item) => (
          <S.Wrapper key={item.id}>
            <S.Checkbox id={item.id} type="checkbox" />
            <S.Text htmlFor={item.id}>{item.label}</S.Text>
            <S.Icons>
              {item.icons.map((icon, i) => (
                <div key={i}>{icon}</div>
              ))}
            </S.Icons>
          </S.Wrapper>
        ))}
      </S.Container>
    </S.Form>
  )
}
