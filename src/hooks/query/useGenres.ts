import { fetchGenres } from "@src/api/genres"
import { QUERY_KEYS } from "@src/constants"
import { useQuery } from "@tanstack/react-query"

export const useGenres = () => {
  return {
    useFetchGenres: () => useQuery({
      queryKey: [QUERY_KEYS.GENRES],
      queryFn: () => fetchGenres()
    })
  }
}