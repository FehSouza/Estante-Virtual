import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  margin-top: 56px;
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
`

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;

  & + div {
    border-top: 1px solid ${({ theme }) => theme.colors.shadow};
  }
`

export const Checkbox = styled.input`
  height: 20px;
  width: 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.textLight};
  transition-duration: 350ms;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 0 16px #00000026;
  }
`

export const Text = styled.label`
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.text};
`

export const Icons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 12px;
`
