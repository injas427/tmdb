import { GenreList, Header, Loader, MovieCard, MovieList } from '@src/components';
import { useGenres, useMovies } from '@hooks';
import React, { useEffect, useState } from 'react';
import {FlatList, Text, View} from 'react-native';

export const Watch = () => {
  const [shouldShowMovies, setShouldShowMovies] = useState(true)

  const onSearchShow = () => setShouldShowMovies(false)

  const onSearchClose = () => setShouldShowMovies(true)

  return <View>
    <Header title='Watch' showSearch  onSearchClose={onSearchClose} onSearchShow={onSearchShow}/>
    {shouldShowMovies ? <MovieList /> : <GenreList />}
  </View>
}