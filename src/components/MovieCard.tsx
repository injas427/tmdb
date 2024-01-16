import { COLORS, FONT_NAMES, FONT_SIZES } from "@src/theme"
import React from "react"
import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import Keys from "react-native-keys"

export const MovieCard = ({item}) => <TouchableOpacity style={{marginVertical: 10}} >
  <ImageBackground source={{uri: `${Keys.TMDB_IMAGE_URL}/w300/${item.poster_path}`}} style={{height: 200, borderRadius: 10, overflow: "hidden", flex: 1, justifyContent: "flex-end"}} >
    <Text style={{fontFamily: FONT_NAMES.semiBold, fontSize: FONT_SIZES.xlarge, color: COLORS.white, padding: 15}} >
      {item.title}
    </Text>
  </ImageBackground>
</TouchableOpacity>