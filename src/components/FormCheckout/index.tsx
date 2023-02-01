import * as S from './styles'

interface FormCheckoutProps {
  title: string
  form: {
    label: string
    id: string
  }[]
}

export const FormCheckout = ({ title, form }: FormCheckoutProps) => {
  return (
    <S.Form>
      <S.Title>{title}</S.Title>

      <S.Container>
        {form.map((item) => (
          <S.Wrapper key={item.id}>
            <S.Label htmlFor={item.id}>{item.label}</S.Label>
            <S.Input id={item.id} />
          </S.Wrapper>
        ))}
      </S.Container>
    </S.Form>
  )
}
