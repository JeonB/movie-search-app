'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { type MovieStore, createMovieStore } from '@/store/movieStore'

export type MovieStoreApi = ReturnType<typeof createMovieStore>

export const MovieStoreContext = createContext<MovieStoreApi | undefined>(
  undefined,
)

export interface MovieStoreProviderProps {
  children: ReactNode
}

export const MovieStoreProvider = ({ children }: MovieStoreProviderProps) => {
  const storeRef = useRef<MovieStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createMovieStore()
  }

  return (
    <MovieStoreContext.Provider value={storeRef.current}>
      {children}
    </MovieStoreContext.Provider>
  )
}

export const useMovieStore = <T,>(selector: (store: MovieStore) => T): T => {
  const movieStoreContext = useContext(MovieStoreContext)

  if (!movieStoreContext) {
    throw new Error(`useMovieStore must be used within MovieStoreProvider`)
  }

  return useStore(movieStoreContext, selector)
}
