'use client'

import { useMovieStore } from '@/store/movie-store-provider'
import Link from 'next/link'
import Image from 'next/image'
import LoadingPage from '@/loading'

export default function MovieList() {
  const { movies, isLoading } = useMovieStore(state => state)

  if (isLoading) return <LoadingPage />

  if (!movies.length)
    return (
      <div className="text-center">
        No movies found. Try searching for something.
      </div>
    )

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {movies.map(movie => (
        <Link
          href={`/movie/${movie.imdbID}`}
          key={movie.imdbID}
          className="block overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <div className="relative h-80 w-full">
            {movie.Poster && movie.Poster !== 'N/A' ? (
              <Image
                src={movie.Poster}
                alt={movie.Title}
                fill
                sizes="100%"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gray-200">
                <span className="text-neutral-300">No image available</span>
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="truncate text-lg font-semibold text-gray-600">
              {movie.Title}
            </h3>
            <p className="text-gray-600">{movie.Year}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
