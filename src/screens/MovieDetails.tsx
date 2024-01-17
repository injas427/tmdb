import { IMAGES } from '@src/assets/images';
import { Loader } from '@src/components';
import { useMovies } from '@src/hooks';
import { COLORS, FONT_NAMES, FONT_SIZES } from '@src/theme';
import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Keys from 'react-native-keys';
import { type MovieDetail as MovieDetailType } from '@types';
import dayjs from 'dayjs';

const GENRE_BACKGROUNDS = [
  COLORS.blue,
  COLORS.blue500,
  COLORS.green,
  COLORS.pink,
  COLORS.violet,
  COLORS.yellow,
];

export const MovieDetails = ({ route, navigation }) => {
  const { movieId } = route.params;

  const { useFetchMovieDetails } = useMovies();
  const {
    data: movieDetails,
    isLoading,
  }: { data: MovieDetailType; isLoading: boolean } = useFetchMovieDetails({
    id: movieId,
  });

  const handleBack = () => navigation.goBack();

  if (isLoading) {
    return <Loader isLoading />;
  }
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={style.headerContainer} onPress={handleBack}>
        <Image source={IMAGES.arrowBack} style={style.backArrow} />
        <Text style={style.headerTitle}>{movieDetails.title}</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{
            uri: `${Keys.TMDB_IMAGE_URL}/original/${movieDetails.poster_path}`,
          }}
          style={style.movieImage}>
          <View />
          <View style={style.itemContainer}>
            <Text style={style.releaseTitle}>{`In Theaters ${dayjs(
              movieDetails.release_date,
            ).format('MMMM DD, YYYY')}`}</Text>

            <TouchableOpacity style={style.ticketButton}>
              <Text style={style.ticketTitle}>Get Tickets</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.watchTrailerButton}>
              <Text style={style.ticketTitle}>Watch Trailer</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={style.contentContainer}>
          <Text style={style.genresTitle}>Genres</Text>
          <View style={style.genreContainer}>
            {movieDetails.genres.map(genre => (
              <View
                key={genre.id}
                style={[
                  style.genreItemContainer,
                  {
                    backgroundColor:
                      GENRE_BACKGROUNDS[
                      Math.floor(GENRE_BACKGROUNDS.length * Math.random())
                      ],
                  },
                ]}>
                <Text style={style.genreItemTitle}>{genre.name}</Text>
              </View>
            ))}
          </View>
          <View style={style.divider} />

          <Text style={style.genresTitle}>Overview</Text>
          <Text style={style.overview}>{movieDetails.overview}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  movieImage: {
    flex: 1,
    height: 400,
    justifyContent: 'space-between',
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  headerTitle: {
    fontFamily: FONT_NAMES.medium,
    fontSize: FONT_SIZES.large,
    color: COLORS.white,
  },
  backArrow: {
    width: 30,
    height: 30,
    tintColor: COLORS.white,
  },
  itemContainer: {
    marginVertical: 20,
    alignItems: 'center',
    marginHorizontal: 50,
  },
  releaseTitle: {
    fontFamily: FONT_NAMES.medium,
    fontSize: FONT_SIZES.xlarge,
    color: COLORS.white,
  },
  ticketButton: {
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 10,
  },
  ticketTitle: {
    fontFamily: FONT_NAMES.medium,
    fontSize: FONT_SIZES.large,
    color: COLORS.white,
  },
  watchTrailerButton: {
    marginTop: 10,
    backgroundColor: COLORS.blackOpacity(30),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 10,
    borderColor: COLORS.blue,
    borderWidth: 1,
  },
  contentContainer: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  genresTitle: {
    fontFamily: FONT_NAMES.medium,
    fontSize: FONT_SIZES.xlarge,
    color: COLORS.blue500,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genreItemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 3,
    borderRadius: 10,
    marginBottom: 5,
  },
  genreItemTitle: {
    color: COLORS.white,
    fontFamily: FONT_NAMES.medium,
    fontSize: FONT_SIZES.small,
  },
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: COLORS.blackOpacity(20),
    flex: 1,
  },
  overview: {
    fontFamily: FONT_NAMES.regular,
    fontSize: FONT_SIZES.regular,
    color: COLORS.gray,
  },
});
