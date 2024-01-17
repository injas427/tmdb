import { GenreList, Header, MovieList } from '@src/components';
import React, { useState } from 'react';
import {View} from 'react-native';

export const Watch = () => {
  const [shouldShowMovies, setShouldShowMovies] = useState(true)
  const [searchKeyword, setSearchKeyword] = useState("")

  const onSearchShow = () => setShouldShowMovies(false)

  const onSearchClose = () => {
    setSearchKeyword("")
    setShouldShowMovies(true)
  }

  const handleOnSearch = (text:string) => setSearchKeyword(text)

  return <View>
    <Header title='Watch' searchKeyword={searchKeyword} onSearch={handleOnSearch} showSearch  onSearchClose={onSearchClose} onSearchShow={onSearchShow}/>
    {shouldShowMovies ? <MovieList /> : <GenreList searchKeyword={searchKeyword} />}
  </View>
}