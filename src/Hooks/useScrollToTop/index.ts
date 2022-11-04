import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollToTop = (disabled?: boolean, selector: string = 'html') => {
  const { pathname } = useLocation()

  useEffect(() => {
    !disabled && document.querySelector(selector as string)?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, disabled, selector])
}
