import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  max-height: 532px;
  overflow-y: auto;
  padding-right: 16px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.shadow};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${({ theme }) => lighten(0.1, theme.colors.textLight)};
    border: none;
  }
`
