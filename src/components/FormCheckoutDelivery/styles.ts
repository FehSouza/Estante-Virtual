import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  margin-top: 48px;
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Wrapper = styled.div`
  margin-top: 16px;
  width: calc(50% - 16px);
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
  line-height: 16px;
  transition-duration: 350ms;
  user-select: none;
`

export const Input = styled.input`
  margin-top: 8px;
  height: 38px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.textLight};
  padding: 0 12px;
  transition-duration: 350ms;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 0 16px #00000026;
  }
`
