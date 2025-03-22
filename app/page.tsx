import MovieList from '@/components/MovieList'
import SearchBar from '@/components/SearchBar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '영화 검색 앱',
  description: '영화 리스트 및 상세 정보를 검색할 수 있는 앱',
}
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Movie Search App</h1>
      <SearchBar />
      <MovieList />
    </main>
  )
}
