import styled, { keyframes } from 'styled-components'

export const shimmer = keyframes`
  from {
    background-position: -500px 0;
  }
  to {
    background-position: 500px 0;
  }
`

export const BookWrapper = styled.li`
  width: calc((100% - 114px) / 4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 12px;
  box-sizing: border-box;
`

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 9/13;
  border-radius: 16px;
  border: 1px solid transparent;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`

export const BookName = styled.span`
  margin-top: 16px;
  width: 100%;
  height: 38px;
  border-radius: 8px;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`

export const BookAuthor = styled.span`
  margin-top: 8px;
  width: 100%;
  height: 34px;
  border-radius: 8px;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`

export const BookPrice = styled.div`
  margin-top: 16px;
  width: 50%;
  height: 17px;
  border-radius: 8px;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`

export const BookBestPrice = styled.div`
  margin-top: 8px;
  width: 50%;
  height: 19px;
  border-radius: 8px;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`

export const ButtonBuy = styled.button`
  margin-top: 16px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`
