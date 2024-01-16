import { Loader, MovieCard } from '@src/components';
import { useGenres, useMovies } from '@hooks';
import React, { useEffect, useState } from 'react';
import {FlatList, Text, View} from 'react-native';
import { COLORS, FONT_NAMES } from '@src/theme';

export const GenreList = () => {
  
  const {useFetchGenres} = useGenres()

  const {data:genres, isLoading} = useFetchGenres()
  

  const keyExtractor = (item, index) => `${item.id}_${index}`

  const renderItem = ({item}) => <View style={{height: 100,
    borderRadius: 10,
    overflow: "hidden",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderEndEndRadius: 10,
    backgroundColor: COLORS.blackOpacity(10),
    margin: 5
    }}>
    <Text style={{fontFamily: FONT_NAMES.bold, color: COLORS.primary}} >
      {item.name}
    </Text>
  </View>

  return <>
      <Loader isVisible={isLoading} />

  <FlatList
    data={genres?.genres ?? []}
    keyExtractor={keyExtractor}
    renderItem={renderItem}
    style={{paddingHorizontal: 20, marginBottom: 54}}
    numColumns={2}
    />
    </>
}