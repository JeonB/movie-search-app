'use client'
import { use } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getMovieDetails } from '@/lib/fetchData'
import Image from 'next/image'
import Link from 'next/link'

export default function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)

  const { data: movie } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(id),
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="mb-6 inline-block text-blue-500 hover:underline">
        &larr; Back to search
      </Link>

      <div className="overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="md:flex">
          <div className="relative h-96 md:w-64 md:flex-shrink-0">
            {movie?.Poster && movie.Poster !== 'N/A' ? (
              <Image
                src={movie.Poster}
                alt={movie.Title}
                fill
                sizes="100%"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gray-200">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
          </div>

          {movie && (
            <div className="p-8">
              <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                {movie.Year} • {movie.Rated} • {movie.Runtime}
              </div>
              <h1 className="mt-1 text-2xl leading-tight font-bold text-gray-900">
                {movie.Title}
              </h1>

              <div className="mt-4">
                <div className="flex items-center">
                  <span className="mr-1 text-yellow-500">★</span>
                  <span className="text-gray-600">{movie.imdbRating}/10</span>
                </div>

                <p className="mt-2">
                  <span className="font-semibold text-gray-600">Director:</span>
                  <span className="text-neutral-400"> {movie.Director}</span>
                </p>
                <p className="mt-1">
                  <span className="font-semibold text-gray-600">Cast:</span>
                  <span className="text-neutral-400"> {movie.Actors}</span>
                </p>
                <p className="mt-1">
                  <span className="font-semibold text-gray-600">Genre:</span>
                  <span className="text-neutral-400"> {movie.Genre}</span>
                </p>

                <div className="mt-4">
                  <h2 className="text-lg font-semibold text-gray-600">Plot</h2>
                  <p className="mt-2 text-neutral-400">{movie.Plot}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
