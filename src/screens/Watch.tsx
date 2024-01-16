import { Header, Loader, MovieCard } from '@src/components';
import { useMovies } from '@hooks';
import React, { useEffect, useState } from 'react';
import {FlatList, Text, View} from 'react-native';

export const Watch = () => {
  const [page, setPage] = useState(1)
  
  const {useFetchMovies} = useMovies()

  const {data, isLoading, hasNextPage, fetchNextPage} = useFetchMovies({page})


  useEffect(() => {    
    if(hasNextPage) fetchNextPage()
  }, [page])
  

  const movieList = data?.pages.map(p => p.results).flat() ?? []

  const keyExtractor = (item, index) => `${item.id}_${index}`

  const onEndReached = () => setPage(prev => prev + 1)


  return <View>
    <Loader isVisible={isLoading} />
    <Header title='Watch' showSearch />
    <FlatList
    data={movieList}
    keyExtractor={keyExtractor}
    renderItem={MovieCard}
    style={{paddingHorizontal: 20, marginBottom: 54}}
    onEndReached={onEndReached}
    />
  </View>
}