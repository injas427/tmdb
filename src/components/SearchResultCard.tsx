import { useGenres } from "@src/hooks"
import { COLORS, FONT_NAMES, FONT_SIZES } from "@src/theme"
import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Keys from "react-native-keys"

export const SearchResultCard = ({item, genres = []}) => {

  const getFirstGenre = (genresIds: number[]) => {
    if(genresIds.length > 0) {
      const genre = genres.find(g => g.id === genresIds[0])
      
      return genre.name
    }
    
    return ""
  }

return <TouchableOpacity style={style.container} >
  <Image source={{uri: `${Keys.TMDB_IMAGE_URL}/w300${item.poster_path}`}} style={style.image} />
  <View style={style.titleContainer} >
    <Text style={style.title} >{item.title}</Text>
    <Text >{getFirstGenre(item.genre_ids)}</Text>
    </View>
</TouchableOpacity>
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10
  },
  titleContainer: {
    flex: 3,
    marginLeft: 10
  },
  image: {
    flex: 2,
    height: 100,
    borderRadius: 10
  },
  title: {
    fontFamily: FONT_NAMES.medium,
    fontSize: FONT_SIZES.large,
    color: COLORS.blue500
  },
  genre: {
    color: COLORS.gainsboro300,
    fontSize: FONT_SIZES.regular,
    fontFamily: FONT_NAMES.medium,
  }
})