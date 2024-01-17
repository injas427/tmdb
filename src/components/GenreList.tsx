import { GenreCard, Loader, SearchResultCard } from '@src/components';
import { useGenres, useSearchMovies } from '@hooks';
import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { COLORS, FONT_NAMES, FONT_SIZES } from '@src/theme';
import { useNavigation } from '@react-navigation/native';

const ListHeaderComponent = () => <View>
  <Text style={style.resultsTitle} >Top Results</Text>
  <View style={style.divider} />
</View>

export const GenreList = ({searchKeyword = ""}: {searchKeyword: string}) => {
 
  const [page, setPage] = useState(1)

  const {useFetchGenres} = useGenres()
  const {useSearchMoviesByName} = useSearchMovies()
  const navigation = useNavigation()

  const {data:genres, isLoading} = useFetchGenres()
  const {data: searchResults, isLoading: isSearching, hasNextPage, fetchNextPage} = useSearchMoviesByName({page, query: searchKeyword})

  useEffect(() => {
    if(hasNextPage) fetchNextPage()
  }, [page])

  const keyExtractor = (item, index) => `${item.id}_${index}`

  const searchedData = searchResults?.pages.map(p => p.results).flat()

  const onEndReached = () => setPage(prev => prev +1)
  

  return <>
      <Loader isLoading={isLoading || isSearching} />
{searchKeyword ? <FlatList
showsVerticalScrollIndicator={false}
key={"searchResults"}
    data={searchedData ?? []}
    keyExtractor={keyExtractor}
    renderItem={({item, index}) => <SearchResultCard item={item} genres={genres.genres} navigation={navigation} />}
    style={{paddingHorizontal: 20, marginBottom: 54}}
    ListHeaderComponent={ListHeaderComponent}
    onEndReached={onEndReached}
    />
    :
  <FlatList
  showsVerticalScrollIndicator={false}
  key={"genres"}
    data={genres?.genres ?? []}
    keyExtractor={keyExtractor}
    renderItem={GenreCard}
    style={{paddingHorizontal: 20, marginBottom: 54}}
    numColumns={2}
    />
}
    </>
}

const style = StyleSheet.create({
  resultsTitle: {
    fontFamily: FONT_NAMES.medium,
    fontSize: FONT_SIZES.regular,
    color: COLORS.blue500,
    marginTop: 20,
    paddingBottom: 10
  },
  divider: {
    height: 1,
    flex: 1,
    backgroundColor: COLORS.blackOpacity(11)
  }
})