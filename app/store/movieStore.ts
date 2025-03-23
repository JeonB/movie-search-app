import { createStore } from 'zustand/vanilla'

export interface MovieStore {
  movies: Movie[]
  setMovies: (movies: Movie[]) => void

  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

export const defaultInitState = {
  movies: [],
  isLoading: false,
}
export const createMovieStore = (initState = defaultInitState) => {
  return createStore<MovieStore>()(set => ({
    ...initState,
    setMovies: movies => set({ movies }),
    setIsLoading: isLoading =>
      set({
        isLoading,
      }),
  }))
}
