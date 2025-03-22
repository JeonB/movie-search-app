export const searchMovies = async (searchTerm: string) => {
  if (!searchTerm) return []
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${
        process.env.NEXT_PUBLIC_OMDB_API_KEY
      }`,
    )

    const data = await response.json()
    const movies: Movie[] = data.Search
    return movies || []
  } catch (error) {
    console.error('Error fetching movies:', error)
    throw new Error('Failed to fetch movies')
  }
}

export const getMovieDetails = async (imdbID: string) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`,
    )

    const data: MovieDetail = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching movie details:', error)
    throw new Error('Failed to fetch movie details')
  }
}
