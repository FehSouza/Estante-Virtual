import { useEffect, useState } from 'react'

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window
  return { innerWidth, innerHeight }
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    window.addEventListener('resize', () => setWindowSize(getWindowSize()))

    return () => window.removeEventListener('resize', () => setWindowSize(getWindowSize()))
  }, [])

  return windowSize
}
