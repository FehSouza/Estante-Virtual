import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  height: calc(100vh - 90px);
  overflow-y: auto;
  z-index: 1;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.shadow};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${({ theme }) => lighten(0.1, theme.colors.textLight)};
    border: none;
  }
`
