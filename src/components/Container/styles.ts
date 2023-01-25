import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 88px;
  height: calc(100vh - 88px);
  overflow-y: auto;
  overflow-x: hidden;
`
