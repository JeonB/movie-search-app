interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
interface Rating {
  Source: string
  Value: string
}
interface MovieDetail extends Movie {
  Genre: string
  Runtime: string
  Director: string
  Plot: string
  Actors: string
  imdbRating: string
  Ratings: Rating[]
  Rated: string
}
