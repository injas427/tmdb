import { useNavigation } from "@react-navigation/native";
import { IMAGES } from "@src/assets/images";
import { Loader } from "@src/components";
import { useMovies } from "@src/hooks";
import { COLORS, FONT_NAMES, FONT_SIZES } from "@src/theme";
import React from "react"
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Keys from "react-native-keys"


export const MovieDetails = ({route}) => {
  const {movieId} = route.params;

  const navigation = useNavigation()
  const {useFetchMovieDetails} = useMovies()
  const { data: movieDetails, isLoading} = useFetchMovieDetails({id: movieId})

  const handleBack = () => console.log(movieDetails);
  
  
  if(isLoading) return <Loader isLoading />
  
return <View>
  
  <ScrollView showsVerticalScrollIndicator={false}>
    <ImageBackground source={{uri: `${Keys.TMDB_IMAGE_URL}/original/${movieDetails.poster_path}`}} style={style.movieImage} >
      <TouchableOpacity style={style.headerContainer} onPress={handleBack}>
        <Image source={IMAGES.arrowBack} style={style.backArrow} /><Text style={style.headerTitle} >{movieDetails.title}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
</View>
}

const style = StyleSheet.create({
  movieImage: {
    flex: 1,
    height: 400
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    flexDirection: "row",
    alignItems: "center"
  },
  headerTitle: {
fontFamily: FONT_NAMES.medium,
fontSize: FONT_SIZES.large,
color: COLORS.white
  },
  backArrow: {
    width: 30,
    height: 30,
    color: COLORS.white
  }
})