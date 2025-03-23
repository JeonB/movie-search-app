'use client'

import { useEffect, useState } from 'react'
import { useMovieStore } from '../store/movie-store-provider'
import { useQuery } from '@tanstack/react-query'
import { searchMovies } from '@/lib/fetchData'

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const { setMovies, setIsLoading } = useMovieStore(state => state)

  const { data, isLoading } = useQuery<Movie[]>({
    queryKey: ['movies', searchTerm],
    queryFn: () => searchMovies(searchTerm),
    enabled: !!searchTerm,
    staleTime: 5 * 1000,
  })

  useEffect(() => {
    setIsLoading(isLoading)
    if (data) {
      setMovies(data)
    }
  }, [data, isLoading, setIsLoading, setMovies])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSearchTerm(inputValue)
  }

  return (
    <form onSubmit={handleSearch} className="mx-auto mb-8 w-full max-w-md">
      <div className="flex items-center border-b border-gray-300 py-2">
        <input
          className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none"
          type="text"
          placeholder="Search for movies..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button
          className="flex-shrink-0 rounded border-4 border-blue-500 bg-blue-500 px-2 py-1 text-sm text-white hover:border-blue-700 hover:bg-blue-700"
          type="submit">
          Search
        </button>
      </div>
    </form>
  )
}
