import {searchMovies} from '@src/api/movies';
import {QUERY_KEYS} from '@src/constants';
import {useInfiniteQuery} from '@tanstack/react-query';

export const useSearchMovies = () => {
  return {
    useSearchMoviesByName: ({page = 1, query = ''}) =>
      useInfiniteQuery({
        queryKey: [QUERY_KEYS.SEARCH_RESULTS, query],
        queryFn: () => searchMovies({page, query}),
        getNextPageParam: (lastPage, allPages) =>
          allPages.length === lastPage.total_pages ? undefined : page,
      }),
  };
};
