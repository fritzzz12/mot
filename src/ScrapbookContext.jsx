import { createContext, useContext } from 'react'

export const ScrapbookContext = createContext(null)

export function useScrapbook() {
  const ctx = useContext(ScrapbookContext)
  if (!ctx) {
    return {
      openPhoto: () => {},
      burstHearts: () => {},
      goTo: () => {},
      soundsOn: false,
    }
  }
  return ctx
}
