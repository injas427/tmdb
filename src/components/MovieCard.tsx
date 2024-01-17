import { useNavigation } from "@react-navigation/native"
import { SCREEN_NAMES } from "@src/constants"
import { COLORS, FONT_NAMES, FONT_SIZES } from "@src/theme"
import React from "react"
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Keys from "react-native-keys"

export const MovieCard = ({item, navigation}) => {

  const handleMovieCardClick = () => navigation.navigate(SCREEN_NAMES.MOVIE_DETAILS, { movieId: item.id});

return <TouchableOpacity style={{marginVertical: 10}} onPress={handleMovieCardClick} >
  <ImageBackground source={{uri: `${Keys.TMDB_IMAGE_URL}/w300/${item.poster_path}`}} style={style.imageContainer} >
    <Text style={{fontFamily: FONT_NAMES.semiBold, fontSize: FONT_SIZES.xlarge, color: COLORS.white, padding: 15}} >
      {item.title}
    </Text>
  </ImageBackground>
</TouchableOpacity>
}

const style = StyleSheet.create({
  imageContainer: {
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    flex: 1,
    justifyContent: "flex-end"
  }
})