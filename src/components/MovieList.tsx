import {Loader, MovieCard} from '@src/components';
import {useMovies} from '@hooks';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const MovieList = () => {
  const [page, setPage] = useState(1);

  const {useFetchMovies} = useMovies();
  const navigation = useNavigation();

  const {
    data: movies,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useFetchMovies({page});

  useEffect(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const movieList = movies?.pages.map(p => p.results).flat() ?? [];

  const keyExtractor = (item, index) => `${item.id}_${index}`;

  const onEndReached = () => setPage(prev => prev + 1);

  return (
    <>
      <Loader isLoading={isLoading} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={movieList}
        keyExtractor={keyExtractor}
        renderItem={({item}) => (
          <MovieCard item={item} navigation={navigation} />
        )}
        style={style.flatList}
        onEndReached={onEndReached}
      />
    </>
  );
};

const style = StyleSheet.create({
  flatList: {
    paddingHorizontal: 20,
    marginBottom: 54,
  },
});
