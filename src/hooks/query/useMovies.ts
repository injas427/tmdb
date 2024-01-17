import { fetchMovieDetail, fetchUpcomingMovies } from "@src/api/movies"
import { QUERY_KEYS } from "@src/constants"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const useMovies = () => {
  return {
    useFetchMovies: ({ page = 1 }) => useInfiniteQuery({
      queryKey: [QUERY_KEYS.MOVIES],
      queryFn: () => fetchUpcomingMovies({ page }),
      getNextPageParam: (lastPage, allPages) => allPages.length === lastPage.total_pages ? undefined : page
    }),
    useFetchMovieDetails: ({ id }: { id: number }) => useQuery({
      queryKey: [QUERY_KEYS.MOVIE_DETAILS, id],
      queryFn: () => fetchMovieDetail({ id }),
    }),
  }
}