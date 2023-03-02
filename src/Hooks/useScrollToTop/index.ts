import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollToTop = (disabled?: boolean, selector?: string) => {
  const { pathname } = useLocation()

  useEffect(() => {
    !disabled && document.querySelector(selector as string)?.scrollTo({ top: -1000, behavior: 'smooth' })
  }, [pathname, disabled, selector])
}
