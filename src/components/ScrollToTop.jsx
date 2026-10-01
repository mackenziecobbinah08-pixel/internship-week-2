import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Resets scroll position whenever the route changes, including in-page anchors. */
export default function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, search])

  return null
}