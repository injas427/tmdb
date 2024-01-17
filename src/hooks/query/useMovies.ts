import { fetchUpcomingMovies, searchMovies } from "@src/api/movies"
import { QUERY_KEYS } from "@src/constants"
import { useInfiniteQuery } from "@tanstack/react-query"

export const useMovies = () => {
  return {
    useFetchMovies: ({ page = 1 }) => useInfiniteQuery({
      queryKey: [QUERY_KEYS.MOVIES],
      queryFn: () => fetchUpcomingMovies({ page }),
      getNextPageParam: (lastPage, allPages) => allPages.length === lastPage.total_pages ? undefined : page
    })
  }
}