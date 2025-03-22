import { create } from 'zustand'

interface MovieStore {
  movies: Movie[]
  setMovies: (movies: Movie[]) => void
}

const useMovieStore = create<MovieStore>(set => ({
  movies: [],

  setMovies: movies => set({ movies }),
}))

export default useMovieStore
